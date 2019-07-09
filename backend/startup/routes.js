const express = require("express");
const students = require("../routes/students");
const login = require("../routes/login");
const scholarships = require("../routes/create-scholarships");
const opportunities = require("../routes/create-opportunities");
const scholarship = require("../routes/scholarships");
const opportunity = require("../routes/opportunities");
module.exports = function(app) {
  app.use(express.json());
  app.use("/api/create-student", students);
  app.use("/api/create-opportunity", opportunities);
  app.use("/api/create-scholarship", scholarships);
  app.use("/api/scholarships", scholarship);
  app.use("/api/opportunities", opportunity);
  app.use("/api/login", login);
};
