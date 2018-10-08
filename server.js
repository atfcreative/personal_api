// require express and other modules
const express = require('express');
const app = express();

// const port = process.env.port || 3000;

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//tell express how to use images
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/images'));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

const db = require('./models/index.js');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`

app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/public'));


// //DATA //////

var design = [
  { 
      type: "web",
      date: "11/11/1101",
      client: "Anonymous",
      image: "/images/art1.jpg",
  },
  { 
      type: "logo",
      date: "11/12/1101",
      client: "Anonymous",
      image: "/images/art1.jpg",
  },
  { 
      type: "identity",
      date: "11/13/1101",
      client: "Anonymous",
      image: "/images/art1.jpg",
  },
  { 
      type: "print",
      date: "11/14/1101",
      client: "Anonymous",
      image: "/images/art1.jpg",
  },
  { 
      type: "package",
      date: "11/15/1101",
      client: "Anonymous",
      image: "/images/art1.jpg",
  },
];

var volunteer = [
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

/*//////////////////////////////////////////////////////////
 * HTML Endpoints 
 *//////////////////////////////////////////////////////////

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/images', function images(req, res) {
  res.sendFile(__dirname + '/public/images');
});

/* /////////////////////////////////////////////////
 * JSON API Endpoints
 */


app.get('/api/design', function (req, res) {
  //send all design as json response
  // console.log('design index');
  res.json(design);
});

app.get('/api/volunteer', function (req, res) {
  //send all design as json response
  console.log('volunteer index');
  res.json(volunteer);
});

//ROUTES ////////////////////////////////////////////

// app.get('/api', (req, res) => {
//     res.json({
//     message: "Welcome to my personal api! Here's what you need to know!",
//     documentationUrl: "https://github.com/atfcreative/personal_api/blob/master/README.md",
//     baseUrl: "https://whispering-atoll-59230.herokuapp.com/",
//     endpoints: [
//       {
//         method: "GET",
//         path: "/api", 
//         description: "Describes all available endpoints"
//       },
//       // {
//       //   method: "GET",
//       //   path: "/api/volunteer", 
//       //   description: "Get volunteer projects"
//       // }, 
//       // {
//       //   method: "GET", 
//       //   path: "/api/design", 
//       //   description: "Get design projects"
//       // }, 
//       {
//       method: "GET", 
//       path: "/api/art", 
//       description: "Get art projects"
//     },
//     {
//       method: "POST", 
//       path: "/api/art", 
//       description: "Post art projects"
//     },
//     {
//       method: "PUT", 
//       path: "/api/art/:id", 
//       description: "Edit art projects"
//     },
//     {
//       method: "DELETE", 
//       path: "/api/art/:id", 
//       description: "Delete art projects"
//     },
//     ]
//   })
// });

// // get all art
// app.get('/api/art', (req, res) => {
//     //send all art as json response
//     console.log("art index");
//     db.Art.find({}, (err, findArt) => 
//       { if (err) throw err;
//         res.json(findArt);
//   });
// });

// //post all art
// app.post('/api/art/:id', (req, res) => {
//   const artId = req.params.id;
//   const artData = req.body;
//   console.log(`Andrew ID = ${artId} \n Andrew Data = ${artData}`)
//   res.json(updatedArt);
// })

// //Update art - //find item by id 
// app.put('/api/art/:id', (req, res) => {
//   let update = req.body;
//   db.Art.findByIdAndUpdate(req.params.id, update, { new:true }, (err, updateArt) => 
//   { if(err) throw err;
//     res.json(updateArt);})
// });

// //Art Destroy
// app.delete('/api/art/:id', (req, res) => {
//   db.Art.findByIdAndRemove(req.params.id, (err, deleteArt) => 
//     {if (err) throw err;
//       console.log(deleteArt);
//   })
// });


// API ROUTES
// art get all da kine
app.get('/api/art', (req, res) => {
  db.Art.find((err, allArts) => {
    if (err) throw err;
    res.json(allArts);
  });
});

// Art can now be created
app.post('/api/art', (req, res) => {
  db.Art.create(req.body, (err, newArt) => {
    if (err) throw err;
    res.json(newArt);
  });
});

// Art can now be updated
app.put('/api/art/:id', (req, res) => {
  const artId = req.params.id;
  const artData = req.body;
  console.log(`Art ID = ${artId} \n Art Data = ${artData}`)
  db.Art.findOneAndUpdate({_id: artId}, artData, {new: true}, (err, updatedArt) => {
    res.json(updatedArt);
  });
});

// Art can now be destroy
app.delete('/api/art/:id', (req, res) => {
  const artId = req.params.id;

  db.Art.findOneAndRemove({_id: artId}, (err, deletedArt) => {
    if (err) throw err;
    res.json(deletedArt);
  });
});


//////////////////////////////////////////////////////////////////////
//Server
//////////////////////////////////////////////////////////////////////

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
