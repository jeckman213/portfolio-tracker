const 
  express   = require('express'),
  router    = express.Router(),
  User = require('../db/models').User,
  Portfolio = require('../db/models').Portfolio;

router.get('/:id', (req, res) => {
  
});

module.exports = router;
