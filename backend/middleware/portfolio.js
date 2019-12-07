const
  { Portfolio } = require('../db/models'),
  { sendExpectedError, sendUnexpectedError } = require('../services/responses'),
  middleware = {};

// Checks if user with id req.params.userId 
// owns a portfolio with id req.params.portfolioId 
// (i.e. this is a valid endpoint)
middleware.userMatchesPortfolio = async (req, res, next) => {
  try {
    const 
      { userId, portfolioId } = req.params,
      portfolioFound = await Portfolio.findOne({ where : { id : portfolioId, userId } });
        
    if(portfolioFound){ 
      res.locals.portfolio = portfolioFound;
      next(); 
    }
    else { sendExpectedError(`User with id ${userId} does not own a portfolio with id ${portfolioId}`, res, 404); }
  }
  catch(err){ sendUnexpectedError(err, res) }
}

// Checks if the portfolio is public or the user owns it
// Must use after userMatchesPortfolio
middleware.isAccessible = async (req, res, next) => {
  try {
    const 
      { public, userId : ownerId } = res.locals.portfolio,
      currentUserId = req.isAuthenticated() ? req.user.id : null;
    
    public || currentUserId === ownerId
      ? next()
      : sendExpectedError('Unauthorized access', res, 403);
  }
  catch(err){ sendUnexpectedError(err, res) }
}

module.exports = middleware;
