var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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

app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if (err){

		} else {
			res.json(genres);
		}
	});
});


app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if (err){

		} else {
			res.json(books);
		}
	});
});


app.get('/api/books/:_id', function(req, res){
	Book.getBookById(req.params._id, function(err, book){
		if (err){
			throw err;
		} else {
			res.json(book);
		}
	});
});

app.listen(3000);
console.log('Running on port 3000 with mongodb running in a 2nd window!');