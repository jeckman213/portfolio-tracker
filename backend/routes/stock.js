const 
  express   = require('express'),
  router    = express.Router(),
  Op        = require('../db/models').Sequelize.Op,
  Stock     = require('../db/models').Stock,
  { expectedError, unexpectedError } = require('../services/errorhandling'),
  stockdata = require('../services/stockservice');

  // Stock search call
  // NOTE: Search only gives you 5 results because of free account on api
  // router.get('/search/:searchTerm', (req, res) => {
  //   var searchTerm = req.params.searchTerm;
  
  //   stockdata.getStockBySearchTerm(searchTerm, (data) => {
  //     var models = [];
  
  //     console.log(data.length)
  
  //     for (var i = 0; i < data.length; i++) {
  //       var stock = data[i];
  //       models[i] = {
  //         symbol: stock.symbol,
  //         name: stock.name,
  //         currency: stock.currency,
  //         price: stock.price,
  //         exchangeShort: stock.stock_exchange_short
  //       }
  //     }
  
  //     res.send(models);
  //   });
  // }); 

  /* Expects query param 'q' */
  router.get('/search', (req, res) => {
    const { q : query } = req.query;
    Stock.findAll({
      order : [['symbol']],
      where : { 
        [Op.or] : {
          symbol : {
            [Op.iRegexp] : `.*${query}.*` 
          },
          name : { 
            [Op.iRegexp] : `.*${query}.*`
          }
        }
      }
    })
      .then( stocks => {
        const matches = stocks ? stocks.slice(0, 5) : [];
        res.send(matches);
      })
      .catch( err => res.send(unexpectedError(err)));
  });

  router.get('/:id', async (req, res) => {
    const 
      { id } = req.params,
      stock = await Stock.findByPk(id);

      res.send(stock ? stock : expectedError(`Stock with id ${id} DNE`));
  });
  
  // Stock intraday call
  router.get('/intraday/:symbol/:interval?/:range?', (req, res) => {
    var symbol = req.params.symbol,
      interval = req.params.interval,
      range = req.params.range;
  
    // If the optional parameters are empty let them be there defaulted values
    if (interval == undefined || range == undefined) {
      stockdata.getStockIntraday(symbol, (data) => {
        var model = {
          symbol: data.symbol,
          exchangeShort: data.stock_exchange_short,
          intraday: Object.values(data.intraday)
        }
        res.send(model);
      });
    }
    else {
      stockdata.getStockIntraday(symbol, (data) => {
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
  router.get('/realtime/:symbol', (req, res) => {
    var symbol = req.params.symbol;
  
    stockdata.getStockRealTime(symbol, (data) => {
      var model = {
        symbol: data.symbol,
        name: data.name,
        currency: data.currency,
        price: data.price,
        priceOpen: data.price_open,
        dayHigh: data.day_high,
        dayLow: data.day_low,
        dayChange: data.day_change,
        exchangeShort: data.stock_exchange_short
      }
      res.send(model);
    });
  }); 
  
  // Stock history call
  router.get('/history/:symbol/:dateFrom?/:dateTo?', (req, res) => {
    var symbol = req.params.symbol,
      dateFrom = req.params.dateFrom,
      dateTo = req.params.dateTo;
  
    if (dateFrom == undefined || dateTo == undefined) {
      stockdata.getStockHistorical(symbol, (data) => {
        res.send(data);
      });
    }
    else {
      stockdata.getStockHistorical(symbol, (data) => {
        res.send(data);
      },
      dateFrom, 
      dateTo);
    }
  }); 

  module.exports = router;