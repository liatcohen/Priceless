const Sequelize = require('sequelize')

const express = require('express')
const router = express.Router()

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
    .query(`INSERT INTO concert (id, 'artist', 'date', 'country', 'city' , 'venue', 'num_of_tickets', 'asked_price', 'original_price', 'additional_info', 'seller', 'status', 'img_url', 'uploaded_at')
           VALUES ("null", '${data.Artist}', '${data.Date}' , '${data.Country}', '${data.City}', '${data.Venue_name}', ${data.num_of_tickets}, ${data.asked_price}, ${data.original_price}, ${data.additional_info}, ${data.seller} , 'active', '${img_url}', '${new Date()}');`)
    .then(function (result) {
        console.log(result)
        res.send("completed adding Concert")

    })
})

// ******get all or filter******
router.get('/concerts', function (req, res) {
    let query = req.query || {}
    let artist = query.artist ? `artist = ${query.artist} AND ` : ""
    let city = query.city ? `city = ${query.city} AND` : ''
    let date = query.dateFrom && query.dateTo ? `DATE(date) BETWEEN ${query.dateFrom} AND ${query.dateTo} AND` : ''
    let priceF = query.priceFrom ? `asked_price >= ${query.priceFrom} AND` : ''
    let priceT = query.priceTo ? `asked_price <= ${query.priceTo} AND` : ''
    let minTickets = query.minTickets ? `num_of_tickets >= ${query.minTickets}` : '' 


      let dataQuery = `
      SELECT id, artist, num_of_tickets, date, asked_price, original_price, img_url
      FROM concert
      WHERE
        ${artist} 
        ${city}
        ${date}
        ${priceF}
        ${priceT}
        ${minTickets}`

      let getAll =`
      SELECT id, artist, num_of_tickets, date, asked_price, original_price, img_url
      FROM concert` 
    
    sequelize
      .query( query ? dataQuery : getAll )
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
        SELECT artist, date, country, city, vevue, num_of_tickets, asked_price, original_price, additional_info, seller, img_url
        FROM concert
        WHERE id = ${ID}`)
      .spread(function (results, metadata) {
        console.log(results);
            res.send(results)
      }) 
})






module.exports = router