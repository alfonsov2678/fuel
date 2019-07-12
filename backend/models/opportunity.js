const mongoose = require("mongoose");
const Joi = require("joi");
const opportunitySchema = new mongoose.Schema({
  opportunityName: {
    type: String,
    required: true
  },
  opportunityDescription: {
    type: String,
    required: true,
    minimum: 50
  },
  opportunityEmail: {
    type: String,
    required: true
  },
  opportunityAreaOfInterest: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Opportunity = mongoose.model("Opportunity", opportunitySchema);
function validateOpportunity(opportunity) {
  schema = {
    opportunityName: Joi.string().required(),
    opportunityDescription: Joi.string()
      .required()
      .min(50),
    opportunityEmail: Joi.string()
      .email()
      .required(),
    opportunityAreaOfInterest: Joi.string().required(),
    password: Joi.string().required()
  };
  return Joi.validate(opportunity, schema);
}
exports.validate = validateOpportunity;
exports.Opportunity = Opportunity;
