 const { DataTypes } = require('sequelize');
const { db } = require('../config');

const Movies = db.define('movies', {
    movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
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
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
},{
    timestamps:false
});

module.exports = Movies;