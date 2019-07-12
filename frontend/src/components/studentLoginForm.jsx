import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { Link } from "react-router-dom";
import axios from "axios";
class StudentLoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };
  schema = {
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    axios
      .post(`http://localhost:3000/api/student-login`, {
        email: this.state.data.email,
        password: this.state.data.password
      })
      .then(res => console.log(res))
      .catch(() => console.log("Something happened on our end"));
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
        <Link to="/create-account" className="text-primary">
          Don't have an account? Create one here
        </Link>
      </div>
    );
  }
}

export default StudentLoginForm;
