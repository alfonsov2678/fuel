const winston = require("winston");
const mongoose = require("mongoose");
module.exports = function() {
  mongoose
    .connect("mongodb://localhost/fuel")
    .then(() => winston.info("Fuel was able to connect to the database"));
};
