const alpha = require('alphavantage')({key: process.env.ALPHA_TOKEN});

var exports = module.exports = {};

exports.getIntraday = (symbol, callback) => {
    alpha.data.monthly_adjusted(symbol, 60).then(data => {
        callback(data);
    });
}