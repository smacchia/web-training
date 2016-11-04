var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// USER - email, name
var userSchema = new mongoose.Schema( {
    email: String,
    name: String,
    posts: [postSchema] // array of posts, name of schema, not model
});

var User = mongoose.model("User", userSchema);

var post = mongoose.model("Post", postSchema);

// var newUser = new User({
//     email: "susan@smacchia.net", 
//     name: "Susan Macchia"});

// newUser.posts.push({
//     title: "Time to Clean Up the Veggie Bed!",
//     content: "Mid fall is the time to remove warm weather veggie plants that are done for the season."
// });

// newUser.save(function(err, user) {
//     if (err) {
//         console.log("UNABLE TO SAVE USER: " + err);
//     } else {
//         console.log(user);
//     }
// });


// var newPost = new post({
//     title: "Apples...", 
//     content: "Crunchy and delicious"});

// newPost.save(function(err, post) {
//     if (err) {
//         console.log("UNABLE TO SAVE POST: " + err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "Susan Macchia"}, function(err, user) {
    if (err) {
        console.log(err);
    } else if (user ===  null) {
        console.log("user not found");
    } else {
        user.posts.push({
            title: "Planting Garlic",
            content: "Mid fall is the time to plant garlic in the Northeast."
        });
        user.save(function(err, user) {
            if (err) {
                console.log("UNABLE TO SAVE USER: " + err);
            } else {
                console.log(user);
            }
        });
    }
});
