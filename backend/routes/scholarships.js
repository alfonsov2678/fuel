const { validate, Scholarship } = require("../models/scholarship");
const express = require("express");
const router = express.Router();
const _ = require("lodash");

router.get("/", async (req, res) => {
  const scholarships = await Scholarship.find();
  res.send(scholarships);
});

router.get("/:id", async (req, res) => {
  const scholarship = await Scholarship.findById(req.params.id);
  if (!scholarship) {
    return res
      .status(404)
      .send("The scholarship that you are looking for does not exist");
  }
  res.send(scholarship);
});
module.exports = router;
