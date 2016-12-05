var mongoose = require('mongoose');

// Genre Schema 
var genreSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

// This makes genres accessible anywhere else on the project
var Genre = module.exports = mongoose.model('Genre', genreSchema );

// Get Genres 
module.exports.getGenres = function(callback, limit){
	Genre.find(callback).limit(limit);
}

// get genre by ID, single genre
module.exports.getGenreById = function(id, callback){
	Genre.findById(id, callback);
};

// Add a genre
module.exports.addGenre = function(genre, callback){
	Genre.create(genre, callback);
};

// Update Genre
module.exports.updateGenre = function(id, genre, options, callback){
	// create a query , set it to underscore id id

	var query = { _id : id };
	var update = {
		name: genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback);
};

// Delete Genre
module.exports.removeGenre = function(id, callback){
	var query = {_id: id};
	Genre.remove(query, callback);
}