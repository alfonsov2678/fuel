const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const _ = require("lodash");
const { validate, Opportunity } = require("../models/opportunity");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error);
  }
  let opportunity = await Opportunity.findOne({
    email: req.body.opportunityEmail
  });
  if (opportunity) {
    return res
      .status(400)
      .send("The opportunity you are trying to create is already registered");
  }
  opportunity = new Opportunity(req.body);
  const salt = await bcrypt.genSalt(10);
  opportunity.password = await bcrypt.hash(opportunity.password, salt);
  await opportunity.save();
  res.send(opportunity);
});
module.exports = router;
