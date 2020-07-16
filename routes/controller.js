const { Movies } = require("../models");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const result = await Movies.findAll();

      res.render("pages/movies.ejs", { result });
    } catch (error) {
      res.send(error);
    }
  },

  getMovieByGenre: async (req, res) => {
    const { genre } = req.params;
    try {
      const result = await Movies.findAll({
        where: { genre: genre },
      });

      res.render("pages/detail.ejs", { result });
    } catch (error) {
      res.send(error);
    }
  },
  addMovie: async (req, res) => {
    const { title, description, genre, release_year, author } = req.body;

    try {
      const result = await Movies.create({
        title,
        description,
        genre,
        release_year,
        author,
      });
      res.send({
        message: `Post data success`,
        result: result,
      });
    } catch (error) {
      res.send(error);
    }
  },
  updateMovies: async (req, res) => {
    const { id } = req.params;
    const { title, description, release_year, genre, author } = req.body;
    try {
      const results = await Movies.update(
        {
          title: title,
          description: description,
          release_year: release_year,
          genre: genre,
          author: author,
        },
        {
          where: {
            movie_id: id,
          },
        }
      );

      res.send({
        message: "data berhasil di update",
        result: results,
      });
    } catch (error) {
      res.send(error);
    }
  },
  deleteMovie: async (req, res) => {
    const { id } = req.params;
    try {
      const results = await Movies.destroy({ where: { movie_id: id } });

      res.send({
        message: `Delete movie berhasil`,
        result: results,
      });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
};
