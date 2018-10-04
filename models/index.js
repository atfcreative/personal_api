const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useMongoClient: true});

module.exports = require("./volunteer.js");
module.exports = require("./art.js");
module.exports = require("./design.js");
