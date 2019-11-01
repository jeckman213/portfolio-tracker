const express = require('express'),
      router = express.Router(),
      alpha = require('../services/alpha-vantage');

router.get('/intraday/:symbol/:interval?', (req, res) => {
    const symbol = req.params.symbol;
          interval = req.params.interval;

    if (interval == null || interval == "") interval = '60min';

    alpha.getIntraday(symbol, interval, data => {
        res.send(data);
    });
});

router.get('/daily/:symbol/:interval?', (req, res) => {
    const symbol = req.params.symbol;
          interval = req.params.interval;

    alpha.getDailyAdjusted(symbol, interval, data => {
        res.send(data);
    });
});

router.get('/weekly/:symbol/:interval?', (req, res) => {
    const symbol = req.params.symbol;
          interval = req.params.interval;

    alpha.getWeeklyAdjusted(symbol, interval, data => {
        res.send(data);
    });
});

router.get('/monthly/:symbol/:interval?', (req, res) => {
    const symbol = req.params.symbol;
          interval = req.params.interval;

    alpha.getMonthlyAdjusted(symbol, interval, data => {
        res.send(data);
    });
});

router.get('/search/:keyword', (req, res) => {
    const keyword = req.params.keyword;

    alpha.stockSearch(keyword, data => {
        res.send(data);
    });
})

module.exports = router;

