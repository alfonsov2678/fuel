import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import { paginate } from "../utils/paginate";
import ScholarshipTable from "./scholarshipsTable";
import Pagination from "./common/pagination";
import { throwStatement } from "../../node_modules/@babel/types";

class LoadScholarships extends Component {
  state = {
    scholarships: [],
    pageSize: 20,
    currentPage: 1,
    selectedArea: null,
    sortColumn: { path: "scholarshipName", order: "asc" },
    columns: [],
    pageSize: 10,
    currentPage: 1
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  handlePageChange = page => {
    const { sortColumn, currentPage, pageSize, scholarships } = this.state;
    const sorted = _.orderBy(
      scholarships,
      [sortColumn.path],
      [sortColumn.order]
    );

    const scholarshipsSorted = paginate(sorted, currentPage, pageSize);
    this.setState({ currentPage: page, scholarships: scholarshipsSorted });
  };
  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3000/api/scholarships");
    this.setState({ scholarships: data });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { currentPage, pageSize, scholarships, sortColumn } = this.state;
    const sorted = _.orderBy(
      scholarships,
      [sortColumn.path],
      [sortColumn.order]
    );

    return (
      <div>
        <h1>Scholarships currently available for you</h1>
        <div>
          <ScholarshipTable
            scholarships={scholarships}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={scholarships.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default LoadScholarships;
