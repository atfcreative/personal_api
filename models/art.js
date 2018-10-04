const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ArtSchema = new Schema({
  type: String,
  description: String,
  location: String,
  date: Date,
  image: String
});

const Art = mongoose.model('Volunteer', ArtSchema);

module.exports = Art;
