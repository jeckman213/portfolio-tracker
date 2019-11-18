const 
  express                            = require('express'),
  router                             = express.Router({ mergeParams : true }),
  { Portfolio, Asset }  = require('../db/models'),
  { expectedError, unexpectedError } = require('../services/errorhandling'),
  { userMatchesPortfolio, isAuthorized, isAccessible } = require('../middleware'),
  { getStockValue, getStockValues } = require('../services/stockservice'),
  { round2Dec } = require('../services/math');

// Portfolio: CREATE - Create a new portfolio
router.post('/', isAuthorized, async (req, res) => {
  try {
    const 
      { name, isPublic : public } = req.body,
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
      { name, id : portfolioId } = res.locals.portfolio,
      assetsFound = await Asset.findAll({ where : { portfolioId } }),
      assets = [],
      portfolioHistorical = {},
      stocks = {},
      pieChartData = {};

    let portfolioValue = 0, portfolioShares = 0;
    pieChartData.values = [];
    pieChartData.shares = [];

    // Can probably drastically improve performance with Promise.all()
    for(let assetFound of assetsFound){
      let 
        { id, symbol, shares, purchasedAt } = assetFound,
        value = round2Dec(await getStockValue(symbol) * shares),
        historical = await getStockValues(symbol, purchasedAt);

      if(!stocks[symbol]){ stocks[symbol] = {}; }
      stocks[symbol].value = stocks[symbol].value ? (stocks[symbol].value + value) : value;
      stocks[symbol].shares = stocks[symbol].shares ? (stocks[symbol].shares + shares) : shares;

      for(let date in historical){
        let ph = portfolioHistorical, h = historical;
        if(!ph[date]){ ph[date] = {}; }

        ph[date].value = ph[date].value ? ((parseFloat(h[date].close) * shares) + parseFloat(ph[date].value)) : (parseFloat(h[date].open) * shares);
        ph[date].value = round2Dec(ph[date].value)
      }

      let asset = { id, shares, purchasedAt, symbol, value, historical };

      portfolioValue += asset.value;
      portfolioShares += asset.shares;
      assets.push(asset);
    }

    for(let symbol in stocks){
      pieChartData.values.push({ name : symbol, y : round2Dec(stocks[symbol].value / portfolioValue) });
      pieChartData.shares.push({ name : symbol, y : round2Dec(stocks[symbol].shares / portfolioShares) });
    }

    portfolioValue = round2Dec(portfolioValue);
    res.send({ name, value : portfolioValue, shares : portfolioShares, assets, historical : portfolioHistorical, pieChartData });
  }
  catch(err){ res.send(unexpectedError(err, res)) }
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
      { portfolioId } = req.params,
      affectedRows = await Portfolio.destroy({ where : { id : portfolioId } }),
      success = (affectedRows === 1);  // One row should be affected
    console.log(success);
    res.send(success ? { success } : expectedError(`Portfolio with id ${portfolioId} DNE`));
  }
  catch(err){ res.send(unexpectedError(err)); }
});

module.exports = router;
