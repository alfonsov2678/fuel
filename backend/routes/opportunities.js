const { validate, Opportunity } = require("../models/opportunity");
const express = require("express");
const router = express.Router();
const _ = require("lodash");

router.get("/", async (req, res) => {
  const opportunities = await Opportunity.find();
  res.send(opportunities);
});

router.get("/:id", async (req, res) => {
  const opportunity = await Opportunity.findById(req.params.id);
  if (!opportunity) {
    return res
      .status(404)
      .send(
        "The opportunity that you are looking for does not currently exist"
      );
  }
  res.send(opportunity);
});

module.exports = router;
