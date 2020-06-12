const Sequelize = require('sequelize');

function db() {
  //postgres://<db_user>:<db_password>@127.0.0.1:49910/dev_db
  return new Sequelize('postgres://postgres:todobien@localhost:5432/ecommerce', {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });
}

module.exports = db;
