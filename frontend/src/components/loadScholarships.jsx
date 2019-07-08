import React, { Component } from "react";
import axios from "axios";
import ScholarshipTable from "./scholarshipsTable";
import { throwStatement } from "../../node_modules/@babel/types";
class LoadScholarships extends Component {
  state = {
    scholarships: {},
    pageSize: 20,
    currentPage: 1,
    selectedArea: null,
    sortColumn: { path: "scholarshipName", order: "asc" }
  };
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  componentDidMount() {
    axios.get("http://localhost:3000/api/scholarships").then(res => {
      console.log(res);
      this.setState({ scholarships: res });
    });
  }
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  render() {
    return (
      <div>
        <h1>Scholarships currently available for you</h1>
        <ScholarshipTable
          scholarships={this.state.scholarships.data}
          onSort={this.handleSort}
          onDelete={this.handleDelete}
          sortColumn={this.state.sortColumn}
        />
      </div>
    );
  }
}

export default LoadScholarships;
