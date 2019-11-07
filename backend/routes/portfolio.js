const 
  express   = require('express'),
  router    = express.Router(),
  Portfolio = require('../db/models').Portfolio;
  Asset     = require('../db/models').Asset;
  User      = require('../db/models').User;

router.get('/:id', (req, res) => {
  const portfolioId = req.params.id;
  
  Portfolio.findByPk(portfolioId)
    .then( foundPortfolio => {
      const { name } = foundPortfolio;

      Asset.findAll({ 
        where : { portfolioId }
      })
        .then( assets => {
          res.send({ name, assets });
        })
        .catch( err => {
          res.send(err);
        });
    })
    .catch( err => {
      res.send(err);
    });
});

router.post('/', (req, res) => {
  const { name, username } = req.body;

  User.findOne({ where : { username } })
    .then( user => {
      if(user){
        const 
          { userId } = user,
          newPortfolio = { name, userId };

        Portfolio.create(newPortfolio)
          .then( createdPortfolio => res.send({ success : true }) )
      }
      else {
        res.send({
          success : false,
          failExpected : true,
          failReason : `User '${username}' DNE`
        });
      }
    })
    .catch( err => {
      res.send({
        success : false,
        failExpected : false,
        failReason : err.message
      });
    });
});

module.exports = router;
