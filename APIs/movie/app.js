var express = require("express");
var app = express();

var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res) {
    // NOTE: req.query.search matches the ejs input template
    // name of 'search'
    var url = "http://omdbapi.com/?s=" + req.query.search;
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            // res.send(results["Search"][2]["Title"]);
            res.render("results", {data: data});
        }
    });
});

app.listen(3000, function() {
    console.log("movie app started");
});
