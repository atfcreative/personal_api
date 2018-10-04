const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
  type: String,
  date: String,
  location: String,
  organization: String
});

const Volunteer = mongoose.model('Volunteer', VolunteerSchema);

module.exports.Volunteer = require('./volunteer.js');

var volunteer_list = [
	{	
	  	type: "Beach Clean Up",
	  	date: "11/11/1101",
	  	location: "Place",
	  	organization: "Surfrider",
	},
	{	
	  	type: "Fundraiser",
	  	date: "11/12/1101",
	  	location: "Place",
	  	organization: "Surfrider",
	},
	{	
	  	type: "Surf Event",
	  	date: "11/13/1101",
	  	location: "Place",
	  	organization: "Surfrider",
	},
	{	
	  	type: "Party",
	  	date: "11/14/1101",
	  	location: "Place",
	  	organization: "Surfrider",
	},
	{	
	  	type: "Meet Up",
	  	date: "11/15/1101",
	  	location: "Place",
	  	organization: "Surfrider",
	},
];
