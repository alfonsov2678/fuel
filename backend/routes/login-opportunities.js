const { validate, Opportunity } = require("../models/opportunity");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const _ = require("lodash");

router.post("/", async (req, res) => {
  const opportunity = await Opportunity.findOne({
    opportunityEmail: req.body.opportunityEmail
  });
  if (!opportunity) {
    return res
      .status(404)
      .send(
        "The opportunity that you are looking for with the given email does not exist"
      );
  }
  const validPassword = bcrypt.compare(req.body.password, opportunity.password);
  if (!validPassword) {
    return res
      .status(400)
      .send(
        "The password that you are using does not match the registered password"
      );
  }
  res.send(opportunity);
});

module.exports = router;
