const { Movies } = require('../models');

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const result = await Movies.findAll();
            // res.send({
            //     result,
            // });
            res.render('pages/movies.ejs', {result})
        } catch (error) {
            res.send(error);
        }
    },

};