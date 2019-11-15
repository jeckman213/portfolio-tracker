const
  express    = require('express'),
  router     = express.Router(),
  bcrypt     = require('bcrypt'),
  passport   = require('passport'),
  User       = require('../db/models').User;

// Register Logic
router.post('/register', async (req, res) => {
  const saltRounds = 14;
  const hash = await bcrypt.hash(req.body.password, saltRounds);
  var response;

  /* Need route authentication so accounts cannot be created from Postman */
  User.create({ 
    username : req.body.username,
    email : req.body.email,
    hash,
    firstname : req.body.firstname || null,
    lastname : req.body.lastname || null,
    currency : req.body.currency
  })
    /* New user successfully registered */
    .then( newUser => {
      const { id, username, createdAt } = newUser;
      console.log('New User Registered:', { id, username, createdAt });
      
      response = { success : true };
    })
    /* Unable to register user, most likely picked a username/email already used by someone else */
    .catch( err => {
      console.log('Caught error on create:', err);
      const error = err.errors ? err.errors[0] : null; // Report first error detected by Sequelize
      var success = false,
          failExpected = false, 
          failReason = err.message;

      if(error && error.type === 'unique violation'){
        switch(error.path){
          case 'username':
            failExpected = true;
            failReason = 'That username has already been taken.';
            break;
          case 'email':
            failExpected = true
            failReason = 'That email has already been registered.';
            break;
        }
      } else { console.error('Sequelize registration error:', err.message); }

      response = {
        success,
        failExpected,
        failReason
      }
    })
    .finally( () => {
      res.send(response);
    });
});

// Login Logic
router.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    /* Unexpected, but either Sequelize or bcrypt threw an error (already logged) */
    if(err){ 
      return res.send({
        success : false,
        failExpected : false,
        failReason : err.message
      }); 
    }
    
    /* Expected, either username DNE or passwords do not match */
    if(!user){ 
      return res.send({
        success : false,
        failExpected : true,
        failReason : info.failReason
      });
    }
    
    /* A user was matched, now attempt to login... */
    req.logIn(user, (err) => {
      /* Unexpected Passport error on login attempt */
      if(err){
        console.error('Passport login error:', err);
        return res.send({
          success : false,
          failExpected : false,
          failReason : err.message
        }); 
      }

      /* User logged in successfully, req.user now has user details */
      return res.send({
        success : true,
        username : user.username
      });

    });
  })(req, res, next);
});

router.get('/authenticate', (req, res) => {
  const success = req.isAuthenticated(),
        username = req.user ? req.user.username : null;

  res.send({ success, username });
});

router.get('/logout', (req, res) => {
  try {
    req.logout();
    res.send({ success : true });
  }
  catch(err){
    res.send({ 
      success : false, 
      failExpected : false,
      failReason : err.message 
    });
  }
});

module.exports = router;
