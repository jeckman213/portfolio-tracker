const passport = require('passport'),
      LocalStrategy = require('passport-local'),
      bcrypt = require('bcrypt'),
      User = require('../db/models').User;

passport.use(new LocalStrategy( (username, password, done) => {
  User.findOne({ 
    where : { username },
    attributes : ['id', 'username', 'email', 'hash', 'firstname', 'lastname']
  }) 
    .then( user => {
      if(!user){
        return done(null, false, { message: 'Incorrect username.' });
      }
      
      bcrypt.compare(password, user.hash)
        .then( match => {
          if(match){
            return done(null, user);
          }
          else{
            return done(null, false, { message: 'Incorrect password.' });
          }
        })
        .catch( err => {
          console.err(err.message);
          return done(err);
        });
    })
    .catch( err => {
      console.err(err.message);
      return done(err);
    });
}));

passport.serializeUser( (user, done) => {
  done(null, user.id);
});

passport.deserializeUser( (id, done) => {
  User.findByPk(id)
    .then( user => done(null, user) )
    .catch( err => done(err, null) );
});

module.exports = passport;
