
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
   
     port: 25,
    secure: false, // true for 465, false for other ports
    service:'gmail',
    auto:{
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

transporter.sendMail(mailOption, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('Email sent ' + info.response );
    }
});