const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/api", {useMongoClient: true});

module.exports = require("./volunteer");
module.exports = require("./art");
module.exports = require("./design");
