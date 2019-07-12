const { validate, Scholarship } = require("../models/scholarship");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const session = require("express-session");

router.post("/", async (req, res) => {
  let scholarship = await Scholarship.findOne({ email: req.body.email });
  if (!scholarship) {
    return res
      .status(404)
      .send(
        "The scholarship you are trying to login with has never been created"
      );
  }
  if (scholarship.password !== req.body.password) {
    return res.status(400).send("Invalid Password");
  }
  res.send(scholarship);
});
module.exports = router;
