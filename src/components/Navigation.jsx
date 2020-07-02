import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand">
          <h4>Todo List</h4>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse mr-auto"
          id="navbarNav"
          style={{ float: "left" }}
        >
          <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/aboutus"} className="nav-link">
                About app
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
