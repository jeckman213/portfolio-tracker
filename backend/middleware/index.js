const
  { expectedError, unexpectedError } = require('../services/errorhandling'),
  portfolioMiddleware = require('./portfolio'),
  assetMiddleware = require('./asset'),
  middleware = {...portfolioMiddleware, ...assetMiddleware};

// Checks if a user is authenticated by passport
middleware.isAuthenticated = (req, res, next) => {
  req.isAuthenticated() 
    ? next()
    : res.send(expectedError('User not authenticated', res, 401));
};

// middleware.isNotAuthenticated = (req, res, next) => {

// };

// Checks if the user is authenticated by passport
// and is authorized to access the resource specified
// by the endpoint's params (userId, portfolioId, assetId)
middleware.isAuthorized = (req, res, next) => {
  if(req.isAuthenticated()){
    const { userId } = req.params;

    req.user.id === userId 
      ? next()
      : res.send(expectedError('Unauthorized access', res, 403));
  }
  else { res.send(expectedError('User not authenticated', res, 401)); }
}

module.exports = middleware;
