import React, { Component } from "react";
import NavBar from "./components/nav";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ScholarshipLoginForm from "./components/scholarshipLoginForm";
import CreateUserForm from "./components/createUserForm";
import CreateHome from "./components/createHome";
import CreateOpportunityForm from "./components/createOpportunityForm";
import CreateScholarshipForm from "./components/createScholarshipForm";
import LoadScholarships from "./components/loadScholarships";
import LoadOpportunity from "./components/loadOpportunity";
import Scholarship from "./components/scholarship";
import Login from "./components/login";
import Opportunity from "./components/opportunity";
import OpportunityLoginForm from "./components/opportunityLoginForm";
import StudentLoginForm from "./components/studentLoginForm";
import ScholarshipProfile from "./components/scholarshipProfile";
import OpportunityProfile from "./components/opportunityProfile";
import EditStudent from "./components/editStudent";
import StudentProfile from "./components/studentProfile";
import Home from "./components/home";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <NavBar />
        </main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/editProfile/:id" component={EditStudent} />
          <Route exact path="/student/:id" component={StudentProfile} />
          <Route exact path="/scholarship/:id" component={ScholarshipProfile} />
          <Route exact path="/opportunity/:id" component={OpportunityProfile} />
          <Route exact path="/student-login" component={StudentLoginForm} />
          <Route path="/scholarship-login" component={ScholarshipLoginForm} />
          <Route path="/fueler-login" component={OpportunityLoginForm} />
          <Route exact path="/scholarships" component={LoadScholarships} />
          <Route exact path="/scholarships/:id" component={Scholarship} />
          <Route path="/create-account" component={CreateHome} />
          <Route path="/create-student" component={CreateUserForm} />
          <Route path="/create-scholarship" component={CreateScholarshipForm} />
          <Route path="/create-opportunity" component={CreateOpportunityForm} />
          <Route path="/opportunities/:id" component={Opportunity} />
          <Route exact path="/opportunities" component={LoadOpportunity} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
