var express = require("express");
var app = express();

var campgrounds = [
    {name: "Salmon Creek", image: "http://photosforclass.com/download/7626464792"},
    {name: "Granite Hill", image: "http://photosforclass.com/download/2182093741"},
    {name: "Mountain Goat's Rest", image: "http://photosforclass.com/download/7842069486"}
];

// This makes it so we don't have to pass "file.ejs" to
// res.render
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    // remember, first variable is the name, second is the data from the array
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, function() {
    console.log("YelpCamp server started.");
});
