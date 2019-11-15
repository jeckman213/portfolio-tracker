const 
  express                            = require('express'),
  router                             = express.Router({ mergeParams : true }),
  { Portfolio, Asset, Stock }        = require('../db/models'),
  { expectedError, unexpectedError } = require('../services/errorhandling'),
  { portfolioMatchesAsset, isAuthorized, userMatchesPortfolio } = require('../middleware');

// Asset: CREATE - Create a new asset for a portfolio
router.post('/', userMatchesPortfolio, isAuthorized, async (req, res) => {
  try {
    const
      { portfolioId } = req.params,
      { symbol, shares, purchasedAt, soldAt } = req.body,

    stock = await Stock.findOne({ where : { symbol } });

    if(stock){
      const 
        { id : stockId } = stock,
        newAsset = { portfolioId, shares, stockId, purchasedAt, soldAt };
        createdAsset = await Asset.create(newAsset);

      res.send({success : true, id : createdAsset.id });
    }
    else { res.send(expectedError(`Stock '${symbol}' DNE`)); }
  }
  catch(err){ res.send(unexpectedError(err)); } 
});

// Asset: UPDATE - Update an existing asset
router.put('/:assetId', portfolioMatchesAsset, isAuthorized, async (req, res) => {
  try {
    const
      { assetId } = req.params,
      { shares, symbol, purchasedAt, soldAt } = req.body,
      stockFound = await Stock.findOne({ where : { symbol } });

    if(stockFound){
      const 
        { id : stockId } = stockFound,
        updatedAsset = { shares, stockId, portfolioId, purchasedAt, soldAt };
      
      await Asset.update(updatedAsset, { where : { id : assetId } });
      res.send({ success : true });
    }
    else { res.send(expectedError(`Stock '${symbol}' DNE`)); }
  }
  catch(err){ res.send(unexpectedError(err)); } 
});

// Asset: DESTROY - Remove an asset from a portfolio
router.delete('/:assetId', portfolioMatchesAsset, isAuthorized, async (req, res) => {
  try {
    const { id : portfolioId } = req.params
    
    await Portfolio.destroy({ where : { id : portfolioId } }),
    res.send({ success : true });
  }
  catch(err){ res.send(unexpectedError(err)); }
});

module.exports = router;
