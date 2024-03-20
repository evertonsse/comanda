// config.js

require('dotenv').config();

const config = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  secret : process.env.SECRET
};

module.exports = config;
