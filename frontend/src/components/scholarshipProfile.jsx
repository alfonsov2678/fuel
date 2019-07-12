import React, { Component } from "react";
import axios from "axios";
class ScholarshipProfile extends Component {
  state = {
    scholarship: [],
    pathname: this.props.match.url
  };
  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:3000/api${this.state.pathname}`
    );
    this.setState({ scholarship: data });
  }
  handleClick() {
    console.log("Profile Edited");
  }
  render() {
    const { scholarship } = this.state;
    return (
      <div>
        <h3 className="display-4">
          Your scholarship profile for {scholarship.scholarshipName}
        </h3>
        <dl className="row">
          <dt className="col-lg-3">Name</dt>
          <dd className="col-lg-9">{scholarship.scholarshipName}</dd>
          <dt className="col-lg-3">Email</dt>
          <dd className="col-lg-9">{scholarship.email}</dd>
          <dt className="col-lg-3">Website</dt>
          <dd className="col-lg-9">{scholarship.website}</dd>
          <dt className="col-lg-3">Description</dt>
          <dd className="col-lg-9">{scholarship.scholarshipDescription}</dd>
        </dl>
        <button
          type="button"
          className="btn btn-outline-dark btn-lg"
          onClick={this.handleClick}
        >
          Edit Profile
        </button>
      </div>
    );
  }
}

export default ScholarshipProfile;
