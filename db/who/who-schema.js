const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    avatarIcon: String,
    userName: String,
    handle: String,
}, {collection: "who"});
module.exports = schema;