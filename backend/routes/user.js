const
  express = require('express'),
  router = express.Router(),
  moment = require('moment'),
  { User, Portfolio } = require('../db/models'),
  { isAuthorized } = require('../middleware'),
  { sendSuccess, sendExpectedError, sendUnexpectedError } = require('../services/responses');

// User: SHOW - Shows more information about a User (Portfolios)
router.get('/:userId', async (req, res) => {
  try {
    const 
      userId = req.params.userId,
      userFound = await User.findByPk(userId);
      
    if(userFound){
      const 
        { username, email, currency, firstname, lastname } = userFound,
        portfoliosFound = await Portfolio.findAll({
          where : { userId },
          order : [ ['updated_at', 'DESC'] ]
        });
      
      let portfolios = portfoliosFound.map( portfolioFound => {
        const readableTimestampz = (timestampz) => moment(timestampz).format('MMMM Do YYYY, H:mm');
        let { id, name, public, createdAt, updatedAt } = portfolioFound;
        createdAt = readableTimestampz(createdAt);
        updatedAt = readableTimestampz(updatedAt);

        return { id, name, isPublic : public, createdAt, updatedAt };
      });

      /* Only return public is user does not own portfolios */
      const authorized = req.isAuthenticated() && req.user.id == userId;

      if(!authorized){ portfolios = portfolios.filter( portfolio => portfolio.isPublic); }

      const showUserData = { username, email, currency, firstname, lastname, portfolios }

      sendSuccess(showUserData, res);
    }
    else { sendExpectedError(`User with id ${userId} DNE`, res, 404); }
  }
  catch(err){ sendUnexpectedError(err, res); }
});

router.put('/:userId', isAuthorized, async (req, res) => {
  try {
    const 
      userId = req.params.userId,
      { username, password, email, firstname, lastname, currency } = req.body,
      updatedUser = {};

    if(username){ updatedUser.username = username; }
    if(password){ updatedUser.password = password; }
    if(email){ updatedUser.email = email; }
    if(firstname){ updatedUser.firstname = firstname; }
    if(lastname){ updatedUser.lastname = lastname; }
    if(currency){ updatedUser.currency = currency; }
    updatedUser.updatedAt = Date.now();

    const affectedRows = await User.update(updatedUser, { where : { id : userId } });

    if(affectedRows[0] === 1){ sendSuccess(updatedUser, res); }
    else { sendExpectedError(`User with id ${userId} DNE`, res, 404); }
  }
  catch(err){ sendUnexpectedError(err, res); }
});

module.exports = router;
