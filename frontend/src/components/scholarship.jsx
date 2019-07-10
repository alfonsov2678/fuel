import React, { Component } from "react";
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
        <h1>{scholarship.scholarshipName}</h1>
      </div>
    );
  }
}
export default Scholarship;
