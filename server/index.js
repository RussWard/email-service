const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const aws = require('aws');

const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || '3030';

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.post('/sendMessage', (req, res) => {
  console.log(req.body)
})

app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});
