require('dotenv').config();

const config = {
  development : {
    username : process.env.DEV_DB_USER='postgres',
    password : process.env.DEV_DB_PASS='a',
    database : process.env.DEV_DB_NAME='Blank',
    host : process.env.DEV_DB_HOST='localhost',
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
    use_env_variable : "DATABASE_URL"
  }
}

module.exports = config;
