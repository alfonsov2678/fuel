import React, { Component } from "react";
class Home extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.history.push("/info");
  }
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Fuel</h1>
          <p className="lead">
            A new platform where ordinary people can fuel their own and the next
            generation's success
          </p>
          <hr className="my=4" />
          <p>
            Fuel was created in order to help ordinary people gain access to
            scholarships and research opportunities in their fields
          </p>
          <button className="btn btn-primary btn-lg" onClick={this.handleClick}>
            Learn More
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
