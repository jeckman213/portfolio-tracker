// Stock data taken from WordTradingData api
// Use (ref: https://www.npmjs.com/package/stock-data.js) wrapper for calling api
const 
  stocks = require('stock-data.js'),
  forex = require('./forex'),
  moment = require('moment'),
  { round2Dec } = require('./math'),
  API_TOKEN = process.env.STOCK_TOKEN,
  functions = {};

functions.getRealTime = async (symbol, currency = 'USD') => {
  const [ data, conversionRate ] = await Promise.all([
    stocks.realtime({ symbols : symbol, API_TOKEN }).then( res => res.data[0] ),
    forex.getRealTime('USD', currency)
  ]);

  let { 
    name, price, 
    price_open : priceOpen, 
    day_high : dayHigh,  
    day_low : dayLow, 
    day_change : dayChange, 
    stock_exchange_short : exchange
  } = data;

  price = round2Dec(parseFloat(price) * conversionRate);
  priceOpen = round2Dec(parseFloat(priceOpen) * conversionRate);
  dayHigh = round2Dec(parseFloat(dayHigh) * conversionRate);
  dayLow = round2Dec(parseFloat(dayLow) * conversionRate);
  dayChange = round2Dec(parseFloat(dayChange) * conversionRate);
  
  const realTimeStockData = { 
    symbol, name, exchange, currency, 
    price, priceOpen, dayHigh, dayLow, dayChange 
  };

  return realTimeStockData;
}

// Gets stock intraday based on stock symbol and a MINUTE interval and DAY range
// param=symbol : expects and string stock symbol (i.e. AAPL)
// param=interval : expects a string MINUTE number (i.e '60') 
// param=range : expects a string DAY number (i.e "7")
//  (interval defaulted to 60, and range defaulted to 1)
//      NOTE: This would give the intraday for EVERY HOUR of ONE DAY
// param=callback : a function to handle the return of the response
functions.getStockIntraday = (symbol, callback, interval = 60, range = 1) => {
  stocks.intraday({
    symbol,
    API_TOKEN,
    options : {
      interval,
      range
    }
  })
  .then(response => callback(response) )
  .catch(error => callback(error) );
}

functions.getHistorical = async (symbol, currency = 'USD', dateFrom = moment().subtract(30, 'days').format('YYYY-MM-DD'), dateTo = moment().format('YYYY-MM-DD')) => {
  const [ history, conversionRates ] = await Promise.all([
    stocks.historical({ symbol, API_TOKEN, options: { date_from : dateFrom, date_to : dateTo } })
      .then( res => res.history ),
    forex.getHistorical('USD', currency)
  ]);

  let parsedHistory = {};

  /* Parse open/high/low/close into floats and volume into int, convert currency if necessary, round floats */
  for(let date in history){
    parsedHistory[date] = {};
    for(let metric in history[date]){
      if(metric === 'volume'){ parsedHistory[date][metric] = parseInt(history[date][metric]); }
      else {
        if(currency !== 'USD'){
          parsedHistory[date][metric] = round2Dec(parseFloat(history[date][metric]) * conversionRates[date]); 
        }
        else {
          parsedHistory[date][metric] = parseFloat(history[date][metric]);
        }
      }
    }
  }

  const historicalStockData = { symbol, currency, history : parsedHistory };

  return historicalStockData;
}

module.exports = functions;
