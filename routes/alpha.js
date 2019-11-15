const express = require('express'),
      router = express.Router(),
      alpha = require('../services/alpha-vantage');

router.get('/intraday/:symbol/:interval?', (req, res) => {
    const symbol = req.params.symbol;
          interval = req.params.interval;

    if (interval == null || interval == undefined) interval = "1min";

    alpha.getIntraday(symbol, interval, data => {
        var model = [];
        
        var timeSeries = data[`Time Series (${interval})`];
        Object.keys(timeSeries).forEach(key => {
            model.push({
                date: key,
                UTC: Date.parse(key),
                open: parseFloat( timeSeries[key]["1. open"] ),
                high: parseFloat( timeSeries[key]["2. high"] ),
                low: parseFloat( timeSeries[key]['3. low'] ),
                adjustedClose: parseFloat( timeSeries[key]['5. adjusted close'] )
            });
        });
        res.send(model);
    });
});

router.get('/daily/:symbol/:interval?', (req, res) => {
    const symbol = req.params.symbol;
          interval = req.params.interval;

    alpha.getDailyAdjusted(symbol, interval, data => {
        var model = [];
        
        var timeSeries = data['Time Series (Daily)'];
        Object.keys(timeSeries).forEach(key => {
            model.push({
                date: key,
                UTC: Date.parse(key),
                open: parseFloat( timeSeries[key]["1. open"] ),
                high: parseFloat( timeSeries[key]["2. high"] ),
                low: parseFloat( timeSeries[key]['3. low'] ),
                close: parseFloat( timeSeries[key]['4. close'] ),
                adjustedClose: parseFloat( timeSeries[key]['5. adjusted close'] )
            });
        });

        model = model.reverse();

        res.send(model);
    });
});

router.get('/weekly/:symbol/:interval?', (req, res) => {
    const symbol = req.params.symbol;
          interval = req.params.interval;

    alpha.getWeeklyAdjusted(symbol, interval, data => {
        var model = [];
        
        var timeSeries = data["Weekly Adjusted Time Series"];
        Object.keys(timeSeries).forEach(key => {
            model.push({
                date: key,
                UTC: Date.parse(key),
                open: parseFloat( timeSeries[key]["1. open"] ),
                high: parseFloat( timeSeries[key]["2. high"] ),
                low: parseFloat( timeSeries[key]['3. low'] ),
                close: parseFloat( timeSeries[key]['4. close'] ),
                adjustedClose: parseFloat( timeSeries[key]['5. adjusted close'] )
            });
        });
        
        model = model.reverse();

        res.send(model);
    });
});

router.get('/monthly/:symbol/:interval?', (req, res) => {
    const symbol = req.params.symbol;
          interval = req.params.interval;

    alpha.getMonthlyAdjusted(symbol, interval, data => {
        var model = [];
        
        var timeSeries = data["Monthly Adjusted Time Series"];
        Object.keys(timeSeries).forEach(key => {
            model.push({
                date: key,
                UTC: Date.parse(key),
                open: parseFloat( timeSeries[key]["1. open"] ),
                high: parseFloat( timeSeries[key]["2. high"] ),
                low: parseFloat( timeSeries[key]['3. low'] ),
                close: parseFloat( timeSeries[key]['4. close'] ),
                adjustedClose: parseFloat( timeSeries[key]['5. adjusted close'] )
            });
        });

        model = model.reverse();

        res.send(model);
    });
});

router.get('/search/:keyword', (req, res) => {
    const keyword = req.params.keyword;

    alpha.stockSearch(keyword, data => {
        var model = data['bestMatches'];
        res.send(model);
    });
});

router.get('/sma/:symbol', (req, res) => {
    const symbol = req.params.symbol;

    var model = [];

    // NOTE: There are more options you can specify they are just defaulted for now
    //       See: https://www.npmjs.com/package/alphavantage for more options
    alpha.getSimpleMovingAverage(symbol, data => {
        var technical = data['Technical Analysis: SMA'];
        Object.keys(technical).forEach(key => {
            model.push({
                date: key,
                UTC: Date.parse(key),
                SMA: parseFloat( technical[key]['SMA'] )
            });
        });

        model = model.reverse();

        res.send(model);
    });
});

router.get('/macd/:symbol', (req, res) => {
    const symbol = req.params.symbol;

    var model = [];

    // NOTE: There are more options you can specify they are just defaulted for now
    //       See: https://www.npmjs.com/package/alphavantage for more options
    alpha.getMACD(symbol, data => {
        const technical = data['Technical Analysis: MACD'];
        Object.keys(technical).forEach(key => {
            model.push({
                date: key,
                UTC: Date.parse(key),
                signal: parseFloat( technical[key]['MACD_Signal'] ),
                hist: parseFloat( technical[key]['MACD_Hist'] ),
                MACD: parseFloat( technical[key]['MACD'] )
            });
        });

        model = model.reverse();
        
        res.send(model);
    });
});

module.exports = router;

