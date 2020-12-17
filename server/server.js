const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.static('dist'));
app.use(compression());

// const dataCache = {};

// app.get('/profile', (req, res) => {
// 	profile = req.params.apod;
// 	const API_KEY = process.env.NASA_API_KEY;
// 	GET https://api.nasa.gov/planetary/apod?api_key=${API_KEY}
//   axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
// 	.then((result) => {
// 		res.status(200).send(result.data);
// 	})
// 	.catch((err) => {
// 		res.status(404).send('API data call was unsuccessful');
// 	})
// });

app.get('*', function(req, res) {
  res.status(404).send('404 Error: Sorry, page was not found');
});

module.exports = app;
