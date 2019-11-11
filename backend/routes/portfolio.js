const 
  express                            = require('express'),
  router                             = express.Router({ mergeParams : true }),
  { Portfolio, Asset, Stock, sequelize }  = require('../db/models'),
  { expectedError, unexpectedError } = require('../services/errorhandling'),
  { userMatchesPortfolio, isAuthorized, isAccessible } = require('../middleware');

// Portfolio: CREATE - Create a new portfolio
router.post('/', isAuthorized, async (req, res) => {
  try {
    const 
      { name, public } = req.body,
      { userId } = req.params,
      newPortfolio = { name, userId, public },
      createdPortfolio = await Portfolio.create(newPortfolio);
      
    res.send({ success : true, id : createdPortfolio.id });
  }
  catch(err){ 
    if(err.errors){
      for(const error of err.errors){
        if(error.message === 'name must be unique'){
          res.send(expectedError('You already have a portfolio with this name', res, 400));
        }
      }
    }
    else { res.send(unexpectedError(err, res)); }
  }
});

// Portfolio: SHOW - Shows more information about a Portfolio (assets)
router.get('/:portfolioId', userMatchesPortfolio, isAccessible, async (req, res) => {
  try {
    const 
      { name } = res.locals.portfolio,
      assetsFound = await Asset.findAll({ where : { portfolioId } }),
      numStocks = await Asset.findAll({ attributes : [[sequelize.fn('COUNT', sequelize.col('stock_id')), 'numStocks']] }),
      numShares = await Asset.findAll({ attributes : [[sequelize.fn('SUM', sequelize.col('shares')), 'numShares']] })
      assets = [];

    // let shares = Portfolio.findAll({
    //   attributes: [[sequelize.fn('COUNT', sequelize.col('hats')), 'no_hats']]
    // });       

    for(let assetFound of assetsFound){
      let 
        { id, shares, purchasedAt, soldAt, stockId } = assetFound,
        { symbol } = await Stock.findByPk(stockId),
        asset = { id, shares, purchasedAt, soldAt, symbol };

        assets.push(asset);
    }

    res.send({ name, assets });
  }
  catch(err){ res.send(unexpectedError(err)) }
});

// Portfolio: UPDATE - Update an existing portfolio
router.put('/:portfolioId', userMatchesPortfolio, isAuthorized, async (req, res) => {
  try {
    const 
      { portfolioId } = req.params,
      { newName } = req.body,
      updatedPortfolio = { name : newName },
      affectedRows = await Portfolio.update(updatedPortfolio, { where : { id : portfolioId } }),
      success = (affectedRows[0] === 1);  // One row should be affected 

    res.send(success ? { success } : expectedError(`Portfolio with id ${portfolioId} DNE`));
  }
  catch(err){ res.send(unexpectedError(err)); }
});

// Campground: DESTROY - Remove a portfolio
router.delete('/:portfolioId', userMatchesPortfolio, isAuthorized, async (req, res) => {
  try {
    const 
      { id : portfolioId } = req.params,
      affectedRows = await Portfolio.destroy({ where : { id : portfolioId } }),
      success = (affectedRows === 1);  // One row should be affected

    res.send(success ? { success } : expectedError(`Portfolio with id ${portfolioId} DNE`));
  }
  catch(err){ res.send(unexpectedError(err)); }
});

module.exports = router;
