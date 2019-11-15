<<<<<<< HEAD:backend/routes/dev.js
const
  express = require('express'),
  router = express.Router();

router.get('/hello', (req, res) => {
  res.send({ express: 'Sucessfully Connected to Express Server' });
});

router.get('/ping', (req, res) => {
  res.send('pong');
});

router.get('/auth', (req, res) => {
  res.send({
    user : req.user.username,
    authenticated : req.isAuthenticated()
  })
});

module.exports = router;
=======
const express = require('express'),
      router = express.Router();

router.get('/hello', (req, res) => {
  res.send({ express: 'Sucessfully Connected to Express Server' });
});

router.get('/ping', (req, res) => {
  res.send('pong');
});

router.get('/auth', (req, res) => {
  res.send({
    user : req.user.username,
    authenticated : req.isAuthenticated()
  })
});

module.exports = router;
>>>>>>> d54bab32f68410f186557ecb2c122e4b63092b4c:routes/dev.js
