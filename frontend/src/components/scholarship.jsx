import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Scholarship extends Component {
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
  render() {
    const { scholarship } = this.state;
    return (
      <div>
        <h1>
          {scholarship.scholarshipName}
          <small className="text-muted">{scholarship.email}</small>
        </h1>
        <p className="lead">{scholarship.scholarshipDescription}</p>
        <p className="lead">
          Access the application to {scholarship.scholarshipName} at{" "}
          {scholarship.website}
        </p>
      </div>
    );
  }
}
export default Scholarship;
