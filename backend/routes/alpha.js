const express = require('express'),
      router = express.Router(),
      alpha = require('../services/alpha-vantage');

router.get('/intraday/:symbol', (req, res) => {
    const symbol = req.params.symbol;

    alpha.getIntraday(symbol, data => {
        res.send(data);
    });
});

module.exports = router;

