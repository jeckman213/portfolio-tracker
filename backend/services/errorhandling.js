const functions = {};

functions.expectedError = (failReason, res, status) => {
  res.status(status);
  return {
    success : false,
    failExpected : true,
    failReason
  }
};

functions.unexpectedError = (err, res) => {
  console.error(err);
  res.status(500);
  return {
    success : false,
    failExpected : false,
    failReason : err.message
  }
};

module.exports = functions;
