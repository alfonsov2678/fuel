import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import OpportunityTable from "./opportunityTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { throwStatement } from "../../node_modules/@babel/types";

class LoadOpportunity extends Component {
  state = {
    opportunities: [],
    pageSize: 20,
    currentPage: 1,
    selectedArea: null,
    sortColumn: { path: "opportunityTable", order: "asc" },
    columns: [],
    currentPage: 1,
    pageSize: 10
  };
  handlePageChange = page => {
    const { sortColumn, currentPage, pageSize, opportunities } = this.state;
    const sorted = _.orderBy(
      opportunities,
      [sortColumn.path],
      [sortColumn.order]
    );

    const opportunitiesSorted = paginate(sorted, currentPage, pageSize);
    this.setState({ currentPage: page, opportunities: opportunitiesSorted });
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
    const { opportunities, pageSize, currentPage, sortColumn } = this.state;

    return (
      <div>
        <h1>Opportunities currently available for you</h1>
        <OpportunityTable
          opportunities={opportunities}
          onSort={this.handleSort}
          onDelete={this.handleDelete}
          sortColumn={sortColumn}
        />
        <Pagination
          itemsCount={opportunities.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default LoadOpportunity;
