// Express setup 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// Stock service for getting stock information from api
const stockdata = require("./services/stockservice.js");

// Model imports
const RTM = require("./models/StockRealTimeModel.js");

// For setting up .env file for environmental variables
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// API SECTION
// Test api call
app.get('/api/test', (req, res) => {
  res.send({ express: 'Sucessfully Connected to Express Server' });
});

// Stock search call
// NOTE: Search only gives you 5 results because of free account on api
app.get('/api/stock/search/:searchTerm', (req, res) => {
  var searchTerm = req.params.searchTerm;

  stockdata.getStockBySearchTerm(searchTerm, (data) => {
    var models = [];
    var counter = 0;

    console.log(data.length)

    for (var i = 0; i < data.length; i++) {
      var stock = data[i];
      models[i] = {
        symbol: stock.symbol,
        name: stock.name,
        currency: stock.currency,
        price: stock.price,
        exchangeShort: stock.stock_exchange_short
      }
    }

    res.send(models);
  });
}); 

// Stock intraday call
app.get('/api/stock/intraday/:symbol/:interval?/:range?', (req, res) => {
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
app.get('/api/stock/realtime/:symbol', (req, res) => {
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
app.get('/api/stock/history/:symbol/:dateFrom?/:dateTo?', (req, res) => {
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

// The port being listened to and message displayed with started
app.listen(port, () => console.log(`Listening on port ${port}`));