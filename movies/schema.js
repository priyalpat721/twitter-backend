const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title: String,
    rating: Number
}, {collection: 'movies'});
module.exports = schema;