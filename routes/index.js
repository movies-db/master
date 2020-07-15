 const express = require('express');
const router = express.Router();

const {
    getAllMovies,
    getMovieByGenre,
} = require('./controller');

router.get('/', getAllMovies);
router.get('/:genre', getMovieByGenre)

module.exports = router;