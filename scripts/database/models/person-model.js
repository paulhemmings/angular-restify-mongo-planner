'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PersonSchema = new Schema({
	name : String,
  points : String
});

mongoose.model('Person', PersonSchema);
