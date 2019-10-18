const express = require('express'),
      router = express.Router();

router.get('/hello', (req, res) => {
  res.send({ express: 'Sucessfully Connected to Express Server' });
});

router.get('/ping', (req, res) => {
  res.send('pong');
});

module.exports = router;
