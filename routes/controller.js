const { Movies } = require('../models');

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const results = await Movies.findAll();
            res.send({
                result,
            });
        } catch (error) {
            res.send(error);
        }
    },

};