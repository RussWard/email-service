const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const SparkPost = require('sparkpost');
const sgMail = require('@sendgrid/mail');
const ses = require('node-ses');
const aws = require('aws');

require('dotenv').config();
const client = ses.createClient({
  key: process.env.SES_KEY,
  secret: process.env.SES_SECRET
});


const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || '3030';

const app = express();


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

// app.post('/sendMessage', (req, res) => {
// const client = new SparkPost(process.env.SPARKPOST_API_KEY);

// client.transmissions.send({
//     options: {
//       sandbox: false
//     },
//     content: {
//       from: 'russ@russandkaren.world',
//       subject: req.body.subject,
//       html:`<html><body><p>${req.body.message}</p></body></html>`
//     },
//     recipients: [
//       {address: req.body.recipientEmail}
//     ]
//   })
//   .then(data => {
//     console.log('Woohoo! Shit got sent!');
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('Whoops! Something went wrong');
//     console.log(err);
//   });
// })

app.post('/sendMessage', (req, res) => {
  client.sendEmail({
    to: req.body.recipientEmail,
    from: 'russ@russandkaren.world',
    subject: 'just some message',
    message: req.body.message,
    altText: 'plain text'
  }, (err, data, res) => {
    if (err) {
      console.log("ERROR=============>", err);
    } else {
      console.log("DATA IS ================>", data);
    }
  })
})



app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});
