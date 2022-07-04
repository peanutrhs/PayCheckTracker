import Warn from '../Images/warn2.gif';
import React, { Component } from 'react';
import '../App.css';
class Landing extends Component {
    render() {
        return (
        <div className="App">
            <h1>Welcome to Paycheck Tracker</h1>
            <h2>This application will keep track of all paystubs</h2>
            <img src = {Warn} alt = 'Warn Industries Logo'></img>
        </div>
        );
    }
}

export default Landing;
