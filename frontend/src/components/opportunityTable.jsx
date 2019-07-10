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
        <Link to={`/opportunities/${opportunity._id}`}>
          {opportunity.opportunityName}
        </Link>
      )
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
