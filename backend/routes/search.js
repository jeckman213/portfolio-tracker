const 
  express   = require('express'),
  router    = express.Router(),
  { User, Portfolio, Stock, sequelize } = require('../db/models'),
  { expectedError, unexpectedError } = require('../services/errorhandling');

/* Expects query param 'q' */
router.get('/stock', async (req, res) => {
  try {
    let { q : query } = req.query;
    query = query.replace(' ', ' & '); // Format tokens for tsquery
    query = (query.slice(-1) === ' ') ? query.slice(0, -3) : query; // Remove trailing space
    const
      results = query
        ? await sequelize.query(`
            SELECT id, symbol, name, exchange
            FROM ${Stock.tableName}
            WHERE _search @@ to_tsquery(:query)
            ORDER BY ts_rank_cd(_search, to_tsquery(:query), 4);
          `, {
            model: Stock,
            replacements: { query : `${query}:*` },
          })
        : [],
      matches = results ? results.slice(0, 10) : [];

    res.send(matches);
  }
  catch(err){ res.send(unexpectedError(err, res)); }
});

router.get('/user', async (req, res) => {
  try {
    const
      { username } = req.query,
      user = await User.findOne({ where : { username } }),
      success = (user !== null);
  
    res.send(success ? { success, id : user.id } : expectedError(`User with username '${username}' DNE`, res, 200));
  }
  catch(err){ res.send(unexpectedError(err, res)); }
});

router.get('/portfolio', async (req, res) => {
  try {
    console.log(req.query);
    const
      { username, portfolioName } = req.query,
      userFound = await User.findOne({ where : { username } });
    console.log(portfolioName)
    if(userFound){
      const
        { id : userId } = userFound;
        portfolioFound = await Portfolio.findOne({ where : { name : portfolioName, userId } });
      if(portfolioFound){
        const { id : portfolioId } = portfolioFound;
        res.send({ success : true, userId, portfolioId });
      } else { res.send(expectedError(`${username} does not a own portfolio named '${portfolioName}'`, res, 200)); }
    } else { res.send(expectedError(`User with username '${username}' DNE'`, res, 200)); } 
  }
  catch(err){ res.send(unexpectedError(err, res)); }
});

module.exports = router;
