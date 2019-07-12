const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { validate, Opportunity } = require("../models/opportunity");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res
      .status(400)
      .send("The opportunity that you are trying to create is invalid");
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
  await opportunity.save();
  res.send(opportunity);
});
module.exports = router;
