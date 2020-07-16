const { DataTypes } = require('sequelize');
const { db } = require('../config');

const Movie = db.define('movies', {
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
},{
    timestamps:false
});

module.exports = Movie;