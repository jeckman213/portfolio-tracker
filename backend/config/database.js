require('dotenv').config();

const config = {
  development : {
    username : process.env.DEV_DB_USER,
    password : process.env.DEV_DB_PASS,
    database : process.env.DEV_DB_NAME,
    host : process.env.DEV_DB_HOST,
    dialect : 'postgres'
  },
  test : {
    username : null,
    password : null,
    database : null,
    host : null,
    dialect : 'postgres'
  },
  production : {
    username : process.env.PROD_DB_USER,
    password : process.env.PROD_DB_PASS,
    database : process.env.PROD_DB_NAME,
    host : process.env.PROD_DB_HOST,
    dialect : 'postgres'
  }
}

module.exports = config;
