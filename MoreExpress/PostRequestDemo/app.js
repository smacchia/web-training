var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// go to body parser docs to find out what this does.
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.disable('etag');

// ROUTES
var friends = ["Laurie", "Don", "Kim", "Dave"]; // beter to use a db

app.get("/", function(req, res) {
    res.render("home");
});

// list of friends and can add new friends
app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

// Can test with postman
app.post("/add", function(req, res) {
    // 'newfiend' is the name= value in the input
    friends.push(req.body.newfriend);
    // Causes an error and doesn't seem to go to /friends
    res.redirect("/friends");
});

app.listen("3000", function() {
    console.log("server started")
});