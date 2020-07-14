const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getGenre,
} = require('./controller');

router.get('/', getAllUsers);
router.get('/:genre', getGenre);


module.exports = router;