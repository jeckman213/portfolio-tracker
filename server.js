require('dotenv').config();

<<<<<<< HEAD:backend/server.js
const 
  /* Import node modules */
  express    = require('express'),
  bodyParser = require('body-parser'),
  sessions   = require('client-sessions'),

  /* Import local configurations */
  port     = process.env.PORT || 5000,
  db       = require('./db/models'),
  passport = require('./config/authentication'),

  /* Import routes */
  routes = {};

routes.portfolio = require('./routes/portfolio');
routes.asset     = require('./routes/asset');
routes.stock     = require('./routes/stock');
routes.alpha     = require('./routes/alpha');
routes.user      = require('./routes/user');
routes.auth      = require('./routes/auth');
routes.dev       = require('./routes/dev');

const app = express();

      
=======
const express = require('express'),
      bodyParser = require('body-parser'),
      sessions = require('client-sessions'),
      path = require('path');

      db = require('./db/models'),
      passport = require('./config/authentication'),

      stockRoutes = require('./routes/stock')
      devRoutes = require('./routes/dev'),
      authRoutes = require('./routes/auth');
      alphaRoutes = require('./routes/alpha');

const app = express();
>>>>>>> d54bab32f68410f186557ecb2c122e4b63092b4c:server.js

/* Confirm connection with Postgres */
db.sequelize.authenticate()
  .then( () => console.log('Database connection successful.') )
  .catch( err => console.error('Unable to connect to database:', err) );

/* Configure HTTP body parsing */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Configure session cookies */
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

/* Configure passport authentication */
app.use(passport.initialize());
app.use(passport.session());

<<<<<<< HEAD:backend/server.js
/* Configure routes */
app.use('/api', routes.auth);
app.use('/api/stock', routes.stock);
app.use("/api/alpha", routes.alpha);
app.use('/api/user', routes.user);
app.use('/api/user/:userId/portfolio', routes.portfolio);
app.use('/api/user/:userId/portfolio/:portfolioId/asset', routes.asset);
app.use('/api/dev', routes.dev);

app.listen(port, console.log(`Listening on port ${port}`));
=======
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
>>>>>>> d54bab32f68410f186557ecb2c122e4b63092b4c:server.js
