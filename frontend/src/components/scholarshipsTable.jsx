import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import LoadScholarships from "./loadScholarships";
class ScholarshipTable extends Component {
  columns = [
    {
      path: "scholarshipName",
      lable: "Name",
      content: scholarship => (
        <Link to={`/scholarships/${scholarship._id}`}>
          {scholarship.scholarshipName}
        </Link>
      )
    }
  ];
  render() {
    const { scholarships, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={scholarships}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ScholarshipTable;
