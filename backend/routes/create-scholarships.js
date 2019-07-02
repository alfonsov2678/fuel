const { validate, Scholarship } = require("../models/scholarship");
const express = require("express");
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
  await scholarship.save();
  res.send(scholarship);
});

module.exports = router;
