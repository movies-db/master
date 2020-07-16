const { Movie } = require('../models');

module.exports = {
    updateMovies: async (req, res) => {
        const {movie_id} = req.params
        const {title, description, release_year, genre, author} = req.body
        try {
            const results = await Movie.update({
                title:title,
                description: description,
                release_year: release_year,
                genre: genre,
                author: author
            }, {where:{
                movie_id:movie_id
            }});

            res.send({
                message:'data berhasil di update',
                result:results,
            })
        } catch (error) {
            res.send(error);
        }
    },
    deleteMovie: async (req, res) => {
        const { id } = req.params;
        try {
            const results = await Movie.destroy({where:{movie_id:id}});

            res.send({
                message: `Delete movie berhasil`,
                result: results,
            });
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
    
};