const Sequelize = require('sequelize')
const express = require('express')
const router = express.Router()
const moment = require('moment')
const sequelize = new Sequelize('mysql://root:@localhost/priceless')


// *****checking the connect******

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     })


router.post('/concert', function (req, res) {
    let data = req.body
    let img_url = "https://dl1.cbsistatic.com/i/r/2018/08/09/b6ca69f8-f123-408c-9b1f-ea3f9cf1fb17/resize/620xauto/8787947d1d00135d3f2ed512e56bee72/concert-crowd.jpg"
    sequelize
    .query(`INSERT INTO concert ( artist, date, country, city , venue, num_of_tickets, asked_price, original_price, additional_info, seller, status, img_url, uploaded_at)
           VALUES ( '${data.artist}', '${data.date}' , '${data.country}', '${data.city}', '${data.venue}', ${data.tickets}, ${data.askedPrice}, ${data.originalPrice}, '${data.info}', ${data.seller} , 'active', '${img_url}', '${moment().format('YYYY-MM-DD  HH:mm:ss')}');`)
    .then(function (result) {
        console.log(result)
        res.send("completed adding Concert")

    })
})

// ******get all or filter******
router.get('/concerts', function (req, res) {
    let query = req.query || {}
    const queries = []
    let artist = query.artist ? queries.push(`artist = '${query.artist}'`) : null
    let city = query.city ?  queries.push(`city = '${query.city}'`) : null
    let date = query.dateFrom && query.dateTo ?  queries.push(`DATE(date) BETWEEN '${query.dateFrom}' AND '${query.dateTo}' `) : null
    let priceF = query.priceFrom ?  queries.push(`asked_price >= ${query.priceFrom} `) : null
    let priceT = query.priceTo ?  queries.push(`asked_price <= ${query.priceTo} `) : null
    let minTickets = query.minTickets ?  queries.push(`num_of_tickets >= ${query.minTickets}`) : null 


      let dataQuery = `
      SELECT id, artist, num_of_tickets, date, asked_price, original_price, img_url
      FROM concert
      WHERE
        ${queries.join(' AND ')}`

      let getAll =`
      SELECT id, artist, num_of_tickets, date, asked_price, original_price, img_url
      FROM concert` 
    
    sequelize
      .query( Object.keys(query).length ? dataQuery : getAll )
      .spread(function (results, metadata) {
        console.log(results);
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
        console.log(results[0]);
            res.send(results[0])
      }) 
})






module.exports = router