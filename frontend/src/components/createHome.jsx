import React, { Component } from "react";
class CreateHome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center pt-4">
          <h1>I am a</h1>
        </div>
        <div className="row justify-content-md-center mt-4">
          <a
            href="/create-student"
            role="button"
            className="btn-lg  btn btn-outline-primary px-8"
          >
            Student
          </a>
        </div>
        <div className="row justify-content-md-center mt-4">
          <a
            href="/create-scholarship"
            role="button"
            className="btn-lg  btn btn-outline-secondary px-8"
          >
            Scholarship
          </a>
        </div>
        <div className="row justify-content-md-center mt-4">
          <a
            href="/create-opportunity"
            role="button"
            className="btn-lg  btn btn-outline-success px-8"
          >
            Fueler
          </a>
        </div>
      </div>
    );
  }
}

export default CreateHome;
