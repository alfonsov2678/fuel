const { validate, Opportunity } = require("../models/opportunity");
const express = require("express");
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
  if (opportunity.password !== req.body.password) {
    return res
      .status(400)
      .send(
        "The password that you are using does not match the registered password"
      );
  }
  res.send(opportunity);
});

module.exports = router;
