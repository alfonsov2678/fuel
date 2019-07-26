import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import LoadOpportunity from "./opportunityTable";
class OpportunityTable extends Component {
  columns = [
    {
      path: "opportunityName",
      lable: "Name",
      content: opportunity => (
        <Link
          className="btn btn-md btn-outline-dark"
          to={`/opportunities/${opportunity._id}`}
        >
          {opportunity.opportunityName}
        </Link>
      )
    },
    {
      path: "opportunityAreaOfInterest",
      lable: "Area of Interest",
      content: opportunity => <h6>{opportunity.opportunityAreaOfInterest}</h6>
    },
    {
      path: "opportunityDescription",
      lable: "Description",
      content: opportunity => <h6>{opportunity.opportunityDescription}</h6>
    }
  ];
  render() {
    const { opportunities, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={opportunities}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default OpportunityTable;
