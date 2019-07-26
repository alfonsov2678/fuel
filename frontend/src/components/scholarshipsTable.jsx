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
        <Link
          className="btn btn-md btn-outline-info"
          to={`/scholarships/${scholarship._id}`}
        >
          {scholarship.scholarshipName}
        </Link>
      )
    },
    {
      path: "scholarshipDescription",
      lable: "Description",
      content: scholarship => <h6>{scholarship.scholarshipDescription}</h6>
    },
    {
      path: "email",
      lable: "Email",
      content: scholarship => <h6>{scholarship.email}</h6>
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
