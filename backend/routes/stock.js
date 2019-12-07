const 
  express   = require('express'),
  router    = express.Router(),
  { Stock } = require('../db/models'),
  { sendSuccess, sendExpectedError, sendUnexpectedError } = require('../services/responses'),
  stocks = require('../services/stocks');

  router.get('/:id', async (req, res) => {
    try {
      const 
        id = req.params.id,
        stock = await Stock.findByPk(id);

      if(stock){ sendSuccess(stock, res); }
      else { sendExpectedError(`Stock with id ${id} DNE`, res, 200); }
    }
    catch(err){ sendUnexpectedError(err, res); }
  });
  
  // Stock intraday call
  router.get('/intraday/:symbol/:interval?/:range?', (req, res) => {
    var 
      symbol = req.params.symbol,
      interval = req.params.interval,
      range = req.params.range;
  
    // If the optional parameters are empty let them be there defaulted values
    if (interval == undefined || range == undefined) {
      stocks.getStockIntraday(symbol, (data) => {
        var model = {
          symbol: data.symbol,
          exchangeShort: data.stock_exchange_short,
          intraday: data.intraday
        }

        res.send(model);
      });
    }
    else {
      stocks.getStockIntraday(symbol, (data) => {
        var model = {
          symbol: data.symbol,
          exchangeShort: data.stock_exchange_short,
          intraday: data.intraday
        }
        res.send(model);
      },
      interval, 
      range);
    }
  }); 
  
  // Stock realtime call
  router.get('/realtime/:symbol', async (req, res) => {
    try {
      const
        symbol = req.params.symbol,
        currency = req.user ? req.user.currency : 'USD', 
        realTimeData = await stocks.getRealTime(symbol, currency);        
      
      sendSuccess(realTimeData, res);
    }
    catch(err){ sendUnexpectedError(err, res); }
  }); 
  
  // Stock history call
  router.get('/history/:symbol', async (req, res) => {
    try {
      const 
        symbol = req.params.symbol,
        { dateFrom, dateTo } = req.query,
        currency = req.user ? req.user.currency : 'USD',
        historicalData = await stocks.getHistorical(symbol, currency, dateFrom, dateTo);
      
      sendSuccess(historicalData, res);
    } 
    catch(err){ sendUnexpectedError(err, res); }
  }); 

  module.exports = router;
