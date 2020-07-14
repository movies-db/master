const { Sequelize } = require('sequelize');

const {
    MYSQL_HOST,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
} = require('./environtment');

const db = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect: 'mysql',
});

db.authenticate()
    .then(() => console.log(true))
    .catch((error) => console.log(false));

module.exports = db;