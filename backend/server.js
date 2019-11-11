require('dotenv').config();

const 
  /* Import node modules */
  express    = require('express'),
  bodyParser = require('body-parser'),
  sessions   = require('client-sessions'),

  /* Import configurations */
  port     = process.env.PORT || 5000,
  db       = require('./db/models'),
  passport = require('./config/authentication'),

  /* Import routes */
  routes = {};

routes.portfolio = require('./routes/portfolio');
routes.asset     = require('./routes/asset');
routes.stock     = require('./routes/stock');
routes.user      = require('./routes/user');
routes.auth      = require('./routes/auth');
routes.dev       = require('./routes/dev');

const app = express();

/* Confirm connection with Postgres */
db.sequelize.authenticate()
  .then( () => console.log('Database connection successful.') )
  .catch( err => console.error('Unable to connect to database:', err) );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(sessions({
  cookieName : 'session',
  secret : process.env.SESSION_SECRET,
  duration : 1000 * 60 * 60 * 24,   /* miliseconds, so 1 day */
  // cookie : {
  //   path : '/app', // cookie only sent to reqests under '/app'
  //   httpOnly : true, // cookie not accessible from javascript
  //   secure : true
  // }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes.auth);
app.use('/api/stock', routes.stock);
app.use('/api/user', routes.user);
app.use('/api/user/:userId/portfolio', routes.portfolio);
app.use('/api/user/:userId/portfolio/:portfolioId/asset', routes.asset);
app.use('/api/test', routes.dev);

app.listen(port, console.log(`Listening on port ${port}`));
