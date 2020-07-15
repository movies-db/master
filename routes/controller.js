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
    getMovieByGenre: async (req, res) => {
        const { genre } = req.body;
        try {
          const result = await Movies.findOne({
            where: { genre: genre },
          });
    
          res.send({ result });
        } catch (error) {
          res.send(error);
        }
      },
};