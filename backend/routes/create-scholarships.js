const { validate, Scholarship } = require("../models/scholarship");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const _ = require("lodash");

router.post("/", async (req, res) => {
  const { errors } = validate(req.body);
  if (errors) {
    res.status(400).send("Not a valid scholarship");
    return;
  }
  let scholarship = await Scholarship.findOne({
    email: req.body.email,
    scholarshipName: req.body.scholarshipName
  });
  if (scholarship) {
    res.status(400).send("The scholarship has already been created");
    return;
  }
  scholarship = new Scholarship(req.body);
  const salt = await bcrypt.genSalt(10);
  scholarship.password = await bcrypt.hash(scholarship.password, salt);
  await scholarship.save();
  res.send(scholarship);
});

module.exports = router;
