import axios from "axios";
import React, { Component } from "react";
class OpportunityProfile extends Component {
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
  handleClick() {
    console.log("editing profile");
  }
  render() {
    const { opportunity } = this.state;
    return (
      <div>
        <h3 className="display-4">
          Your Opportunity Profile{" "}
          <small className="text-muted">
            Thank you so much for being a fueler
          </small>
        </h3>
        <dl className="row">
          <dt className="col-lg-3">Name</dt>
          <dd className="col-lg-9">{opportunity.opportunityName}</dd>
          <dt className="col-lg-3">Email</dt>
          <dd className="col-lg-9">{opportunity.opportunityEmail}</dd>
          <dt className="col-lg-3">Description</dt>
          <dd className="col-lg-9">{opportunity.opportunityDescription}</dd>
        </dl>
        <button
          className="btn btn-lg btn-outline-primary"
          onClick={this.handleClick}
        >
          Edit Profile
        </button>
      </div>
    );
  }
}

export default OpportunityProfile;
