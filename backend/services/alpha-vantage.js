const alpha = require('alphavantage').default();

var exports = module.exports = {};

exports.getIntraday = (symbol, interval = '60min', callback) => {
    alpha.data.intraday(symbol).then(data => {
        callback(data);
    });
}

exports.getBatch = (symbols, callback) => {
    alpha.data.batch(symbols).then(data => {
        callback(data);
    });
}

exports.getDailyAdjusted = (symbol, interval = "60min", callback) => {
    alpha.data.daily_adjusted(symbol, "full", "json", interval).then(data => {
        callback(data);
    });
}

exports.getWeeklyAdjusted = (symbol, interval, callback) => {
    alpha.data.weekly_adjusted(symbol).then(data => {
        callback(data);
    });
}

exports.getMonthlyAdjusted = (symbol, interval, callback) => {
    alpha.data.monthly_adjusted(symbol).then(data => {
        callback(data);
    });
}

exports.stockSearch = (keywords, callback) => {
    alpha.data.search(keywords).then(data => {
        callback(data);
    });
}

exports.getSimpleMovingAverage = (symbol, callback, interval = "daily", timePeriod = 10, seriesType = "close") => {
    alpha.technical.sma( symbol, interval, timePeriod, seriesType )
        .then(data => {
            callback(data);
        })
}

exports.getMACD = (symbol, callback, interval = "daily", seriesType = "close", fastperiod = 12, slowperiod = 26, signalperiod = 9) => {
    alpha.technical.macd( symbol, interval, seriesType, fastperiod, slowperiod, signalperiod )
        .then(data => {
            callback(data);
        })
}