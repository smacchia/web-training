var express = require("express");
var app = express(); // instantiate the express app.

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
   var sound = " nothing";
   if (req.params.animal == "pig") {
       sound = "Oink";
   } else if (req.params.animal == "cow") {
       sound = "Moo";
   } else if (req.params.animal == "dog") {
       sound = "Woof Woof!";
   }
   res.send("The " + req.params.animal + " says '" + sound + "'");
});

app.get("/repeat/:string/:num", function(req, res) {
    var num = parseInt(req.params.num, 10);
    if (isNaN(num)) {
        res.send(req.params.num + " is not a number! Try Again!");
        return;
    }
    var stringToSend = "";
    for (var i = 0; i < num; i++) {
        stringToSend += req.params.string + " ";
    }
    res.send(stringToSend);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

// Tell Express to listen for requests (start server)
// on cloud9: process.env.PORT, process.env.IP
app.listen(3000, function() {
    console.log("server has started");
}); 