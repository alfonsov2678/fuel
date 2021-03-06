const express = require("express");
const students = require("../routes/students");
const scholarshipLogin = require("../routes/login-scholarship");
const scholarships = require("../routes/create-scholarships");
const opportunities = require("../routes/create-opportunities");
const scholarship = require("../routes/scholarships");
const opportunity = require("../routes/opportunities");
const opportunityLogin = require("../routes/login-opportunities");
const studentLogin = require("../routes/login-student");
module.exports = function(app) {
  app.use(express.json());
  app.use("/api/opportunity-login", opportunityLogin);
  app.use("/api/editProfile", students);
  app.use("/api/scholarship-login", scholarshipLogin);
  app.use("/api/student-login", studentLogin);
  app.use("/api/create-student", students);
  app.use("/api/student", students);
  app.use("/api/create-opportunity", opportunities);
  app.use("/api/create-scholarship", scholarships);
  app.use("/api/scholarships", scholarship);
  app.use("/api/opportunities", opportunity);
  app.use("/api/scholarship", scholarship);
  app.use("/api/opportunity", opportunity);
};
