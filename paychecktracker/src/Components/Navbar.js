import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Pay Check Tracker
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            
            <li className="navbar-item">
              <Link to="/PayStubList" className="nav-link">
                Pay Stubs
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/CreatePayStub" className="nav-link">
                Create Pay Stubs
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="EditPayStub" className="nav-link">
                Edit Pay Stubs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}