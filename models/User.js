const { DataTypes } = require('sequelize');
const { db } = require('../config');

const User = db.define('users', {
    movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    release_year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    author: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = User;