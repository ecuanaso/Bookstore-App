var mongoose = require('mongoose');

// Genre Schema 
var bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	
	genre: {
		type: String,
		required: true
	},

	desc: {
		type: String
	},

	author: {
		type: String,
		required: true
	},

	publisher: {
		type: String
	},

	pages: {
		type: String
	},

	image_url: {
		type: String
	},

	buy_url: {
		type: String
	},

	createdAt: {
		type: Date,
		default: Date.now
	}
});

// This makes Book accessible anywhere else on the project
var Book = module.exports = mongoose.model('Book', bookSchema );

// Get Books 
module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit);
}

// Ge a single book
module.exports.getBookById = function(id, callback){
	Book.findById(id,callback);
}

// Add a book
module.exports.addBook = function(book, callback){
	Book.create(book, callback);
};

// Update Book
module.exports.updateBook = function(id, book, options, callback){
	// create a query , set it to underscore id id

	var query = { _id : id };
	var update = {
		title: book.title,
		genre: book.genre,
		desc: book.desc,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	};

	Book.findOneAndUpdate(query, update, options, callback);
};

// Delete Book
module.exports.removeBook = function(id, callback){
	var query = {_id: id};
	Book.remove(query, callback);
}
