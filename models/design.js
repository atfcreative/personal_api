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

var design_list = [
	{	
	  	type: "web",
	  	date: "11/11/1101",
	  	client: "Anonymous",
	  	image: "../images/somepath1.jpg",
	},
	{	
	  	type: "logo",
	  	date: "11/12/1101",
	  	client: "Anonymous",
	  	image: "../images/somepath2.jpg",
	},
	{	
	  	type: "identity",
	  	date: "11/13/1101",
	  	client: "Anonymous",
	  	image: "../images/somepath3.jpg",
	},
	{	
	  	type: "print",
	  	date: "11/14/1101",
	  	client: "Anonymous",
	  	image: "../images/somepath4.jpg",
	},
	{	
	  	type: "package",
	  	date: "11/15/1101",
	  	client: "Anonymous",
	  	image: "../images/somepath5.jpg",
	},
];
