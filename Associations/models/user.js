var mongoose = require("mongoose");

// USER - email, name
var userSchema = new mongoose.Schema( {
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }] // array of posts references
});

module.exports = mongoose.model("User", userSchema);
// can return a more complext object like:
// module.exports = { field1: "value", ...};
