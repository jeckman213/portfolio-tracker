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
    alpha.data.daily_adjusted(symbol).then(data => {
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