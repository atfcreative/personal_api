// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

// const Art = {description: "See some art stuff."};

let art_list = [
	{	
		title: "Abstract Lines",
	  	medium: "Mixed Media",
	  	description: "32 x 32 on wood",
	  	image: "https://media1.tenor.com/images/5af3da53367cd8f4119da5f3e583f486/tenor.gif?itemid=9141818",
	},
	{
		title: "The Dude Abides",
	  	medium: "Acrylic",
	  	description: "40 x 40 on canvas",
	  	image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlr3Gs0CYbMD2Xd6axX6GOPuYPWxZart7WcJTQZieUw6ihkQF",
	},
	{
		title: "Hans Solo",
	  	medium: "Graphite",
	  	description: "50 x 50 on paper",
	  	image: "https://media.giphy.com/media/Y7xbzxf0kqSqI/giphy.gif",
	},
	{
		title: "NEERRRRDDDS",
	  	medium: "Pen & Ink",
	  	description: "60 x 60 on mulberry",
	  	image: "https://vignette.wikia.nocookie.net/mariokart/images/c/c1/Peachcanfly%3F.gif/revision/latest?cb=20140815160144",
	},
	{
		title: "D&D Wizard",
	  	medium: "Water Color",
	  	description: "70 x 70 on Strathmore",
	  	image: "http://78.media.tumblr.com/tumblr_lcrtz02G9u1qzj5ggo1_400.gif",
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


























