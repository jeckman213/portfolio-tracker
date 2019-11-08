require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser'),
      sessions = require('client-sessions'),
      path = require('path');

      db = require('./db/models'),
      passport = require('./config/authentication'),

      stockRoutes = require('./routes/stock')
      devRoutes = require('./routes/dev'),
      authRoutes = require('./routes/auth');
      indexRoutes = require('./routes/index');
      alphaRoutes = require('./routes/alpha');

const app = express();

      

/* Confirm connection with Postgres */
db.sequelize.authenticate()
  .then( () => console.log('Database connection successful.') )
  .catch( err => console.error('Unable to connect to database:', err) );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(sessions({
  cookieName : 'session',
  secret : "ladkfjdsa;lfj",
  duration : 1000 * 60 * 60 * 24,   /* miliseconds, so 1 day */
  // cookie : {
  //   path : '/app', // cookie only sent to reqests under '/app'
  //   httpOnly : true, // cookie not accessible from javascript
  //   secure : true
  // }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/stock", stockRoutes);
app.use("/api/test", devRoutes);
app.use("/api", authRoutes);
app.use("/api/alpha", alphaRoutes);

// Serves the static files from the React App
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
