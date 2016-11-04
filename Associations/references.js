var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Macchia"
// })

// Post.create(
//     {
//         title: "How to cook burgers part 5",
//         content: "sadfasf sdfasf sdfasf"
//     }, 
//     function(err, post) {
//         User.findOne(
//             {email: "bob@gmail.com"}, 
//             function(err, foundUser) {
//                 if (err) {
//                     console.log(err);
//                 } else if (foundUser ===null) {
//                     console.log("Can't find user");
//                 } else {
//                     foundUser.posts.push(post);
//                     foundUser.save(function(err, data) {
//                         if (err) {
//                             console.log(err);
//                         } else {
//                             console.log(data);
//                         }
//                     });
//                     console.log(post);
//                 }
//             });
//     }
// );

User.findOne(
    {email: "bob@gmail.com"}).populate("posts").exec(function(err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundUser);
        }
    });