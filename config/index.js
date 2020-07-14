const db = require('./database');
const {
    PORT,
    MYSQL_HOST,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
} = require('./environtment');

module.exports = {
    db,
    PORT,
    MYSQL_PASSWORD,
    MYSQL_HOST,
    MYSQL_DATABASE,
    MYSQL_USER,
};