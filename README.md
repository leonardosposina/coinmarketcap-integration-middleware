# CoinMarketCap Integration Middleware

Node.js application created to handle the CORS issue described at https://coinmarketcap.com/api/documentation/v1/.

> *Making HTTP requests on the client side with Javascript is currently prohibited through CORS configuration. This is to protect your API Key which should not be visible to users of your application so your API Key is not stolen. Secure your API Key by routing calls through your own backend service.*

---

### ⚙ Middleware API

| Endpoint: | Method: | Query Parameters: | Description: |
|-----------|---------|-------------------|--------------|
| /cryptocoins | GET  | start, limit, convert | Returns a paginated list of all active cryptocurrencies with latest market data. |
| /cryptocoins/:id | GET | | Returns all static metadata available for the identified cryptocurrency. |
| /usage | GET | | Returns API key usage stats. |

*CORS-enabled endpoints with origin at https://leonardosposina.github.io/

**_Important_**: This app instance will sleep after 30 minutes of inactivity. 😴

---

### 🚀 Deploy

It uses Heroku cloud (PaaS) to build and run, with continuous integration (CI), the application of this repository.

Running application: https://dio-crypto-api.herokuapp.com/
