import React, { Component } from "react";
import axios from "axios";

class Opportunity extends Component {
  state = {
    opportunity: [],
    pathname: this.props.match.url
  };
  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:3000/api${this.state.pathname}`
    );
    this.setState({ opportunity: data });
  }
  render() {
    const { opportunity } = this.state;
    return (
      <div>
        <h1>
          {opportunity.opportunityName}
          <small className="text-muted">
            An opportunity createed for students interested in{" "}
            {opportunity.opportunityAreaOfInterest}
          </small>
        </h1>
        <p className="lead">{opportunity.opportunityDescription}</p>
        <p className="lead">
          Official contact for the {opportunity.opportunityName} opportunity can
          be found by sending an email to {opportunity.opportunityEmail}
        </p>
      </div>
    );
  }
}

export default Opportunity;
