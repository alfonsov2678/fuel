const { validate, Opportunity } = require("../models/opportunity");
const express = require("express");
const router = express.Router();
const _ = require("lodash");

router.get("/", async (req, res) => {
  const opportunities = await Opportunity.find();
  res.send(opportunities);
});

module.exports = router;
