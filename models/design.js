const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const DesignSchema = new Schema({
  type: String,
  date: String,
  client: String,
  image: String
});

const Design = mongoose.model('Design', DesignSchema);

module.exports = require('./design.js');


