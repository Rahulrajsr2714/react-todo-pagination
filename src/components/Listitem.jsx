import React, { Component } from "react";

export class Listitem extends Component {
  render() {
    return (
      <div className="col-md-4 offset-md-4">
        <div style={{ margin: "10px" }} className="list-group-item">
          <button
            style={{ float: "right" }}
            onClick={(evt) => this.props.deleteItem(this.props.todoitem.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
          <input
            checked={this.props.todoitem.completed}
            style={{ float: "left", marginTop: "5px" }}
            type="checkbox"
            onChange={(evt) => this.props.toggleMarked(this.props.todoitem.id)}
          ></input>
          <h6
            style={
              this.props.todoitem.completed
                ? { textDecoration: "line-through", marginLeft: "20px" }
                : { marginLeft: "20px" }
            }
          >
            {this.props.todoitem.title}
          </h6>
        </div>
      </div>
    );
  }
}
