const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
  type: String,
  date: String,
  location: String,
  organization: String
});

const Volunteer = mongoose.model('Volunteer', VolunteerSchema);

module.exports = require('./volunteer.js');


