var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
// This makes it so we don't have to pass "file.ejs" to
// res.render
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm6.staticflickr.com/5335/14146547013_4f2a6aed8a.jpg"},
    {name: "Granite Hill", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"}
];

app.get("/", function(req, res) {
    res.render("landing");
});

// */new is another REST convention
app.get("/campgrounds/new", function(req,res) {
    res.render("new.ejs")
});

app.get("/campgrounds", function(req, res) {
    // remember, first variable is the name, second is the data from the array
    res.render("campgrounds", {campgrounds: campgrounds});
});

// NOTE: the get/post have the same url, but because one is a get
// and the other is a post, they are technically different. This is
// the REST convention.
app.post("/campgrounds", function(req, res) {
    // get data from form and add to array
    var name = req.body.name;
    var image = req.body.image;
    campgrounds.push({name: name, image: image});

    // redirect back to campgrounds page
    res.redirect("/campgrounds"); // default is a get request
});

app.listen(3000, function() {
    console.log("YelpCamp server started.");
});
