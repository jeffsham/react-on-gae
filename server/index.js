const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send({name: 'hello world'});
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log('Express server is running on localhost:3001')
);
