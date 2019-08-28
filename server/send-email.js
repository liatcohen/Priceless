const nodemailer = require("nodemailer")



let emailSender = function(email){
       const transporter = nodemailer.createTransport({
       port: 465,
       service:'gmail',
       secure: false,
       auth:{
              user:'priceless.tickets@gmail.com',
              pass: 'priceless12345'
       },
       });


       let mailOption = {
       from: `priceless.tickets@gmail.com`,
       to: email,
       subject: 'PriceLess web have a message for you!',
       text:`hello! you win the red axes tickets!!!!!!!!`
       };

       transporter.sendMail(mailOption, function(error, info){
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
