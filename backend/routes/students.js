const { validate, Student } = require("../models/student");
const express = require("express");
const bcrypt = require("bcrypt");
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
  const salt = await bcrypt.genSalt(10);
  student.password = await bcrypt.hash(student.password, salt);
  await student.save();
  res.send(student);
});

router.get("/:id", async (req, res) => {
  let student = await Student.findById(req.params.id);
  if (!student) {
    return res
      .status(404)
      .send("The student that you are looking for is invalid");
  }
  res.send(student);
});
router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    college: req.body.college,
    age: req.body.age,
    aoi: req.body.aoi,
    description: req.body.description
  });
  if (!student) {
    return res.status(404).send("The student you are looking for is invalid");
  }
  res.send(student);
});
module.exports = router;
