 const express = require('express');
const router = express.Router();

const {
    getAllMovies,
    getMovieByGenre,
    addMovie,
} = require('./controller');

router.get('/', getAllMovies);
router.get('/:genre', getMovieByGenre)
router.post('/upload', addMovie)
module.exports = router;