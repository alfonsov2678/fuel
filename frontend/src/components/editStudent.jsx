import React, { Component } from "react";
import Edit from "./common/editInput";
import Select from "./common/select";
import Form from "./common/form";
import Joi from "joi-browser";
import axios from "axios";
class EditStudent extends Form {
  state = {
    student: [],
    data: {
      name: "",
      email: "",
      college: "",
      age: "",
      password: "",
      aoi: "",
      description: ""
    },
    errors: [],
    pathname: this.props.match.url
  };
  constructor(props) {
    super(props);
    this.onDone = this.onDone.bind(this);
  }
  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:3000/api${this.state.pathname}`
    );
    this.setState({ student: data });
  }
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
    aoi: Joi.string()
      .required()
      .label("Area of Interest"),
    description: Joi.string().label("Description")
  };
  onDone() {
    console.log("Finished editing student profile");
  }

  async doSubmit() {
    const { student } = this.state;
    await axios.put(`http://localhost:3000/api/student/${student._id}`, {
      name: student.name,
      email: student.email,
      college: student.college,
      age: student.age,
      aoi: student.aoi,
      description: student.description
    });
  }
  render() {
    const { student } = this.state;
    return (
      <div>
        <h3 className="display-4">
          Your Current Student Profile
          <small className="text-muted">Editing</small>
        </h3>
        <p className="lead">
          For your safety please enter your all of your old information with the
          new information you wish to add
        </p>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name", student.name)}
          {this.renderInput("email", "Email", student.email)}
          {this.renderInput("college", "College", student.college)}
          {this.renderInput("age", "Age", student.age)}
          {this.renderInput("aoi", "Area of Interest", student.aoi)}
          {this.renderInput("description", "Biography", student.description)}
          {this.renderButton("Save Student")}
        </form>
      </div>
    );
  }
}

export default EditStudent;
