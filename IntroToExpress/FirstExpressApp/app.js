var express = require("express");
var app = express(); // instantiate the express app.

// ROUTES - ORDER MATTERS!
// "/" -> "Hi!"
app.get("/", function(req, res) {
    res.send("Hi!");
});

// "/bye" -> "good bye"
app.get("/bye", function(req, res) {
    res.send("good bye");
});

// "/flower" -> "water me!"
app.get("/flower", function(req, res) {
    res.send("water me!");
});

// route parameters - here : prefixes a param that will ge substituted
// Not a wildcard.
app.get("/r/:category", function(req, res) {
    // the request object has the param values
    res.send("Welcome to a the " + req.params.category + " category!");
});

// example with multiple params - id and title are now
// params
app.get("/r/:category/comments/:id/:title/", function(req, res) {
    // the request object has the param values
    res.send("Welcome to " + req.params.category + " comments for " + req.params.title);
});

// Catch-all route; useful for graceful error handling
// Order matters; this should be last and after all the
// other specific routes.
app.get("*", function(req, res) {
    res.send("STAR");
});

// Tell Express to listen for requests (start server)
// on cloud9: process.env.PORT, process.env.IP
app.listen(3000, function() {
    console.log("server has started");
}); 