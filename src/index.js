require('dotenv').config();
const express = require('express');
const cors = require('cors');
const api = require('./services/axios');

const app = express();
const port = process.env.PORT || 80;
const corsOptions = { origin: process.env.CORS_ORIGIN };

const welcome = require('./welcome-message.js');

app.get('/', function(req, res) {
  res.send(welcome);
});

app.get('/cryptocoins', cors(corsOptions), (req, res) => {
  let { start, limit, convert } = req.query;

  api
    .get('/cryptocurrency/listings/latest', { params: { start, limit, convert }})
    .then(response => res.json(response.data));
});

app.get('/cryptocoins/:id', cors(corsOptions), (req, res) => {
  let { id } = req.params;

  api
    .get(`/cryptocurrency/info?id=${id}`)
    .then(response => res.json(response.data))
    .catch(error => {
      const { status, data } = error.response;

      res.status(status).json(data);
    });
});

app.get('/usage', cors(corsOptions), (req, res) => {
  api
    .get('/key/info')
    .then(response => res.json(response.data));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
