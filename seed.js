// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

// const Art = {description: "See some art stuff."};

var art_list = [
	{	
		title: "Untitled1",
	  	medium: "Mixed Media",
	  	description: "32 x 32 on wood",
	  	image: "../images/somepath1.jpg"
	},
	{
		title: "Untitled2",
	  	medium: "Acrylic",
	  	description: "40 x 40 on canvas",
	  	image: "../images/somepath2.jpg"
	},
	{
		title: "Untitled3",
	  	medium: "Graphite",
	  	description: "50 x 50 on paper",
	  	image: "../images/somepath3.jpg"
	},
	{
		title: "Untitled4",
	  	medium: "Pen & Ink",
	  	description: "60 x 60 on mulberry",
	  	image: "../images/somepath4.jpg"
	},
	{
		title: "Untitled5",
	  	medium: "Water Color",
	  	description: "70 x 70 on Strathmore",
	  	image: "../images/somepath5.jpg"
	},


];



//delete all records of art 
db.Art.remove({}, function (err, removeArt) {
	if (err) {
	console.log(`Error occurred ${err}`);
	}
	//create all records
	db.Art.create(art_list, function(err, newArt){
	  if (err){
	    return console.log("Error:", err);
	  }
	  console.log(`Created new art list \n ${newArt}`)

	  process.exit(); // we're all done! Exit the program.
	});
});


























