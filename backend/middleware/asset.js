const
  { Asset }        = require('../db/models'),
  { expectedError, unexpectedError } = require('../services/errorhandling'),
  middleware = {};

// Checks if portfolio with id req.params.portfolioId 
// owns an asset with id req.params.assetId 
middleware.portfolioMatchesAsset = async (req, res, next) => {
  try {
    const 
      { portfolioId, assetId } = req.params,
      assetFound = await Asset.findOne({ where : { id : assetId, portfolioId }});
      
    if(assetFound){
      res.locals.asset = assetFound;
      return next(); 
    }
    else { res.send(expectedError(`User with id ${userId} does not own a portfolio with id ${portfolioId}`, res, 400)); }
  }
  catch(err){ res.send(unexpectedError(err, res)); }
}

module.exports = middleware;
