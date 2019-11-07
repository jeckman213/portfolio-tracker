const 
  express = require('express'),
  router  = express.Router(),
  Asset   = require('../db/models').Asset;

// router.get('/:id', (req, res) => {
//   Asset.findByPk(req.params.id)
//     .then( foundAsset => {
//       const { name } = foundPortfolio;
//       res.send({ name });
//     })
//     .catch( err => {
//       res.send(err);
//     });
// });

router.post('/', (req, res) => {
  const portfolioId = req.params.portfolio_id;
  Portfolio.findByPk(portfolioId)
    .then( portfolio => {
      if(portfolio){
        const { symbol } = req.body;

        Stock.findOne({ where : symbol })
          .then( stock => {
            if(stock){
              const 
                { stockId } = stock;
                { purchasedAt, soldAt} = req.body,
                newAsset = { stockId, portfolioId, purchasedAt, soldAt };
                
              Asset.create(newAsset)
                .then( createdAsset => {
                  const { name } = createdPortfolio;
                  res.send({ success : true });
                });
            }
            else {
              res.send({
                success : false,
                failExpected : true,
                failReason : `Stock '${symbol}' DNE`
              });
            }
          });
      }
      else {
        res.send({
          success : false,
          failExpected : true,
          failReason : `Portfolio id: ${portfolioId} DNE`
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
