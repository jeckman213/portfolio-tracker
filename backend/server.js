require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser'),
      sessions = require('client-sessions'),

      port = process.env.PORT || 5000,
      db = require('./db/models'),
      passport = require('./config/authentication'),

      devRoutes = require('./routes/dev'),
      indexRoutes = require('./routes/index');

/* Confirm connection with Postgres */
db.sequelize.authenticate()
  .then( () => {
    console.log('Connection has been established successfully.');
    app.use(sessions({
      cookieName : 'session',
      secret : process.env.SESSION_SECRET,
      duration : 60 * 60 * 1000   /* miliseconds, so 1 hour */
    }))
  })
  .catch( err => console.error('Unable to connect to the database:', err) );

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/testapi", devRoutes);
app.use("/", indexRoutes);

app.listen(port, console.log(`Listening on port ${port}`));
