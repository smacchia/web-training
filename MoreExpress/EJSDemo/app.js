var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// ROUTES
app.get("/", function(req, res) {
    // painful!
    //res.send("<h1>welcome to homepage</h1><h2>blah</h2>");
    res.render("home");
});

app.get("/garden/:plant", function(req, res) {
    var plant = req.params.plant;
    //res.send("Gardening with " + plant);
    // how to send an htmo file with this? Fill in
    // a templated html file, with variables into html
    res.render("garden", {plantVar: plant});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Veggie Gardening", author: "Susan"},
        {title: "Caring for shrub roses", author: "Sue"},
        {title: "Pest control in the vegetable garden", author: "Suzanne"}
    ];

    res.render("posts", {posts: posts});
});

// Tell Express to listen for requests (start server)
// on cloud9: process.env.PORT, process.env.IP
app.listen(3000, function() {
    console.log("server has started");
}); 