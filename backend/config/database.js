const Sequelize = require('sequelize'),
      db = new Sequelize(process.env.DB_URI, {
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      });

module.exports = db;