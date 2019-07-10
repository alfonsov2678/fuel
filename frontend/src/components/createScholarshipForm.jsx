import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import axios from "axios";
import { Redirect } from "react-router-dom";
class CreateScholarshipForm extends Form {
  state = {
    data: {
      scholarshipName: "",
      scholarshipDescription: "",
      email: "",
      website: "",
      password: ""
    },
    errors: {}
  };
  schema = {
    scholarshipName: Joi.string()
      .required()
      .label("Scholarship Name"),
    scholarshipDescription: Joi.string()
      .required()
      .min(50)
      .label("Scholarship Description"),
    email: Joi.string()
      .email()
      .required()
      .label("Scholarship Email"),
    website: Joi.string()
      .required()
      .label("Scholarship Website"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  doSubmit = () => {
    axios
      .post(`http://localhost:3000/api/create-scholarship`, {
        scholarshipName: this.state.data.scholarshipName,
        scholarshipDescription: this.state.data.scholarshipDescription,
        email: this.state.data.email,
        website: this.state.data.website,
        password: this.state.data.password
      })
      .then(res => console.log(res))
      .catch(() => console.log("A server error occured"));
  };
  render() {
    return (
      <div>
        <h1>Create a new Scholarship</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("scholarshipName", "Scholarship Name")}
          {this.renderInput(
            "scholarshipDescription",
            "Scholarship Description"
          )}
          {this.renderInput("email", "Scholarship Email")}
          {this.renderInput("website", "Scholarship Website")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Create Scholarship")}
        </form>
      </div>
    );
  }
}

export default CreateScholarshipForm;
