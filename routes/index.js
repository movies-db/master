const express = require('express');
const router = express.Router();

const {
    getAllMovies,
    getMovieByGenre,
    updateMovies,
    deleteMovie,
    addMovie,
} = require('./controller');

router.get('/', getAllMovies);
router.get('/:genre', getMovieByGenre)
router.post('/upload', addMovie)
router.put('/:id', updateMovies);
router.delete('/:id', deleteMovie);

module.exports = router;