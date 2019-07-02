const { validate, Student } = require("../models/student");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res
      .status(400)
      .send("The student that you are trying to register is invalid");
  }
  let student = await Student.findOne({ email: req.body.email });
  if (student) {
    res
      .status(400)
      .send(
        "The student that you are trying to register has already been registered"
      );
  }
  student = new Student(
    _.pick(req.body, ["name", "email", "password", "age", "aoi"])
  );
  await student.save();
});

module.exports = router;
