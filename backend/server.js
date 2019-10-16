require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 5000,
      db = require('./db/models');

/* Confirm connection with Postgres */
db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Sucessfully Connected to Express Server' });
});

app.get('/api/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, console.log(`Listening on port ${port}`));