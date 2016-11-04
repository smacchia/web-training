var mongoose = require('mongoose');

// SCHEMA SETUP
var skiareaSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }] // array of posts references
});

// Schema model
module.exports = mongoose.model("Skiarea", skiareaSchema);

