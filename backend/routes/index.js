const express    = require('express'),
      router     = express.Router(),
      bcrypt     = require('bcrypt'),
      passport   = require('passport'),
      User       = require('../db/models').User;

// Register Logic
router.post('/register', async (req, res) => {
  const saltRounds = 14;
  const hash = await bcrypt.hash(req.body.password, saltRounds);

  /* Need Route Auth */
  User.create({ 
    username : req.body.username,
    email : req.body.email,
    hash,
    firstname : req.body.firstname || null,
    lastname : req.body.lastname || null,
  })
    .then( newUser => {
      res.send({ 
        registerSuccess : true,
        id : newUser.id
      });

      console.log(`New User Registered: `);
      console.log({
        id : newUser.id,
        username : newUser.username,
        createdAt : newUser.createdAt
      });
    })
    .catch( err => {
      res.send({ 
        registerSuccess : false,
        reason : err.message
      });

      console.error(err.message);
      console.error(req.body);
    });
});

// Login Logic
router.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {

    if(err){ 
      return res.send({
        loginSuccess : false,
        serverError : true,
        reason : err.message
      }); 
    }

    if(!user){ 
      return res.send({
        loginSuccess : false,
        serverError : false,
        reason : info.reason
      });
    }

    req.logIn(user, function(err){
      if(err){ 
        return res.send({
          loginSuccess : false,
          serverError : true,
          reason : err.message
        }); 
      }

      return res.send({
        loginSuccess : true,
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
