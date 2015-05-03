var mongoose = require('mongoose');
// Generic Dance Schema
var Schema = mongoose.Schema;

var DanceSchema = new Schema({
  name: String,
  style: String,
  description: String,
  timing: String,
  levels: Schema.Types.Mixed
});

// Model object to access named collection.
var American = mongoose.model('Dance', DanceSchema, 'american');
var International = mongoose.model('Dance', DanceSchema, 'international');

// Make available in this app
module.exports.American = American;
module.exports.International = International;
