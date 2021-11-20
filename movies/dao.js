const model = require('./model');
const findAllMovies = () =>
    model.find();

const deleteMovie = (id) =>
    model.deleteOne({_id: id});

const createMovie = (movie) =>
    model.create(movie);

const updateMovie = (id, movie) =>
    model.updateOne({_id: id},
        {$set: movie});

const findMovieById = (id) =>
    model.findById(id);

module.exports = {
    findAllMovies,
    deleteMovie,
    createMovie,
    updateMovie,
    findMovieById
};
