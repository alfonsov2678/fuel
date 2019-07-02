const students = require("../routes/student");

module.exports = function(app) {
  app.use("newstudent", students);
};
