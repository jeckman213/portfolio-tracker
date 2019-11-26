const 
  express                            = require('express'),
  router                             = express.Router(),
  { User, Portfolio }                = require('../db/models'),
  { sendSuccess, sendExpectedError, sendUnexpectedError } = require('../services/responses');

// User: SHOW - Shows more information about a User (Portfolios)
router.get('/:userId', async (req, res) => {
  try{
    const 
      userId = req.params.userId,
      userFound = await User.findByPk(userId);
      
    if(userFound){
      const 
        username = userFound.username,
        portfoliosFound = await Portfolio.findAll({ where : { userId }});
      
      let portfolios = portfoliosFound.map( portfolioFound => {
        let { id, name, public, createdAt, updatedAt } = portfolioFound;
        return { id, name, public, createdAt, updatedAt };
      });
      
      /* Only return public is user does not own portfolios */
      const
        authenticated = req.isAuthenticated(),
        authorized = authenticated && req.user.id === userId;

      if(!authorized){ portfolios = portfolios.filter( portfolio => portfolio.public); }

      const showUserData = { owner : username, portfolios }

      sendSuccess(showUserData, res);
    }
    else { sendExpectedError(`User with id ${userId} DNE`, res, 404); }
  }
  catch(err){ sendUnexpectedError(err, res); }
});

module.exports = router;
