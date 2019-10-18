// Stock data taken from WordTradingData api
// Use (ref: https://www.npmjs.com/package/stock-data.js) wrapper for calling api
const data = require('stock-data.js');

// exports variable for exporting functions from module
var exports = module.exports = {};

// Gets stock realtime data based on stock symbol(s)
// param=symbols : expecting a string, or array of strings, that are stock symbols (i.e. AAPL)
// param=callback : a function to handle the return of the response
exports.getStockRealTime = (symbols, callback) => {
    data.realtime({
        symbols: symbols,
        API_TOKEN: process.env.STOCK_TOKEN,
    })
    .then(response => {
        callback(response.data[0]);
    })
    .catch(error => {
        callback(error);
    });
}

// Gets stock intraday based on stock symbol and a MINUTE interval and DAY range
// param=symbol : expects and string stock symbol (i.e. AAPL)
// param=interval : expects a string MINUTE number (i.e '60') 
// param=range : expects a string DAY number (i.e "7")
//  (interval defaulted to 60, and range defaulted to 1)
//      NOTE: This would give the intraday for EVERY HOUR of ONE DAY
// param=callback : a function to handle the return of the response
exports.getStockIntraday = (symbol, callback, interval = 60, range = 1) => {
    data.intraday({
        symbol: symbol,
        API_TOKEN: process.env.STOCK_TOKEN,
        options: {
            interval: interval,
            range: range
        }
    })
    .then(response => {
        callback(response);
    })
    .catch(error => {
        callback(error);
    });
}


// Gets stock(s) by a string search term
// NOTE: This function doesn't get all the important data that other functions get (i.e high/lows etc..)
// params=searchTerm : expects a string search term (i.e 'Apple')
// params=callback : a function to handle the return of the response
exports.getStockBySearchTerm = (searchTerm , callback) => {
    data.search({
        search_term: searchTerm,
        API_TOKEN: process.env.STOCK_TOKEN,
    })
    .then(response => {
        callback(response.data);
    })
    .catch(error => {
        callback(error);
    });
}

// Gets stock historical data based on string symbol, string dateFrom, string dateTo
// params=symbols : expects a string symbol
// params=dateFrom : expects a string date in the format "YYYY-MM-DD"
// params=dateTo : expects a string date in same format as above
// params=callback : a function to handle the return of the response
exports.getStockHistorical = (symbol, callback, dateFrom = '2018-01-01', dateTo = '2018-12-31') => {
    data.historical({
        symbol: symbol,
        API_TOKEN: process.env.STOCK_TOKEN,
        options: {
            date_from: dateFrom,
            date_to: dateTo
        }
    })
    .then(response => {
        callback(response);
    })
    .catch(error => {
        console.log(error);
        callback(error);
    });
}
