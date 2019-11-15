<<<<<<< HEAD:backend/middleware/index.js
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
=======
const middleware = {};

middleware.isAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()){ return next(); }
  else {
    res.status(401);
    res.send({ 
      success : false, 
      failExpected : false,
      failReason : 'Unauthorized access'
    });
  }
};

// middleware.isNotAuthenticated = (req, res, next) => {

// };

// middleware.ownsPortfolio = (req, res, next) => {

// }
>>>>>>> d54bab32f68410f186557ecb2c122e4b63092b4c:middleware/index.js
