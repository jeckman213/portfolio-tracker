const
  express  = require('express'),
  router   = express.Router(),
  bcrypt   = require('bcrypt'),
  passport = require('passport'),
  { User } = require('../db/models'),
  { sendSuccess, sendExpectedError, sendUnexpectedError } = require('../services/responses');

// Register Logic
router.post('/register', async (req, res) => {
  try {
    const 
      saltRounds = 14,
      hash = await bcrypt.hash(req.body.password, saltRounds),
      { username, email, firstname, lastname, currency } = req.body,
      newUser = await User.create({ username, email, hash, firstname, lastname, currency }),
      registrationData = { id : newUser.id, username };

    console.log('New User Registered:', registrationData);
    sendSuccess(registrationData, res);
  }
  catch(err){
    /* Unable to register user, most likely picked a username/email already used by someone else */
    const error = err.errors ? err.errors[0] : null; // Report first error detected by Sequelize

    if(error && error.type === 'unique violation'){
      switch(error.path){
        case 'username':
          sendExpectedError('That username has already been taken.', res, 200);
        case 'email':
          sendExpectedError('That email has already been registered.', res, 200);
      }
    } 
    else { sendUnexpectedError(err, res); }
  }
});

// Login Logic
router.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    /* Sequelize or bcrypt threw an error */
    if(err){ sendUnexpectedError(err, res); }
    /* Either username DNE or passwords do not match */
    else if(!user){ sendExpectedError(info.failReason, 200); }
    /* A user was matched, now attempt to login... */
    else {
      req.logIn(user, (err) => {
        /* Passport error on login attempt */
        if(err){ sendUnexpectedError(err, res); }
        /* User logged in successfully, req.user now has user details */
        else { 
          const
            { id, username, currency } = req.user, 
            loginData = { id, username, currency };
          
          sendSuccess(loginData, res);
        }
      });
    }
  })(req, res, next);
});

router.get('/authenticate', (req, res) => {
  try {
    if(req.isAuthenticated()){
      const 
        { id, username, currency } = req.user,
        userData = { id, username, currency };

      sendSuccess(userData, res);
    }
    else{
      sendExpectedError('Session expired or never logged in', res, 200);
    }
  }
  catch(err){ sendUnexpectedError(err, res); }
});


router.get('/logout', (req, res) => {
  try {
    req.logout();
    sendSuccess(null, res);
  }
  catch(err){ sendUnexpectedError(err, res); }
});

module.exports = router;
