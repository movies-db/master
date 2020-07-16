const express = require('express');
const router = express.Router();

const {
    updateMovies,
    deleteMovie,
    getAllMovies,
} = require('./controller');

router.put('/:id', updateMovies);
router.delete('/:id', deleteMovie);
router.get('/', getAllMovies);

module.exports = router;