import React, { Component } from "react";
export class Addtodolist extends Component {
  constructor(props) {
    super(props);
    this.state = { newTask: "" };
    this.handleChange = this.handleChange.bind(this);
    this.addNewtask = this.addNewtask.bind(this);
  }

  handleChange(evnt) {
    this.setState({ newTask: evnt.target.value });
  }

  addNewtask(evnt) {
    evnt.preventDefault();
    this.props.add(this.state.newTask);
    this.setState({ newTask: "" });
  }

  render() {
    return (
      <div className="col-md-4 offset-md-4">
        <form onSubmit={this.addNewtask}>
          <div className="form-group">
            <label>Enter your new task</label>
            <input
              value={this.state.newTask}
              onChange={this.handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <button
            style={{ float: "right" }}
            type="submit"
            className="btn btn-success"
          >
            Submit
          </button>
        </form>
        <h2>{this.state.newTask}</h2>
      </div>
    );
  }
}
export default Addtodolist;
