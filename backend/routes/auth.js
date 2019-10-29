const express    = require('express'),
      router     = express.Router(),
      bcrypt     = require('bcrypt'),
      passport   = require('passport'),
      User       = require('../db/models').User;

// Register Logic
router.post('/register', async (req, res) => {
  const saltRounds = 14;
  const hash = await bcrypt.hash(req.body.password, saltRounds);
  var response;

  console.log('New registration:', req.body);

  /* Need route authentication so accounts cannot be created from postman */
  User.create({ 
    username : req.body.username,
    email : req.body.email,
    hash,
    firstname : req.body.firstname || null,
    lastname : req.body.lastname || null,
  })
    /* New user successfully registered */
    .then( newUser => {
      const { id, username, createdAt } = newUser;

      console.log('New User Registered:', { id, username, createdAt });

      response = {
        success : true,
        id
      };
    })
    /* Unable to register user, most likely picked a username/email already used by someone else */
    .catch( err => {
      console.log('Caught error on create:', err);
      const error = err && err.errors[0]; // Report first error detected by Sequelize
      var success = false,
          failExpected, failReason;

      if(error.type === 'unique violation'){
        switch(error.path){
          case 'username':
            failExpected = true;
            failReason = 'That username has already been taken.';
            break;
          case 'email':
            failExpected = true
            failReason = 'That email has already been registered.';
            break;
          default:
            console.error('Sequelize registration error:', err.message);
            failExpected = false;
            failReason = err.message;
            break;
        }
      }

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
router.post('/authenticate', (req, res, next) => {
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

      /* Matched user logged in successfully, return user details to front end */
      return res.send({
        success : true,
        user : {
          username : user.username,
          email : user.email,
          firstname : user.firstname,
          lastname : user.lastname
        }
      });

    });
  })(req, res, next);
});

module.exports = router;
