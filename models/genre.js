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