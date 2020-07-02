import React, { Component } from "react";
import { Listitem } from "./Listitem";
export default class Listcontainer extends Component {
  render() {
    return (
      <div className="col-md-12">
        {this.props.todos.map((todoitem) => (
          <Listitem
            key={todoitem.id}
            todoitem={todoitem}
            toggleMarked={this.props.toggleMark}
            deleteItem={this.props.deleteItem}
          />
        ))}
      </div>
    );
  }
}
