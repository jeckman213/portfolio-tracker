const 
  express                            = require('express'),
  router                             = express.Router({ mergeParams : true }),
  { Portfolio, Asset, Stock }        = require('../db/models'),
  { expectedError, unexpectedError } = require('../services/errorhandling');

// Asset: CREATE - Create a new asset for a portfolio
router.post('/', async (req, res) => {
  try {
    const
      { portfolioId } = req.params,
      { symbol, shares, purchasedAt, soldAt } = req.body,
      portfolioFound = await Portfolio.findByPk(portfolioId);

    if(portfolioFound){
      stock = await Stock.findOne({ where : { symbol } });

      if(stock){
        const 
          { id : stockId } = stock,
          newAsset = { portfolioId, shares, stockId, purchasedAt, soldAt };
          createdAsset = await Asset.create(newAsset),
          success = (createdAsset !== null);

        res.send(success ? { success } : expectedError(`Asset with id ${assetId} DNE`));
      }
      else { res.send(expectedError(`Stock '${symbol}' DNE`)); }
    }
    else { res.send(expectedError(`Portfolio with id ${portfolioId} DNE`)); }
  }
  catch(err){ res.send(unexpectedError(err)); } 
});

// Asset: UPDATE - Update an existing asset
router.put('/:assetId', async (req, res) => {
  try {
    const
      { assetId } = req.params,
      { shares, symbol, purchasedAt, soldAt } = req.body,
      stockFound = await Stock.findOne({ where : { symbol } });

    if(stockFound){
      const 
        { id : stockId } = stockFound,
        updatedAsset = { shares, stockId, portfolioId, purchasedAt, soldAt },
        affectedRows = await Asset.update(updatedAsset, { where : { id : assetId } }),
        success = (affectedRows[0] === 1); // One row should be affected 

      res.send(success ? { success } : expectedError(`Asset with id ${assetId} DNE`));
    }
    else { res.send(expectedError(`Stock '${symbol}' DNE`)); }
  }
  catch(err){ res.send(unexpectedError(err)); } 
});

// Asset: DESTROY - Remove an asset from a portfolio
router.delete('/:assetId', async (req, res) => {
  try {
    const 
      { id : portfolioId } = req.params
      affectedRows = await Portfolio.destroy({ where : { id : portfolioId } }),
      success = (affectedRows === 1);  // One row should be affected

    res.send(success ? { success } : expectedError(`Portfolio with id ${portfolioId} DNE`));
  }
  catch(err){ res.send(unexpectedError(err)); }
});

module.exports = router;
