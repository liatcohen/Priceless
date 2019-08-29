const nodemailer = require("nodemailer")



let emailSender = function(seller, topBidders, concertInfo){
       const transporter = nodemailer.createTransport({
              port: 465,
              service:'gmail',
              secure: false,
              auth:{
                     user:'priceless.tickets@gmail.com',
                     pass: 'priceless12345'
              },
       });

       const mailToWinner = {
              from: `priceless.tickets@gmail.com`,
              to: topBidders[0].email,
              subject: `You've won a public auction on Priceless!!`,
              text:`You've submitted the highest bid for ${concertInfo.artist} live concert on ${concertInfo.hour} ${concertInfo.date}.
              Hit ${seller.name} up on ${seller.phone_number} or by email on ${seller.email} to purchase the tickets for the agreed amount of ${topBidders[0].amount}$.
              You can go to localhost:3000/concert/${concertInfo.id} to checkout the concert details.
              Have fun!

              Priceless team.
              `
       };

       const mailToSeller = {
              from: `priceless.tickets@gmail.com`,
              to: seller.email,
              subject: `Your public auction on Priceless timed out!!`,
              text:`The auction for ${concertInfo.artist} live concert tickets on ${concertInfo.hour} ${concertInfo.date} has ended.
              ${topBidders.name} is the highest bidder with a ${topBidders[0].amount}$ !
              S/he should contact you soon by phone / email, if you want to get those dollars fast you can contact him/her on ${topBidders[0].phone_number} or by email on ${topBidders[0].email}.
              If for some reason things doesn't work out you can contact the next highest bidders using this details:

              ${topBidders.map(b => `${b.name} (${b.amount}$): ${b.phone_number} - ${b.email}
              `)}

              You can go to localhost:3000/concert/${concertInfo.id} to checkout the concert details.

              Priceless team.
              `
       };

       console.log(mailToWinner.text)
       console.log(mailToseller.text)

       transporter.sendMail(mailToWinner, function(error, info){
              if(error){
                     console.log(error);
              } else {
                     console.log('Email sent ' + info.response );
              }
       });

       transporter.sendMail(mailToSeller, function(error, info){
              if(error){
                     console.log(error);
              } else {
                     console.log('Email sent ' + info.response );
              }
       });

}


// makeR = async (email) =>{
//     console.log("1 step good");
    
//  let mail = {
//         from: `<priceless.tickets@gmail.com>`,
//         to: email,
//         subject: 'PriceLess web have a message for you!',
//         text:`hello! you win the red axes tickets!!!!!!!!`
//  }
// await axios.post('http://localhost:5000/sendEmail', mail)
// }


// makeR("hadaralon3@gmail.com")


module.exports = emailSender
