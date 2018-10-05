const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ArtSchema = new Schema({
  title: String,
  medium: String,
  description: String,
  image: String
});

const Art = mongoose.model('Art', ArtSchema);

module.exports = Art;
