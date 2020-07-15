const { Movie } = require('../models');

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const result = await Movie.findAll();
                    
            // res.send({
            //     result,
            // });
            res.render('pages/movies.ejs', {result})
        } catch (error) {
            res.send(error);
        }
    },
    getGenre: async (req, res) => {
        const { genre } = req.params;
        try {
            const result = await Movie.findAll({where: 
                {genre:genre}});

            // res.send(result);
            res.render('pages/detail.ejs',{result});
        } catch (error) {
            res.send(error);
        }
    },
  
   
};