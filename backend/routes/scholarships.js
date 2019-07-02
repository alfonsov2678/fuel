const { validate, Scholarship } = require("../models/scholarship");
const express = require("express");
const router = express.Router();
const _ = require("lodash");

router.get("/", async (req, res) => {
  const scholarships = await Scholarship.find();
  res.send(scholarships);
});

module.exports = router;
