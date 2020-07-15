const express = require('express');
const router = express.Router();

const {
    updateMovies,
    deleteMovie,
} = require('./controller');

router.put('/:id', updateMovies);
router.delete('/:id', deleteMovie);


module.exports = router;