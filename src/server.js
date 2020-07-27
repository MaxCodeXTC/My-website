// var express = require('express');
// var nodemailer = require('nodemailer');
// const creds = require('./client/js/config');
// const path = require('path');
// var cors = require('cors');

// const serverless = require('serverless-http');


// const app = express();
// app.use(cors());
// var router = express.Router();

// if (process.env.NODE_ENV === 'production') {
//   // Exprees will serve up production assets
//   app.use(express.static('../build'));

//   // Express serve up index.html file if it doesn't recognize route
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve('public/index.html'));  });
// }

// var transport = {
//     host: 'Smtp.live.com', // Don’t forget to replace with the SMTP host of your provider
//     port: 587,
//     auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   }
// }

// var transporter = nodemailer.createTransport(transport);

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

// router.post('/send', (req, res, next) => {
//   console.log("senttt");
//   console.log(req.body);
//   var name = req.body.name;
//   var email = req.body.email;
//   var message = req.body.message;

//   console.log("THE NAME: " + name);
//   console.log("THE EMAIL: " + email);
//   console.log("THE MESSAGE: " + message);

//   var mail = {
//     from: name,
//     to: 'sarah_23s@hotmail.com',  // Change to email address that you want to receive messages on
//     subject: 'New Message from Contact Form of the Portfolio',
//     text: `name: ${name} \n email: ${email} \n message: ${message} `
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.send('fail');
//     } else {
//       res.send('success');
//     }
//   })
// })


// //set the server
// const port = process.env.PORT || 8080;
// const server = app.listen(port, listening);
// function listening() {
//     console.log(`server is running on localhost: ${port}`);
// }

// app.use(express.json());
// app.use('/.netlify/functions/api', router);

// module.exports = server;
// module.exports.handler = serverless(app);