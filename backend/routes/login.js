const { validate, Student } = require("../models/student");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const session = require("express-session");

router.post("/", async (req, res) => {
  let student = await Student.findOne({ email: req.body.email });
  if (!student) {
    res
      .status(400)
      .send("The student you are trying to login with has never been created");
  }
  if (student.password !== req.body.password) {
    res.status(400).send("Invalid Password");
  }
  res.send(student);
});
module.exports = router;
