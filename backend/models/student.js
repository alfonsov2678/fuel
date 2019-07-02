const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  college: {
    type: String
  },
  age: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  aoi: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

const Student = mongoose.model("Student", studentSchema);

function validateStudent(student) {
  const schema = {
    name: Joi.string().required(),
    email: Joi.string()
      .required()
      .email(),
    college: Joi.string(),
    age: Joi.string().required(),
    password: Joi.string().required(),
    aoi: Joi.string().required(),
    description: Joi.string()
  };
  return Joi.validate(student, schema);
}

exports.validate = validateStudent;
exports.Student = Student;
