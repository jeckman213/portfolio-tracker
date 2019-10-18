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
    res.send({ registerSuccess : true })

    console.log(`New User Registered: `)
    console.log({
      id : newUser.id,
      username : newUser.username,
      createdAt : newUser.createdAt
    });
  })
  .catch( err => {
    res.send({ registerSuccess : false })

    console.error(err.message) 
  });
});

// Login Logic
router.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    if(err){ return next(err); }
    if(!user){ 
      return res.send({
        loginSuccess : false,
        info
      });
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
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
