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
