import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import axios from "axios";
import { Redirect } from "react-router-dom";
class CreateUserForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      college: "",
      age: "",
      password: "",
      aoi: "",
      description: ""
    },
    errors: {}
  };
  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    college: Joi.string().label("College"),
    age: Joi.string()
      .label("Age")
      .required(),
    password: Joi.string()
      .required()
      .label("Username"),
    aoi: Joi.string()
      .required()
      .label("Area of Interest"),
    description: Joi.string().label("Description")
  };
  async doSubmit() {
    const { data } = await axios.post(
      `http://localhost:3000/api/create-student`,
      {
        name: this.state.data.name,
        email: this.state.data.email,
        college: this.state.data.college,
        age: this.state.data.age,
        password: this.state.data.password,
        aoi: this.state.data.aoi,
        description: this.state.data.description
      }
    );
    this.props.history.push(`/student/${data._id}`);
  }
  render() {
    return (
      <div>
        <h1>Create a new Student</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("college", "College")}
          {this.renderInput("age", "Age")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("aoi", "Area of Interest")}
          {this.renderInput("description", "Description")}
          {this.renderButton("Create User")}
        </form>
      </div>
    );
  }
}

export default CreateUserForm;
