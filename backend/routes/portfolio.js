const 
  express                            = require('express'),
  router                             = express.Router({ mergeParams : true }),
  { User, Portfolio, Asset }  = require('../db/models'),
  { userMatchesPortfolio, isAuthorized, isAccessible } = require('../middleware'),
  { sendSuccess, sendExpectedError, sendUnexpectedError } = require('../services/responses'),
  { getRealTime, getHistorical } = require('../services/stocks'),
  { round2Dec, round4Dec } = require('../services/math');

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
      userId = req.params.userId,
      [ userFound, assetsFound] = await Promise.all([
        User.findByPk(userId),
        Asset.findAll({ where : { portfolioId } })
      ]),
      currency = req.user ? req.user.currency : 'USD', 
      stocks = {},
      portfolio = {
        id : portfolioId,
        name,
        owner : userFound.username,
        currency,
        value : 0,
        shares : 0,
        assets : [],
        history : {},
        pieChartData : {
          value : [],
          shares : []
        }
      };    

    // Make all api calls to get realtime as well as historical data for each asset in the portfolio 
    await Promise.all(assetsFound.map(async assetFound => {
      const 
        { id, symbol, shares, purchasedAt } = assetFound,
        [ realtimeData, history ] = await Promise.all([
          getRealTime(symbol, currency).then( data => {
            data.value = round2Dec(data.value * shares);
            data.open = round2Dec(data.open * shares);
            data.high = round2Dec(data.high * shares);
            data.low = round2Dec(data.low * shares);
            data.change = round2Dec(data.change * shares);
            return data;
          }), // keys: symbol, name, exchange, currency, value, open, high, low, change 
          getHistorical(symbol, currency, purchasedAt).then( data => {
            const history = data.history
            for(let date in history){
              for(let metric in history[date]){
                if(metric !== 'volume'){ history[date][metric] = round2Dec(history[date][metric] * shares); }
              }
            } return history
          }) // keys: date in fmt 'YYYY-MM-DD' with close, open, high, low, volume
        ]),
        { name, exchange, value, open, high, low, change } = realtimeData,
        realtime = { value, open, high, low, change },
        asset = { id, shares, symbol, name, exchange, purchasedAt, realtime, history }

      portfolio.assets.push(asset);
    }));

    const
      // Accumulate value/shares statistics for each stock in the Portfolio (for pie graphs)
      accumulateStockStats = (symbol, value, shares) => {
        if(!stocks[symbol]){ stocks[symbol] = { value : 0, shares : 0 }; }
        stocks[symbol].value += value;
        stocks[symbol].shares += shares;
      },
      // Sum asset values into total Portfolio values over time
      combineAssetHistories = (asset) => {
        let 
          ph = portfolio.history, 
          ah = asset.history,
          shares = asset.shares;
        for(let date in ah){
          if(!ph[date]){ ph[date] = { close : 0, open : 0, high : 0, low : 0, volume : 0 }; }
          for(let metric in ah[date]){
            if(metric === 'volume'){ ph[date].volume += ah[date].volume; }
            else { ph[date][metric] += (ah[date][metric] * shares); }
          }
        }
      },
      // Sum current asset value into Portfolio's current total values
      combineAssetValuesAndShares = (value, shares) => {
        portfolio.value += value;
        portfolio.shares += shares;
      }

    for(let id in portfolio.assets){
      const
        asset = portfolio.assets[id],
        { symbol, shares, realtime } = asset,
        value = realtime.value;
      await Promise.all([accumulateStockStats(symbol, value, shares), combineAssetHistories(asset), combineAssetValuesAndShares(value, shares)]);
    }

    const
      // Round values scaled by shares
      roundValues = () => {
        for(let date in portfolio.history){
          for(let metric in portfolio.history[date]){
            portfolio.history[date][metric] = round2Dec(portfolio.history[date][metric]);
          }
        } portfolio.value = round2Dec(portfolio.value);
      },
      // Calculate pie chart data
      calcPieChartData = () => {
        for(let symbol in stocks){
          portfolio.pieChartData.value.push({ 
            name : symbol,  
            y : round4Dec(stocks[symbol].value / portfolio.value) 
          });
          
          portfolio.pieChartData.shares.push({ 
            name : symbol,  
            y : round4Dec(stocks[symbol].shares / portfolio.shares) 
          });
        }
      },
      // Sort assets
      sortAssets = () => { 
        portfolio.assets = portfolio.assets.sort((i, j) => i.realtime.value < j.realtime.value); 
      };

    await Promise.all([roundValues(), calcPieChartData(), sortAssets()]);

    // Sort pie chart data
    for(let metric in portfolio.pieChartData){ portfolio.pieChartData[metric] = portfolio.pieChartData[metric].sort((i, j) => i.y < j.y); }

    sendSuccess(portfolio, res);
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
