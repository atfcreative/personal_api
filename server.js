// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ newUrlParser: true }));

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

// const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));


// //DATA //////

var art = [
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

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

//ROUTES 
// get all 
app.get('/api/art', (req, res) => {
    //send all art as json response
    console.log("art index");
    res.json( art )
});

app.get('/api', (req, res) => {
    res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/atfcreative/personal_api/blob/master/README.md",
    baseUrl: "https://whispering-atoll-59230.herokuapp.com/",
    endpoints: [
      {
        method: "GET",
        path: "/api", 
        description: "Describes all available endpoints"
      },
      {
        method: "GET",
        path: "/api/volunteer", 
        description: "Some volunteer projects"
      }, 
      {
        method: "POST", 
        path: "/api/design", 
        description: "Some design projects"
      }, 
      {
      method: "POST", 
      path: "/api/art", 
      description: "Some art projects"
    }
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
