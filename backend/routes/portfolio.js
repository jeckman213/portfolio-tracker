const 
  express                            = require('express'),
  router                             = express.Router({ mergeParams : true }),
  { Portfolio, Asset }  = require('../db/models'),
  { userMatchesPortfolio, isAuthorized, isAccessible } = require('../middleware'),
  { sendSuccess, sendExpectedError, sendUnexpectedError } = require('../services/responses'),
  { getRealTime, getHistorical } = require('../services/stocks'),
  { round2Dec } = require('../services/math').default;

// Portfolio: CREATE - Create a new portfolio
router.post('/', isAuthorized, async (req, res) => {
  try {
    const 
      { name, isPublic : public } = req.body,
      { userId } = req.params,
      newPortfolio = { name, userId, public },
      createdPortfolio = await Portfolio.create(newPortfolio),
      { id } = createdPortfolio,
      createdPortfolioData = { id };

    sendSuccess(createdPortfolioData, res);
  }
  catch(err){ 
    if(err.errors){
      for(const error of err.errors){
        if(error.message === 'name must be unique'){
          sendExpectedError('You already have a portfolio with this name', res, 400);
        }
      }
    }
    else { sendUnexpectedError(err, res); }
  }
});

// Portfolio: SHOW - Shows more information about a Portfolio (Assets)
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

    await Promise.all(assetsFound.map(async assetFound => {
      let 
        { id, symbol, shares, purchasedAt } = assetFound,
        value = round2Dec( await getRealTime(symbol, currency) * shares ),
        historical = await getHistorical(symbol, purchasedAt);

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
    }));

    for(let symbol in stocks){
      pieChartData.values.push({ name : symbol, y : round2Dec(stocks[symbol].value / portfolioValue) });
      pieChartData.shares.push({ name : symbol, y : round2Dec(stocks[symbol].shares / portfolioShares) });
    }

    portfolioValue = round2Dec(portfolioValue);

    const showPortfolioData = { name, value : portfolioValue, shares : portfolioShares, assets, historical : portfolioHistorical, pieChartData };

    sendSuccess(showPortfolioData, res);
  }
  catch(err){ sendUnexpectedError(err, res); }
});

// Portfolio: UPDATE - Update an existing portfolio
router.put('/:portfolioId', userMatchesPortfolio, isAuthorized, async (req, res) => {
  try {
    const 
      { portfolioId } = req.params,
      { name, public } = req.body,
      updatedPortfolio = { name, public },
      affectedRows = await Portfolio.update(updatedPortfolio, { where : { id : portfolioId } }),
      updatedPortfolioData = { id : portfolioId, name, public };

    if(affectedRows[0] === 1){ sendSuccess(updatedPortfolioData, res); }
    else { sendExpectedError(`Portfolio with id ${portfolioId} DNE`, res, 200); };
  }
  catch(err){ sendUnexpectedError(err, res); }
});

// Campground: DESTROY - Remove a portfolio
router.delete('/:portfolioId', userMatchesPortfolio, isAuthorized, async (req, res) => {
  try {
    const 
      { portfolioId } = req.params,
      affectedRows = await Portfolio.destroy({ where : { id : portfolioId } }),
      destroyedPortfolioData = { id : portfolioId };

    if(affectedRows === 1){ sendSuccess(destroyedPortfolioData, res); }
    else { sendExpectedError(`Portfolio with id ${portfolioId} DNE`, res, 200); }
  }
  catch(err){ sendUnexpectedError(err, res); }
});

module.exports = router;
