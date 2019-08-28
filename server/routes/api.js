const Sequelize = require('sequelize')
const express = require('express')
const router = express.Router()
const moment = require('moment')
const axios = require('axios')
const sequelize = new Sequelize('mysql://root:@localhost/priceless')


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
    return images.data.value.length ? images.data.value[0].contentUrl : 'https://assets.visitphilly.com/wp-content/uploads/2019/01/Fillmore-Philadelphia-concert-crowd-2200x1237.jpg'
}

router.post('/concert', async (req, res) => {
    let data = req.body
    const img_url = await findArtistImg(data.artist)
    sequelize.query(`INSERT INTO concert ( artist, date, country, city , venue, num_of_tickets, asked_price, original_price, additional_info, seller, status, img_url, uploaded_at)
           VALUES ( '${data.artist}', '${data.date} ${data.hour}:00' , '${data.country}', '${data.city}', '${data.venue}', ${data.num_of_tickets}, ${data.asked_price}, ${data.original_price}, '${data.additional_info}', ${data.seller} , 'active', '${img_url}', '${moment().format('YYYY-MM-DD  HH:mm:ss')}');`)
        .then(function (result) {
            res.send(result)
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


// ******get concert******

router.get('/concert/:concertID', function (req, res) {
    let ID = req.params.concertID
    sequelize
      .query(`
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
        WHERE seller = ${user}
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
    ;`)
        .spread((result, metadata) => {
            res.send(result)
        })
})

module.exports = router