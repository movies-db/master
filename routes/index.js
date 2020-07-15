const express = require('express');
const router = express.Router();

const {
    getAllMovies,
    getGenre,
    postMovies,
} = require('./controller');

router.get('/', getAllMovies);
router.get('/:genre', getGenre);
router.get('/', postMovies)


module.exports = router;