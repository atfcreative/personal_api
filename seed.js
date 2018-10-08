// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

// const Art = {description: "See some art stuff."};

let art_list = [
	{	
		title: "Abstract Lines",
	  	medium: "Mixed Media",
	  	description: "32 x 32 on wood",
	  	image: "/images/art1.jpg"
	},
	{
		title: "Some Title 2",
	  	medium: "Acrylic",
	  	description: "40 x 40 on canvas",
	  	image: "./images/art1.jpg"
	},
	{
		title: "Some Title 3",
	  	medium: "Graphite",
	  	description: "50 x 50 on paper",
	  	image: "images/art1.jpg"
	},
	{
		title: "Some Title 4",
	  	medium: "Pen & Ink",
	  	description: "60 x 60 on mulberry",
	  	image: "/public/images/art1.jpg"
	},
	{
		title: "Some Title 5",
	  	medium: "Water Color",
	  	description: "70 x 70 on Strathmore",
	  	image: "./public/images/art1.jpg"
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
	    //return
	    console.log("Error:", err);
	  }
	  console.log(`Created new art list \n ${newArt}`)

	  process.exit(); // we're all done! Exit the program.
	});
});


























