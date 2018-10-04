const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ArtSchema = new Schema({
  title: String,
  type: String,
  description: String,
  image: String
});

const Art = mongoose.model('Art', ArtSchema);

module.exports.Art = require('./art.js');

var art_list = [
	{
		title: "Untitled1",
	  	type: "Mixed Media",
	  	description: "32 x 32 on wood",
	  	image: "../images/somepath1.jpg"
	},
	{
		title: "Untitled2",
	  	type: "Acrylic",
	  	description: "40 x 40 on canvas",
	  	image: "../images/somepath2.jpg"
	},
	{
		title: "Untitled3",
	  	type: "Grpahite",
	  	description: "50 x 50 on paper",
	  	image: "../images/somepath3.jpg"
	},
	{
		title: "Untitled4",
	  	type: "Pen & Ink",
	  	description: "60 x 60 on mulberry",
	  	image: "../images/somepath4.jpg"
	},
	{
		title: "Untitled5",
	  	type: "Water Color",
	  	description: "70 x 70 on Strathmore",
	  	image: "../images/somepath5.jpg"
	},


];
