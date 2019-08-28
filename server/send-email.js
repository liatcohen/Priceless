
const nodemailer = require("nodemailer")


// const transporter = nodemailer.createTransport({
//     host: "", //Host
//     port: , // Port 
//     secure: true
//   });
nodemailer.createTransport({
    pool: true,
    host: "http://localhost",
    port: 465,
    secure: true, // use TLS
    auth: {
        user:'priceless.tickets@gmail.com',
        pass: 'priceless12345'
    }
  });
const transporter = nodemailer.createTransport({
   
     port: 465,
    secure: true, // true for 465, false for other ports
    service:'gmail',
    auth:{
        user:'priceless.tickets@gmail.com',
        pass: 'priceless12345'
    },
    tls: {rejectUnauthorized: false}
});

let mailOption = {
    from: 'priceless.tickets@gmail.com',
    to: 'hadaralon3@gmail.com',
    subject: 'PriceLess web have a message for you!',
    text:`hello! you win the red axes tickets!!!!!!!!`
};
// let mailOptions = {
//     from: , // sender address
//     to: , // list of receivers
//     subject: , // Subject line
//     text: , // plain text body
//     html: // html body
//   };
transporter.sendMail(mailOption, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('Email sent ' + info.response );
    }
});
