const { validate, Student } = require("../models/student");
const express = require("express");
const router = express.Router();
const _ = require("lodash");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.status(400).send("The student attempted to be registered is invalid");
    return;
  }
  let student = await Student.findOne({ email: req.body.email });
  if (student) {
    res
      .status(400)
      .send("The student you are trying to register has already been created");
    return;
  }
  student = new Student(req.body);
  await student.save();
  res.send(student);
});

module.exports = router;
