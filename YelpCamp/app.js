var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose');

// Will make the cat_app db if it's not there already
mongoose.connect('mongodb://localhost:27017/yelp_camp');

app.use(bodyParser.urlencoded({extended: true}));
// This makes it so we don't have to pass "file.ejs" to
// res.render
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// Schema model
var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", function(req, res) {
    res.render("landing");
});

// NEW route - show form to create a new campground
app.get("/campgrounds/new", function(req,res) {
    res.render("new.ejs")
});

// INDEX route - show list of campgrounds
app.get("/campgrounds", function(req, res) {
    // remember, first variable is the name, second is the data from the array
    // res.render("campgrounds", {campgrounds: campgrounds});
    Campground.find({}, function(error, allCampgrounds) {
        if (error) {
            console.log(error);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    })
});

// CREATE - add a new campground to the database
// 
// NOTE: the get/post have the same url, but because one is a get
// and the other is a post, they are technically different. This is
// the REST convention.
app.post("/campgrounds", function(req, res) {
    // Create the campground and save to the database
    Campground.create(
        {
            name: req.body.name, 
            image: req.body.image
        }, 
        function(error, campground) {
            if (error) {
                console.log("Problem creating campground: " + error);
            } else {
                // redirect back to campgrounds page
                res.redirect("/campgrounds"); // default is a get request
            }
        });
});

// SHOW route - must be after /new or this will ignore /new and 
// go here. Use id because it's unique.
app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(
        req.params.id, 
        function(error, foundCampground) {
            if (error) {
                console.log(error);
            } else {
                res.render("show", {campground: foundCampground});
            }
        });
})

app.listen(3000, function() {
    console.log("YelpCamp server started.");
});
