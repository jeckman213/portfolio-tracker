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
      /* No username match */
      if(!user){
        return done(null, false, { failReason : 'Incorrect username.' });
      }
      
      bcrypt.compare(password, user.hash)
        .then( match => {
          if(match){
            return done(null, user);
          }
          /* Password hash does not match */
          else{
            return done(null, false, { failReason : 'Incorrect password.' });
          }
        })
        /* Unexpected bcrypt error */
        .catch( err => {
          console.error('bcrypt compare error:', err.message);
          return done(err);
        });
    })
    /* Unexpected Sequelize error */
    .catch( err => {
      console.error('Sequelize username query (auth) error:', err.message);
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
