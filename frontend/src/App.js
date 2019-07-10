import React, { Component } from "react";
import NavBar from "./components/nav";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import LoginForm from "./components/loginForm";
import CreateUserForm from "./components/createUserForm";
import CreateHome from "./components/createHome";
import CreateOpportunityForm from "./components/createOpportunityForm";
import CreateScholarshipForm from "./components/createScholarshipForm";
import LoadScholarships from "./components/loadScholarships";
import LoadOpportunity from "./components/loadOpportunity";
import Scholarship from "./components/scholarship";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <NavBar />
        </main>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route exact path="/scholarships" component={LoadScholarships} />
          <Route exact path="/scholarships/:id" component={Scholarship} />
          <Route path="/create-account" component={CreateHome} />
          <Route path="/create-student" component={CreateUserForm} />
          <Route path="/create-scholarship" component={CreateScholarshipForm} />
          <Route path="/create-opportunity" component={CreateOpportunityForm} />
          <Route path="/opportunities" component={LoadOpportunity} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
