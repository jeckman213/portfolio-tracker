const
  authMiddleware = require('./auth'),
  portfolioMiddleware = require('./portfolio'),
  assetMiddleware = require('./asset'),
  middleware = {...authMiddleware, ...portfolioMiddleware, ...assetMiddleware};

module.exports = middleware;
