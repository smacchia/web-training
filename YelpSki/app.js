var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    Skiarea = require("./models/skiarea")
    seedDB = require("./seeds");

seedDB();

// Will make the cat_app db if it's not there already
mongoose.connect('mongodb://localhost:27017/yelp_camp');

app.use(bodyParser.urlencoded({extended: true}));
// This makes it so we don't have to pass "file.ejs" to
// res.render
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

// NEW route - show form to create a new skiarea
app.get("/skiareas/new", function(req,res) {
    res.render("new.ejs")
});

// INDEX route - show list of skiareas
app.get("/skiareas", function(req, res) {
    Skiarea.find({}, function(error, allskiareas) {
        if (error) {
            console.log(error);
        } else {
            // remember, first variable is the name, second is the data 
            // from the array
            res.render("index", {skiareas: allskiareas});
        }
    })
});

// CREATE - add a new skiarea to the database
// 
// NOTE: the get/post have the same url, but because one is a get
// and the other is a post, they are technically different. This is
// the REST convention.
app.post("/skiareas", function(req, res) {
    // Create the skiarea and save to the database
    Skiarea.create(
        {
            name: req.body.name, 
            image: req.body.image,
            description: req.body.description
        }, 
        function(error, skiarea) {
            if (error) {
                console.log("Problem creating skiarea: " + error);
            } else {
                // redirect back to skiareas page
                res.redirect("/skiareas"); // default is a get request
            }
        });
});

// SHOW route - must be after /new or this will ignore /new and 
// go here. Use id because it's unique.
app.get("/skiareas/:id", function(req, res) {
    Skiarea.findById(
        req.params.id, 
        function(error, foundSkiarea) {
            if (error) {
                console.log(error);
            } else {
                res.render("show", {skiarea: foundSkiarea});
            }
        });
})

app.listen(3000, function() {
    console.log("YelpCamp server started.");
});
