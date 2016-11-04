var mongoose = require('mongoose');

// SCHEMA SETUP
var skiareaSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// Schema model
module.exports = mongoose.model("Skiarea", skiareaSchema);

