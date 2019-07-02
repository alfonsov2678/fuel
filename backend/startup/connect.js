const winston = require("winston");
const mongoose = require("mongoose");
module.exports = function() {
  mongoose
    .connect("mongodb://localhost/fuel")
    .then(() => winston.info("Successfully connected to MongoDB"));
};
