const mongoose = require('mongoose');
const Schema = mongoose.Schema 
const photoSchema = new Schema({

	img : {type: String, required: true},
	
	title: String
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo; 