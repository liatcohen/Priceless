const Sequelize = require('sequelize')
const express = require('express')
const router = express.Router()
const moment = require('moment')
const axios = require('axios')
const sequelize = new Sequelize('mysql://root:root@localhost/priceless')
const cron = require('node-cron')
const sendMailFunc = require("./../send-email")

// *****checking the connection******

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     })

// *********post new concert*********

// sendMailFunc("hadaralon3@gmail.com")

const cronJobs = {}

const findArtistImg = async artist => {
    let images = await axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search/?q=${artist}%20concert&minHeight=1500&aspect=Wide&maxFileSize=200000`, { headers: {"Ocp-Apim-Subscription-Key": '48662c45baf24c069aa00b0f1cff2222'}})
    if(!images.data.value.length){
        images = await axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search/?q=${artist}%20concert&minHeight=1200&aspect=Wide&maxFileSize=200000`, { headers: {"Ocp-Apim-Subscription-Key": '48662c45baf24c069aa00b0f1cff2222'}})
        if(!images.data.value.length){
            images = await axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search/?q=${artist}%20concert&minHeight=900&aspect=Wide&maxFileSize=200000`, { headers: {"Ocp-Apim-Subscription-Key": '48662c45baf24c069aa00b0f1cff2222'}})
            if(!images.data.value.length){
                images = await axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search/?q=${artist}&maxFileSize=300000`, { headers: {"Ocp-Apim-Subscription-Key": '48662c45baf24c069aa00b0f1cff2222'}})
            }
        }
    }
    return images.data.value.length ? images.data.value[0].contentUrl : 'http://freshlytechy.com/wp-content/uploads/2013/04/EVNTLIVE-Offers-Live-Concert-Streaming-Platform.jpg'
}

router.post('/biddable/:concertID', (req, res) => {
    const concertID = req.params.concertID
    const { is_bid, bid_end_time } = req.body
    sequelize.query(`
        INSERT INTO biddable (initial_amount, end_at, concert_id)
        VALUES (${initial_amount}, '${end_at}', ${concertID})
    ;`)
        .then(result => {
            startCronJob()
            res.send(result)
        })
})

const startCronJob = (jobNum, endTime, endDate) => {
    endTime = endTime.split(':')
    endDate = endDate.split('-')
    
    const mins = endTime[1],
    hours = endTime[0] == '00' ? '23' : Number(endTime[0]) - 1,
    day = endDate[2],
    month = endDate[1]
    cronJobs[jobNum] = cron.schedule(`${mins} ${hours} ${day} ${month} *`, () => {
        console.log('email sent')
        sendMailFunc("hadaralon3@gmail.com")
    }, {timezone: 'Asia/Jerusalem'})
}

startCronJob(1, '19:27', '2019-08-28')


router.post('/concert', async (req, res) => {
    const { artist, date, hour, country, city, venue, num_of_tickets, asked_price, original_price, additional_info, seller} = req.body.concert
    const img_url = await findArtistImg(artist)
    sequelize.query(`INSERT INTO concert ( artist, date, country, city , venue, num_of_tickets, asked_price, original_price, additional_info, seller, status, img_url, uploaded_at)
           VALUES ( '${artist}', '${date} ${hour}:00' , '${country}', '${city}', '${venue}', ${num_of_tickets}, ${asked_price}, ${original_price}, '${additional_info}', ${seller} , 'active', '${img_url}', '${moment().format('YYYY-MM-DD  HH:mm:ss')}');`)
        .then((newConcert) => {
            const { is_bid, bid_end_date, bid_end_time } = req.body.bid
            if(is_bid){
                sequelize.query(`
                INSERT INTO biddable (ends_at, concert_id)
                VALUES ('${bid_end_date} ${bid_end_time}:00', ${newConcert[0]})
            ;`)
                .then(newBiddable => {
                    startCronJob(newConcert, bid_end_time, bid_end_date)
                    res.send({newConcert, newBiddable})
                })
            } else {
                res.send(newConcert)
            }
        }
    )
})
//
// ******get all or filter******
router.get('/concerts', function (req, res) {
    let query = req.query
    const queries = []
    query.artist ? queries.push(`artist = '${query.artist}'`) : null
    query.city ?  queries.push(`city = '${query.city}'`) : null
    query.dateFrom && query.dateTo ?  queries.push(`DATE(date) BETWEEN '${query.dateFrom}' AND '${query.dateTo}' `) : null
    query.priceTo ?  queries.push(`asked_price <= ${query.priceTo} `) : null
    query.minTickets ?  queries.push(`num_of_tickets >= ${query.minTickets}`) : null 


    let dataQuery = `
        SELECT
            id, artist, num_of_tickets, date, asked_price, original_price, img_url
        FROM concert
        WHERE
            status = 'active'
            AND
            DATE(date) > NOW()
            ${queries.length ? ' AND ' + queries.join(' AND ') : ''}
        ORDER BY date
    ;`
    
    sequelize
      .query(dataQuery)
      .spread(function (results, metadata) {
            res.send(results)
      })
})

// ******get all or filter by popularity******
// router.get('/popular', function (req, res) {
//     let query = req.query
//     const queries = []
//     query.artist ? queries.push(`artist = '${query.artist}'`) : null
//     query.city ?  queries.push(`city = '${query.city}'`) : null
//     query.dateFrom && query.dateTo ?  queries.push(`DATE(date) BETWEEN '${query.dateFrom}' AND '${query.dateTo}' `) : null
//     query.priceTo ?  queries.push(`asked_price <= ${query.priceTo} `) : null
//     query.minTickets ?  queries.push(`num_of_tickets >= ${query.minTickets}`) : null 


//     let dataQuery = `
//         SELECT
//             id, artist, num_of_tickets, date, asked_price, original_price, img_url
//         FROM
//             concert c
//             INNER JOIN
//             favorite f 
//         WHERE
//             status = 'active'
//             AND
//             DATE(date) > NOW()
//             ${queries.length ? ' AND ' + queries.join(' AND ') : ''}
//         ORDER BY date
//     ;`
    
//     sequelize
//       .query(dataQuery)
//       .spread(function (results, metadata) {
//             res.send(results)
//       })
// })

// ******get concert******

router.get('/concert/:concertID', function (req, res) {
    let ID = req.params.concertID
    sequelize.query(`
        SELECT artist, date, country, city, venue, num_of_tickets, asked_price, original_price, additional_info, seller, img_url
        FROM concert
        WHERE id = ${ID}`)
      .spread(function (results, metadata) {
            res.send(results[0])
      }) 
})

router.put('/sold/:concertID', (req, res) => {
    const concertID = req.params.concertID
    sequelize.query(`
        UPDATE concert
        SET status = 'sold'
        WHERE id = ${concertID}
    ;`)
        .spread((result, metadata) => {
            res.send(result)
        })
})

router.put('/delete-concert/:concertID', (req, res) => {
    const concertID = req.params.concertID
    sequelize.query(`
        UPDATE concert
        SET status = 'deleted'
        WHERE id = ${concertID}
    ;`)
        .spread((result, metadata) => {
            res.send(result)
        })
})

router.get('/user-info/:userID', (req, res) => {
    const userID = req.params.userID
    sequelize.query(`
        SELECT *
        FROM user
        WHERE id = ${userID}
    ;`)
        .spread((result, metadata) => {
            res.send(result[0])
        })
})

router.get('/user-concerts/:userID', (req, res) => {
    const user = req.params.userID

    sequelize.query(`
        SELECT
            id, artist, date, country, city, venue, num_of_tickets, asked_price, original_price, additional_info, status, img_url
        FROM concert
        WHERE
            seller = ${user}
            AND
            status != 'deleted'
    ;`)
        .spread((result, metadata) => {
            res.send(result)
        })
})

router.post('/favorite/:userID/:concertID', (req, res) => {
    const user = req.params.userID,
    concert = req.params.concertID

    sequelize.query(`
        INSERT INTO favorite (user_id, concert_id)
        VALUES(${user}, ${concert})
    ;`)
        .spread((result, metadata) => {
            res.end(result)
        })
})

router.get('/favorites/:userID', (req, res) => {
    const user = req.params.userID
    sequelize.query(`
        SELECT c.id, c.date, c.country, c.city, c.venue, c.num_of_tickets, c.asked_price, c.original_price, c.additional_info, c.seller, c.img_url
        FROM
            favorite f
            INNER JOIN
            user u ON u.id = f.user_id
            INNER JOIN
            concert c ON c.id = f.concert_id
        WHERE
            status = 'active'
            AND
            f.user_id = ${user}
            AND
            DATE(date) > NOW()
        ORDER BY date
    ;`)
        .spread((result, metadata) => {
            res.send(result)
        })
})

router.post('/bid', (req, res) => {
    const { amount, concertID, bidder } = req.body
    sequelize.query(`
        INSERT INTO bid (amount, concert_id, bidder)
        VALUES (${amount}, ${concertID}, ${bidder})
    ;`)
    .then(result => {
        res.send(result)
    })
})

module.exports = router