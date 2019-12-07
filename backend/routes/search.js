const 
  express = require('express'),
  router = express.Router(),
  { User, Portfolio, Stock, sequelize } = require('../db/models'),
  { sendSuccess, sendExpectedError, sendUnexpectedError } = require('../services/responses');

/* Expects query param 'q' */
router.get('/stock', async (req, res) => {
  try {
    let query = req.query.q;
    query = query.replace(' ', ' & '); // Format tokens for tsquery
    query = (query.slice(-1) === ' ') ? query.slice(0, -3) : query; // Remove trailing space

    let results = query
      ? await sequelize.query(`
          SELECT id, symbol, name, exchange
          FROM ${Stock.tableName}
          WHERE _search @@ to_tsquery(:query)
          ORDER BY ts_rank_cd(_search, to_tsquery(:query), 4);
        `, {
          model : Stock,
          replacements : { query : `${query}:*` },
        })
      : [];

      results = results ? results.slice(0, 10) : [];
      const matches = { results };

    sendSuccess(matches, res);
  }
  catch(err){ sendUnexpectedError(err, res); }
});

router.get('/user', async (req, res) => {
  try {
    const
      username = req.query.username,
      user = await User.findOne({ where : { username } });
    
    if(user){ 
      const match = { id : user.id };

      sendSuccess(match, res); 
    } 
    else { sendExpectedError(`User with username '${username}' DNE`, res, 200); }
  }
  catch(err){ sendUnexpectedError(err, res); }
});

router.get('/portfolio', async (req, res) => {
  try {
    const
      { username, portfolioName } = req.query,
      userFound = await User.findOne({ where : { username } });

    if(userFound){
      const
        userId = userFound.id,
        portfolioFound = await Portfolio.findOne({ where : { name : portfolioName, userId } });

      if(portfolioFound){
        const 
          portfolioId = portfolioFound.id,
          match = { userId, portfolioId };

        sendSuccess(match, res);
      } else { sendExpectedError(`${username} does not a own portfolio named '${portfolioName}'`, res, 200); }
    } else { sendExpectedError(`User with username '${username}' DNE'`, res, 200); } 
  }
  catch(err){ sendUnexpectedError(err, res); }
});

module.exports = router;
