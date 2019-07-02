import React, { Component } from "react";
import { NavLink, Router, BrowserRouter } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-collapse" id="NavBarAltMarkup">
          <div className="navbar-nav">
            <h1 classname="navbar-brand" style={{ fontWeight: "bold" }}>
              Fuel
            </h1>

            <NavLink className="nav-item nav-link" to="/about">
              About Us
            </NavLink>
            <NavLink className="nav-item nav-link" to="/scholarships">
              Scholarships
            </NavLink>
            <NavLink className="nav-item nav-link" to="/opportunities">
              Opportunities
            </NavLink>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/create-account">
              Create Account
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
