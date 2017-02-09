var mongoose = require("mongoose");
var SkiArea = require("./models/skiarea");
var Comment = require("./models/comment");

var seedData = [
    {
        name: "Wildcat Mt.",
        image: "data:image/jpeg;base64,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",
        description: "WINTER LIVES AT WILDCAT!"
    },
    {
        name: "Loon Mt.",
        image: "data:image/jpeg;base64,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",
        description: "New England's most accessible big-mountain skiing and riding features a 2,100-foot vertical drop and 61 trails across three peaks."
    },
    {
        name: "Bretton Woods Ski Resort",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSq7ehDkjqPQWzLfMpzD113Crasv1JzxWImNbMD8CxHqoJA175Y",
        description: "The bracing winter air. The expansive mountain vistas. The rush of flying down alpine trails and glades. The serenity of trekking across 100 kilometers of Nordic trails."
    }
];

function seedDB() {
    SkiArea.remove({}, function(err) {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Clean out database for seeding...");

        // add a few skiareas
        seedData.forEach(function(seed) {
            SkiArea.create(seed, function(err, skiarea) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Added a ski area " + skiarea.name);
                    // create a comment, init to default
                    commentData = {
                        text: "This place is great! POW POW!",
                        author: "Bob"
                    }
                    if (skiarea.name == "Loon Mt.") {
                        commentData = {
                            text: "Lots of varied terrain. Good snow making. Lots of fun!",
                            author: "Tony"
                        }
                    } else if (skiarea.name == "Bretton Woods Ski Resort") {
                        commentData = {
                            text:  "Best snow in New Hampshire!",
                            author: "Susan"
                        }
                    }
                    Comment.create(
                        commentData,
                        function(err, comment) {
                            if (err) {
                                console.log(err);
                            } else {
                                // associate with the ski area
                                skiarea.comments.push(comment);
                                skiarea.save();
                                console.log("created a new comment.");
                            }
                        });
                }
            });
        })
    });
}

module.exports = seedDB;

// Seed file for seeding the development