import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from "./common/form";
import axios from "axios";
import { Redirect } from "react-router-dom";

class CreateOpportunityForm extends Form 
{
    state: {
        data: {
            opportunityName: "",
            opportunityDescription: "",
            opportunityEmail: "",
            opportunityAreaOfInterest: "",
            password: "",
            otherDetails: ""
        },
        errors: {}
    }
    schema = {
        opportunityName: Joi.string().required().label("Opportunity Name"),
        opportunityDescription: Joi.string().required().min(50).label("Opportunity Description"),
        opportunityEmail: Joi.string().email().required().label("Opportunity Email"),
        opportunityAreaOfInterest: Joi.string().required().label("Opportunity Area of Interest"),
        password: Joi.string().required().label("Password"),
        otherDetails: Joi.string()
    }
    doSubmit = () => {
        axios.post(`http://localhost:3000/api/create-opportunity`, {
            opportunityName: this.state.data.opportunityName,
            opportunityDescription: this.state.data.opportunityDescription,
            opportunityEmail: this.state.data.opportunityEmail,
            opportunityAreaOfInterest: this.state.data.opportunityAreaOfInterest,
            password: this.state.data.password,
            otherDetails: this.state.data.otherDetails
        }).then((res) => console.log(res)).catch(() => console.log('A server error  occurred'))
    }
    render()
    {
        return(
            <div>
                <h1>Create a new Scholarship</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("opportunityName","Opportunity Name")}
                    {this.renderInput("opportunityDescription", "Opportunity Description")}
                    {this.renderInput("opportunityEmail", "Opportunity Email")}
                    {this.renderInput("opportunityAreaOfInterest", "Opportunity Area of Interest")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Create Opportunity")}
                </form>
            </div>
        )
    }
}
export default CreateOpportunityForm