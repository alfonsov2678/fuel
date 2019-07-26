import React, { Component } from "react";
import axios from "axios";
class StudentProfile extends Component {
  state = {
    student: [],

    pathname: this.props.match.url
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:3000/api${this.state.pathname}`
    );
    this.setState({ student: data });
  }
  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/editProfile/${this.state.student._id}`);
  }

  render() {
    const { student } = this.state;
    return (
      <div>
        <h3 className="display-4">
          Your student profile{" "}
          <small className="text-muted">Helping fuel your success</small>
        </h3>
        <dl className="row">
          <dt className="col-lg-3">Name</dt>
          <dd className="col-lg-9">{student.name}</dd>
          <dt className="col-lg-3">Email</dt>
          <dd className="col-lg-9">{student.email}</dd>
          <dt className="col-lg-3">College</dt>
          <dd className="col-lg-9">{student.college}</dd>
          <dt className="col-lg-3">Age</dt>
          <dd className="col-lg-9">{student.age}</dd>
          <dt className="col-lg-3">Area of Interest</dt>
          <dd className="col-lg-9">{student.aoi}</dd>
          <dt className="col-lg-3">Description</dt>
          <dd className="col-lg-9">{student.description}</dd>
        </dl>
        <button
          type="button"
          className="btn btn-lg btn-warning"
          onClick={this.handleClick}
        >
          Edit Profile
        </button>
      </div>
    );
  }
}

export default StudentProfile;
