const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", { useNewUrlParser: true });

module.exports.Art = require("./art.js");
// module.exports.Volunteer = require("./volunteer.js");
// module.exports.Design = require("./design.js");
