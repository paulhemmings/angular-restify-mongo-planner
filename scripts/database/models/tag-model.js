'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.model('Tag', new Schema({
  childOf: {type: Schema.ObjectId},
	title : String
});
