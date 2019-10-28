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
      response = {
        registrationSuccess : true,
        id : newUser.id
      };

      console.log('New User Registered:', { id, username, createdAt });
    })
    /* Unable to register user, most likely picked a username/email already used by someone else */
    .catch( err => {
      const error = err.errors[0];
      var registrationSuccess = false,
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
            failExpected = false;
            failReason = err.message;
            console.log('Unexpected Registrations Error:', failReason)
            break;
        }
      }

      response = {
        registrationSuccess,
        failExpected,
        failReason
      }
    })
    .finally( () => {
      res.send(response);
    })
});

// Login Logic
router.post('/authenticate', (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {

    if(err){ 
      return res.send({
        authenticationSuccess : false,
        serverError : true,
        reason : err.message
      }); 
    }

    if(!user){ 
      return res.send({
        authenticationSuccess : false,
        serverError : false,
        reason : info.reason
      });
    }

    req.logIn(user, function(err){
      if(err){ 
        return res.send({
          authenticationSuccess : false,
          serverError : true,
          reason : err.message
        }); 
      }

      return res.send({
        authenticationSuccess : true,
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
