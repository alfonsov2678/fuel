import React, { Component } from "react";
import axios from "axios";
class LoadScholarships extends Component {
  state = {
    scholarships: {}
  };
  componentDidMount() {
    axios.get("http://localhost:3000/api/scholarships").then(res => {
      console.log(res);
      this.setState({ scholarships: res });
    });
  }
  render() {
    return (
      <div>
        <h1>Scholarships currently available for you</h1>
      </div>
    );
  }
}

export default LoadScholarships;
