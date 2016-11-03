var express = require("express"),
    app = express(),
    sanitizer = require("express-sanitizer"),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    methodOverride = require("method-override");

mongoose.connect('mongodb://localhost:27017/restful_blog');

// This makes it so we don't have to pass "file.ejs" to
// res.render
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(sanitizer()); // MUST be after body parser
app.use(methodOverride("_method"));

// Schema
var blogSchema = mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

// Mongoose Model config
var Blog = mongoose.model("Blog", blogSchema);

// RESTful ROUTES

// ROOT page - redirects to index page
app.get("/", function(req, res) {
	res.redirect("/blogs")
});

// INDEX
app.get("/blogs", function(req, res) {
	Blog.find({}, function(error, blogs) {
		if (error) {
			console.log(error);
		} else {
			res.render("index", {blogs: blogs});
		}
	});
});

// NEW - add a new blog
app.get("/blogs/new", function(req, res) {
	res.render("new");
});

// CREATE - add a new blog
app.post("/blogs", function(req, res) {
    // Strip out any <script> tags so we don't get hacked.
    req.body.blog.body = req.sanitize(req.body.blog.body);

	Blog.create(
		req.body.blog,
		function(error, blog) {
			if (error) {
				console.log("Error creating blog: " + error);
			} else {
				// redirect back to blog index page
				res.redirect("/blogs");
			}
		});
});

// SHOW - Show details of a blog entry, with the ability to update/delete
app.get("/blogs/:id", function(req, res) {
    Blog.findById(
        req.params.id,
        function(error, blog) {
            if (error) {
                res.redirect("/blogs");
            } else {
                res.render("show", {blog: blog});
            }
        });
});

// EDIT
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(
        req.params.id,
        function(error, blog) {
            if (error) {
                console.log(error);
                res.redirect("/blogs");
            } else {
                res.render("edit", {blog: blog});
            }
        });
});

// UPDATE
app.put("/blogs/:id", function(req, res) {
    // Update the database
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(
        req.params.id,
        req.body.blog,
        function(error, updatedBlog) {
            if (error) {
                res.redirect("/blogs");
            } else {
                res.redirect("/blogs/" + req.params.id);
            }
        });
});

// DESTROY 
app.delete("/blogs/:id", function(req, res) {
    Blog.findByIdAndRemove(
        req.params.id,
        req.body.blog,
        function(error, updatedBlog) {
            if (error) {
                console.log("Unable to delete: " + error);
            } 
            res.redirect("/blogs");
        });
});


app.listen(3000, function() {
    console.log("Blog server started.");
});
