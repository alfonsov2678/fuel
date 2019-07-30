const { validate, Student } = require("../models/student");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const _ = require("lodash");

router.post("/", async (req, res) => {
  const student = await Student.findOne({ email: req.body.email });
  if (!student) {
    return res
      .status(404)
      .send("The given student that you are looking for does not exist");
  }
  const validPassword = await bcrypt.compare(
    req.body.password,
    student.password
  );
  if (validPassword) {
    return res
      .status(400)
      .send("The given password that you are trying to use is invalid");
  }
  res.send(student);
});
module.exports = router;
