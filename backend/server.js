require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser'),
      sessions = require('client-sessions'),

      port = process.env.PORT || 5000,
      db = require('./db/models'),
      passport = require('./config/authentication'),

      stockRoutes = require('./routes/stock')
      devRoutes = require('./routes/dev'),
      authRoutes = require('./routes/auth');

const app = express();

/* Confirm connection with Postgres */
db.sequelize.authenticate()
  .then( () => {
    console.log('Connection has been established successfully.');
    })

    // app.use( (req, res, next) => {
    //   if (req.session.seenyou) {
    //     res.setHeader('X-Seen-You', 'true');
    //   } else {
    //     // setting a property will automatically cause a Set-Cookie response
    //     // to be sent
    //     req.session.seenyou = true;
    //     res.setHeader('X-Seen-You', 'false');
    //   }
    // });
  .catch( err => console.error('Unable to connect to the database:', err) );

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

app.use("/api/stock", stockRoutes);
app.use("/api/test", devRoutes);
app.use("/api", authRoutes);

app.listen(port, console.log(`Listening on port ${port}`));
