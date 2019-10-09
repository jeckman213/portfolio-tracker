const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Sucessfully Connected to Express Server' });
});

app.get('/api/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, () => console.log(`Listening on port ${port}`));