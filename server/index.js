const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const SparkPost = require('sparkpost');
const ses = require('node-ses');

require('dotenv').config();

const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || '3030';

const app = express();


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.post('/sendMessage', (req, res) => {
  const client = new SparkPost(process.env.SPARKPOST_API_KEY);

  client.transmissions.send({
    options: {
      sandbox: false
    },
    content: {
      from: process.env.VERIFIED_SPARKPOST_EMAIL,
      subject: req.body.subject,
      html:`<html><body><p>${req.body.message}</p></body></html>`
    },
    recipients: [
      {address: req.body.recipientEmail},
      {address: 'wardinacloud@me.com'}
    ]
  })
  .then(data => {
    console.log('Woohoo! Shit got sent!');
    res.status(200).send(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong, lets try another email service');
    console.log(err);
    const client = ses.createClient({
      key: process.env.SES_KEY,
      secret: process.env.SES_SECRET
    });

    client.sendEmail({
      to: req.body.recipientEmail,
      from: process.env.VERIFIED_AWS_EMAIL,
      cc: 'wardinacloud@me.com',
      subject: req.body.subject,
      message: req.body.message,
      altText: 'plain text'
    }, (err, data, response) => {
      if (err) {
        console.log("ERROR=============>", err);
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });
});

app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});
