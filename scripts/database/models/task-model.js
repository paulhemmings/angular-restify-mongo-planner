'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
  assignedTo: {type: Schema.ObjectId},
	title : String,
	content : String,
  tags: [String],
  startsAt: {type: Date, required: false },
  endsAt: {type: Date, required: false },
  repeatsEvery: : {type: String, required: false },
  createdAt: {type: Date, required: true, default: Date},
  updatedAt: {type: Date, required: true, default: Date}
});

mongoose.model('Task', TaskSchema);
