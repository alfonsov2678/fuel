const mongoose = require("mongoose");
const Joi = require("joi");

const scholarshipSchema = new mongoose.Schema({
  scholarshipName: {
    type: String,
    required: true
  },
  scholarshipDescription: {
    type: String,
    required: true,
    minimum: 50
  },
  email: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
const Scholarship = mongoose.model("Scholarship", scholarshipSchema);

function validateScholarship(scholarship) {
  schema = {
    scholarshipName: Joi.string().required(),
    scholarshipDescription: Joi.string()
      .required()
      .min(50),
    email: Joi.string()
      .required()
      .email(),
    website: Joi.string().required(),
    password: Joi.string().required()
  };
  return Joi.validate(scholarship, schema);
}

exports.validate = validateScholarship;
exports.Scholarship = Scholarship;
