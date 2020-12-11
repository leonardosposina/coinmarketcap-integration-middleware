const message = `
  <style>
    body { font-family: Arial, Helvetica, sans-serif; }
    table, thead, th, td { border: 1px solid black; }
    th { background-color: whitesmoke; }
    th, td { padding: 0 5px; }
  </style>

  <h2>
    Welcome to the
    <a href="https://coinmarketcap.com/api/" target="_blank">pro-api.coinmarketcap.com</a>
    integration middleware API!
  </h2>
  <table>
    <thead>
      <tr>
        <th>Endpoint:</th>
        <th>Method:</th>
        <th>Query Parameters:</th>
        <th>Description:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>/cryptocoins</td>
        <td>GET</td>
        <td>start, limit, convert</td>
        <td>Returns a paginated list of all active cryptocurrencies with latest market data.</td>
      </tr>
      <tr>
        <td>/cryptocoins/:id</td>
        <td>GET</td>
        <td></td>
        <td>Returns all static metadata available for the identified cryptocurrency.</td>
      </tr>
      <tr>
        <td>/usage</td>
        <td>GET</td>
        <td></td>
        <td>Returns API key usage stats.</td>
      </tr>
    </tbody>
  </table>
  <p><small>*CORS-enabled endpoints with origin at <strong>${process.env.CORS_ORIGIN}</strong></small></p>
  <p><em>Important</em>: This app instance will sleep after 30 minutes of inactivity.</p>
`;

module.exports = message;
