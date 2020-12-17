const express = require('express');
const cors = require('cors');
const compression = require('compression');
const axios = require('axios');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.static('dist'));
app.use(compression());

// const dataCache = {};

app.get('/dataprofile', (req, res) => {
  const apiKey = process.env.API_KEY;
  const query = req.query.input;
  axios.get(`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${apiKey}`)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(404).send(`Sorry, your request was unsuccessful; please try again later. ${error}`);
    });
});

app.get('*', (req, res) => {
  res.status(404).send('Sorry, the page you requested does not exist.');
});

module.exports = app;
