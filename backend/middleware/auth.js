const
  { sendExpectedError } = require('../services/responses'),
  middleware = {};

// Checks if a user is authenticated by passport
middleware.isAuthenticated = (req, res, next) => {
  req.isAuthenticated() 
    ? next()
    : sendExpectedError('User not authenticated', res, 200);
};

// Checks if the user is authenticated by passport
// and is authorized to access the resource specified
// by the endpoint's params (userId, portfolioId, assetId)
middleware.isAuthorized = (req, res, next) => {
  if(req.isAuthenticated()){
    const userId = req.params.userId;

    req.user.id == userId 
      ? next()
      : sendExpectedError('Unauthorized access', res, 403);
  }
  else { sendExpectedError('User not authenticated', res, 401); }
}

module.exports = middleware;
