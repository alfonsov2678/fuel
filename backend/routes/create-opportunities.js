const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { validate, Opportunity } = require("../models/opportunity");

router.post("/", async (req, res) => {
  const { errors } = validate(req.body);
  if (errors) {
    res.status(400).send("The opportunity you are trying to create is invalid");
    return;
  }
  let opportunity = Opportunity.find({
    email: req.body.email
  });
  if (opportunity) {
    res
      .status(400)
      .send("The opportunity that you are trying to register already exists");
    return;
  }
  opportunity = new Opportunity(req.body);
  await opportunity.save();
  res.send(opportunity);
});
module.exports = router;
