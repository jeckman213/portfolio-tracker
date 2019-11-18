const 
  express                            = require('express'),
  router                             = express.Router({ mergeParams : true }),
  { Asset, Stock }                    = require('../db/models'),
  { getStockValue }                  = require('../services/stockservice'),
  { expectedError, unexpectedError } = require('../services/errorhandling'),
  { portfolioMatchesAsset, isAuthorized, userMatchesPortfolio } = require('../middleware'),
  { round2Dec } = require('../services/math');

// Asset: CREATE - Create a new asset for a portfolio
router.post('/', userMatchesPortfolio, isAuthorized, async (req, res) => {
  try {
    console.log(req.body);
    const
      { portfolioId } = req.params,
      { symbol, shares, purchasedAt } = req.body,
      stock = await Stock.findOne({ where : { symbol } });

    if(stock){
      const
        value = round2Dec(await getStockValue(symbol) * shares),
        newAsset = { portfolioId, shares, symbol, purchasedAt };
        createdAsset = await Asset.create(newAsset);

      res.send({ success : true, id : createdAsset.id, shares, symbol, purchasedAt, value });
    }
    else { res.send(expectedError(`Stock '${symbol}' DNE`, res, 200)); }
  }
  catch(err){ res.send(unexpectedError(err, res)); } 
});

// Asset: UPDATE - Update an existing asset
router.put('/:assetId', portfolioMatchesAsset, isAuthorized, async (req, res) => {
  try {
    const
      { portfolioId, assetId } = req.params,
      { shares, symbol, purchasedAt } = req.body,
      stockFound = await Stock.findOne({ where : { symbol } });

    if(stockFound){
      const
        value = round2Dec(await getStockValue(symbol) * shares), 
        updatedAsset = { portfolioId, shares, symbol, purchasedAt };

      await Asset.update(updatedAsset, { where : { id : assetId } });
      console.log({ id : assetId, shares, symbol, purchasedAt, value });
      res.send({ success : true, id : assetId, shares, symbol, purchasedAt, value });
    }
    else { res.send(expectedError(`Stock '${symbol}' DNE`, res, 200)); }
  }
  catch(err){ res.send(unexpectedError(err, res)); } 
});

// Asset: DESTROY - Remove an asset from a portfolio
router.delete('/:assetId', portfolioMatchesAsset, isAuthorized, async (req, res) => {
  try {
    const { assetId } = req.params
    
    await Asset.destroy({ where : { id : assetId } }),
    res.send({ success : true });
  }
  catch(err){ res.send(unexpectedError(err, res)); }
});

module.exports = router;
