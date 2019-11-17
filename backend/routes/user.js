const 
  express                            = require('express'),
  router                             = express.Router(),
  { User, Portfolio }                = require('../db/models'),
  { expectedError, unexpectedError } = require('../services/errorhandling');

router.get('/search', async (req, res) => {
  try {
    const
      { q : username } = req.query,
      user = await User.findOne({ where : { username } }),
      success = (user !== null);
  
    res.send(success ? { success, id : user.id } : expectedError(`User with username '${username}' DNE`, res, 200));
  }
  catch(err){ res.send(unexpectedError(err, res)); }
});

router.get('/:userId', async (req, res) => {
  try{
    const 
      { userId } = req.params,
      userFound = await User.findByPk(userId);
      
    if(userFound){
      const 
        { username } = userFound,
        portfoliosFound = await Portfolio.findAll({ where : { userId }});
      
      let portfolios = [];
      
      for(let portfolioFound of portfoliosFound){
        let 
          { id, name, public, createdAt, updatedAt } = portfolioFound;
          portfolio = { id, name, public, createdAt, updatedAt };
          portfolios.push(portfolio);
      }
      
      /* Only return public is user does not own portfolios */
      var authenticated = req.isAuthenticated();
      var authorized = authenticated && req.user.id === userId;

      if(!req.isAuthenticated() || (req.isAuthenticated() && req.user.id != userId)){
        portfolios = portfolios.filter( portfolio => portfolio.public);
      }

      res.send({ owner : username, portfolios, authenticated, authorized, reqUserId : req.user.id, userId });
    }
    else { res.send(expectedError(`User with id ${userId} DNE`)); }
  }
  catch(err){ res.send(unexpectedError(err)); }
});

module.exports = router;
