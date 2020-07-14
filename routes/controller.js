const { Movie } = require('../models');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const result = await Movie.findAll();
                    
            res.send({
                result,
            });
        } catch (error) {
            res.send(error);
        }
    },
    getGenre: async (req, res) => {
        const { genre } = req.params;
        try {
            const result = await Movie.findAll({where: {genre:genre}});

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
};