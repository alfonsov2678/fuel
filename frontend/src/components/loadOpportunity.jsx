import React, { Component } from "react";
import axios from "axios";
import OpportunityTable from "./opportunityTable";
import { throwStatement } from "../../node_modules/@babel/types";

class LoadOpportunity extends Component {
  state = {
    opportunities: [],
    pageSize: 20,
    currentPage: 1,
    selectedArea: null,
    sortColumn: { path: "opportunityTable", order: "asc" },
    columns: []
  };

  handleDelete = opportunity => {
    const opportunities = this.state.opportunity.filter(
      m => m._id !== opportunity._id
    );
    this.setState({ opportunities });
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3000/api/opportunities");
    this.setState({ opportunities: data });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    return (
      <div>
        <h1>Opportunities currently available for you</h1>
        <OpportunityTable
          opportunities={this.state.opportunities}
          onSort={this.handleSort}
          onDelete={this.handleDelete}
          sortColumn={this.state.sortColumn}
        />
      </div>
    );
  }
}

export default LoadOpportunity;
