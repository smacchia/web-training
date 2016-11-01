var mongoose = require('mongoose');

// Will make the cat_app db if it's not there already
mongoose.connect('mongodb://localhost:27017/cat_app');

// define what a cat looks like, for javascript. Doesn't force 
// structure on the DB, but for our code here.
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// Create a model from the schema, and can now use
// Cat to modify the database. First param is the 
// singular version of the collection (db.cats)
var Cat = mongoose.model("Cat", catSchema);

// add new cat
var cat = new Cat({
    name: "Spot",
    age: 3,
    temperament: "Afraid"
});

// cat.save(function(error, savedCat) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Saved cat:");
//         console.log(savedCat);
//     }
// });

// // get all cats
// Cat.find({}, function(error, cats) {
//     if (error) {
//         console.log("Error finding cats: " + error);
//     } else {
//         console.log("ALL CATS");
//         console.log(cats);
//     }
// })
// 

// New and save at once
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "bland"
}, function(error, cat) {
    if (error) {
        console.log("Error saving cat: " + error);
    } else {
        console.log(cat);
    }
})