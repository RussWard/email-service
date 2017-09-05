const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const creds = require('../config.js');
const sgMail = require('@sendgrid/mail');
const aws = require('aws');

const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || '3030';

const app = express();


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.post('/sendMessage', (req, res) => {
  console.log(req.body);
  let key = process.env.SENDGRID_API_KEY || creds.SENDGRID_API_KEY;
  sgMail.setApiKey(key);
  const msg = {
    to: req.body.recipientEmail,
    from: req.body.senderEmail,
    subject: 'Hello From Russ email service',
    text: req.body.message,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
})

app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});
