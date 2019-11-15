require('dotenv').config();

const 
  /* Import node modules */
  express    = require('./routes/node_modules/express'),
  cors       = require('cors'),
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

/* Confirm connection with Postgres */
db.sequelize.authenticate()
  .then( () => console.log('Database connection successful.') )
  .catch( err => console.error('Unable to connect to database:', err) );

/* Configure CORS */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.options('http://stark-wave-75762.herokuapp.com/', cors());

/* Configure HTTP body parsing */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Configure session cookies */
app.use(sessions({
  cookieName : 'session',
  secret : 'ladkfjdsa;lfj',
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

/* Configure routes */
app.use('/api', routes.auth);
app.use('/api/stock', routes.stock);
app.use('/api/alpha', routes.alpha);
app.use('/api/user', routes.user);
app.use('/api/user/:userId/portfolio', routes.portfolio);
app.use('/api/user/:userId/portfolio/:portfolioId/asset', routes.asset);
app.use('/api/dev', routes.dev);

// Serves the static files from the React App
if(process.env.NODE_ENV == 'production'){
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '../frontend/build/index.html')); });
}

app.listen(port, console.log(`Listening on port ${port}`));
