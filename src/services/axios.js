const axios = require('axios');

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'X-CMC_PRO_API_KEY': process.env.API_KEY
  },
});

module.exports = api;
