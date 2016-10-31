var express = require("express");
var app = express();

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm6.staticflickr.com/5335/14146547013_4f2a6aed8a.jpg"},
    {name: "Granite Hill", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"}
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
