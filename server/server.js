const express = require('express');
const cors = require('cors');
const compression = require('compression');
const dotenv = require('dotenv');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.static('dist'));
app.use(compression());
dotenv.config();

function getApiKey() {
  try {
    return process.env.API_KEY;
  } catch (error) {
    throw new Error('ERROR: Failed to retrieve API Key from .env file');
  }
}

app.get('/dataprofile', (req, res) => {
  const apiKey = getApiKey();
  const query = req.query.input;
  axios.get(`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${apiKey}`)
    .then((result) => {
      let iD = 0;
      const newResult = [
        {
          key: query,
          id: iD,
          companyName: result.data[0].companyName,
          symbol: result.data[0].symbol,
          exchange: result.data[0].exchange,
          price: result.data[0].price,
          currency: result.data[0].currency,
          changes: result.data[0].changes,
          industry: result.data[0].industry,
          description: result.data[0].description,
          ceo: result.data[0].ceo,
          sector: result.data[0].sector,
          country: result.data[0].country,
          fullTimeEmployees: result.data[0].fullTimeEmployees,
          phone: result.data[0].phone,
          address: result.data[0].address,
          city: result.data[0].city,
          state: result.data[0].state,
          zip: result.data[0].zip,
          website: result.data[0].website,
          image: result.data[0].image,
        },
      ];
      res.status(200).send(newResult);
      iD++;
    })
    .catch((error) => {
      res.status(404).send(`The API request for ${query} was unsuccessful: ${error}`);
    });
});

app.get('*', (req, res) => {
  res.status(404).send('Sorry, that page does not exist.');
});

module.exports = app;
