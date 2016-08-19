var movieDB = {
    movies: [
        {name: "The Hobbit", rating: 3, watched: true},
        {name: "Lord of the Rings", rating: 5, watched: true},
        {name: "Superman", rating: 4, watched: false},
    ]
};

movieDB.buildString = function(movie) {
    if (movie.watched) {
        seen = "seen";
    } else {
        seen = "not seen"
    }
    return "You have " + seen + " \"" + movie.name + "\" - " + movie.rating + " stars";
}

movieDB.movies.forEach(function(movie) {
    console.log(movieDB.buildString(movie));
});

function buildString(movie) {
    if (movie.watched) {
        seen = "seen";
    } else {
        seen = "not seen"
    }
    return "You have " + seen + " \"" + movie.name + "\" - " + movie.rating + " stars";
}