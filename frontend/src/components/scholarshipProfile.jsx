import React, { Component } from 'react';
import axios from 'axios'
class Profile extends Component {
    state = {
        scholarship: [],
        pathname: this.props.match.url
    }
    async componentDidMount()
    {
        const { data } = await axios.get(`http://localhost:3000/api${this.state.pathname}`)
        this.setState({scholarship: data})
    }
    render() { 
        return (  );
    }
}
 