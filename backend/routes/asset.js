const 
  express = require('express'),
  router = express.Router({ mergeParams : true }),
  { Portfolio, Asset, Stock } = require('../db/models'),
  { portfolioMatchesAsset, isAuthorized, userMatchesPortfolio } = require('../middleware'),
  { getRealTime } = require('../services/stocks'),
  { round2Dec } = require('../services/math'),
  { sendSuccess, sendExpectedError, sendUnexpectedError } = require('../services/responses');

// Asset: CREATE - Create a new asset for a portfolio
router.post('/', userMatchesPortfolio, isAuthorized, async (req, res) => {
  try {
    const
      { portfolioId } = req.params,
      { symbol, shares, purchasedAt } = req.body,
      stock = await Stock.findOne({ where : { symbol } });

    if(stock){
      const
        value = round2Dec( await getRealTime(symbol) * shares ),
        newAsset = { portfolioId, shares, symbol, purchasedAt };
        createdAsset = await Asset.create(newAsset);
        createdAssetData = { id : createdAsset.id, shares, symbol, purchasedAt, value };

      sendSuccess(createdAssetData, res);
    }
    else { sendExpectedError(`Stock '${symbol}' DNE`, res, 200); }
  }
  catch(err){ sendUnexpectedError(err, res); } 
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
        value = round2Dec(await getRealTime(symbol) * shares), 
        updatedAsset = { portfolioId, shares, symbol, purchasedAt },
        updatedAssetData = { id : assetId, shares, symbol, purchasedAt, value },
        updateAsset = async () => Asset.update(updatedAsset, { where : { id : assetId } }),
        updatePortfolio = async () => Portfolio.update({ updatedAt : Date.now() }, { where : { id : portfolioId } }),
        [assetRowsAffected, portfolioRowsAffected] = await Promise.all([updateAsset(), updatePortfolio()]);
      
      if(assetRowsAffected[0] === 1 && portfolioRowsAffected[0] === 1){ sendSuccess(updatedAssetData, res); }
      else { sendExpectedError(`Asset with id ${assetId} DNE`, res, 200) }
    }
    else { sendExpectedError(`Stock '${symbol}' DNE`, res, 200); }
  }
  catch(err){ sendUnexpectedError(err, res); } 
});

// Asset: DESTROY - Remove an asset from a portfolio
router.delete('/:assetId', portfolioMatchesAsset, isAuthorized, async (req, res) => {
  try {
    const 
      { assetId } = req.params,
      destroyedAssetData = { id : assetId };
      rowsAffected = await Asset.destroy({ where : { id : assetId } });
    
    if(rowsAffected === 1){ sendSuccess(destroyedAssetData, res); }
    else { sendExpectedError(`Asset with id ${assetId} DNE`, res, 200); }
  }
  catch(err){ sendUnexpectedError(err, res); }
});

module.exports = router;
