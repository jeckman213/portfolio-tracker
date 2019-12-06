const functions = {};

functions.sendSuccess = (data, res, status = null) => {
  if(status){ res.status(status); } // Else use default express response
  res.send({
    success : true,
    ...data
  });
};

functions.sendExpectedError = (failReason, res, status = 200) => {
  res.status(status);
  res.send({
    success : false,
    failExpected : true,
    failReason
  });
};

functions.sendUnexpectedError = (err, res, status = 500) => {
  console.error(err);
  res.status(status);
  res.send({
    success : false,
    failExpected : false,
    failReason : err.message
  });
};

module.exports = functions;
