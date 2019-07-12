import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { Link } from "react-router-dom";
import axios from "axios";
class ScholarshipLoginForm extends Form {
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

  async doSubmit() {
    const { data } = await axios.post(
      `http://localhost:3000/api/scholarship-login`,
      {
        email: this.state.data.email,
        password: this.state.data.password
      }
    );

    this.props.history.push(`scholarship/${data._id}`);
  }
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

export default ScholarshipLoginForm;
