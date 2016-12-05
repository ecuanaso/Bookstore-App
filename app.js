var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// middleware to initialize the body parser
app.use(bodyParser.json());

// Include genre.js file that has the Genre object
Genre = require('./models/genre');

// Include book.js file that has the Book object
Book = require('./models/book');

// Connect to mongoose 
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

// This sets up a Route to the home page. 
// Run the function when somebody sees that page
app.get('/', function(req,res){

	// Message to send to the browser.
	res.send('Please use /api/books');
});

// Route URL that shows all genres
app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if (err){
			throw err;
		} else {
			res.json(genres);
		}
	});
});

// Route URL that creates a Genre so you use POST and instead of GET
app.post('/api/genres', function(req, res){

	// this allows us to access is everything that comes into the form
	// and put it in a genre object 
	var genre = req.body;
	Genre.addGenre(genre, function(err, genre){
		if (err){
			throw err;
		} else {
			res.json(genre);
		}
	});
});


app.put('/api/genres/:_id', function(req, res){

	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre){
		if (err){
			throw err;
		} else {
			res.json(genre);
		}
	});
});

// Route URL that shows a single genre by id
app.get('/api/genres/:_id', function(req, res){
	Genre.getGenreById(req.params._id, function(err, genre){
		if (err){
			throw err;
		} else {
			console.log('this is the req: ', req )
			res.json(genre);
		}
	});
});

app.delete('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	Genre.removeGenre(id, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

// Route URL that shows all books
app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if (err){

		} else {
			res.json(books);
		}
	});
});

// Route URL that shows a single book by id

app.get('/api/books/:_id', function(req, res){
	Book.getBookById(req.params._id, function(err, book){
		if (err){
			throw err;
		} else {
			res.json(book);
		}
	});
});

app.post('/api/books', function(req, res){

	// this allows us to access is everything that comes into the form
	// and put it in a genre object 
	var book = req.body;
	Book.addBook(book, function(err, book){
		if (err){
			throw err;
		} else {
			res.json(book);
		}
	});
});

app.put('/api/books/:_id', function(req, res){

	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, book){
		if (err){
			throw err;
		} else {
			res.json(book);
		}
	});
});

app.delete('/api/books/:_id', function(req, res){
	var id = req.params._id;
	Book.removeBook(id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.listen(3000);
console.log('Running on port 3000 with mongodb running in a 2nd window!');

