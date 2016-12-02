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