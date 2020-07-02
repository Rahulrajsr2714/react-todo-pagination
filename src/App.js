import React, { Component } from "react";
import Listcontainer from "./components/Listcontainer";
import Addtodolist from "./components/Addtodolist";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Aboutus } from "./components/Aboutus";
import Axios from "axios";
import ReactPaginate from "react-paginate";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,

      data: [],

      perPage: 5,

      currentPage: 0,

      todos: [],
    };
  }
  receiveData() {
    Axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const todoslist = res.data;

      const todos = todoslist.slice(
        this.state.offset,

        this.state.offset + this.state.perPage
      );

      this.setState({
        pageCount: Math.ceil(todoslist.length / this.state.perPage),

        todos,
      });
    });
  }

  async componentDidMount() {
    this.receiveData();
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receiveData();
      }
    );
  };

  addtodo = (newtask) => {
    var x = this.state.todos.length;
    console.log(x);
    this.setState({
      todos: this.state.todos.concat({
        id: x,
        title: newtask,
        completed: false,
      }),
    });
    console.log(this.state.todos);
  };

  updateStatus = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  removeItem = (id) => {
    const items = this.state.todos.filter((item) => item.id !== id);
    this.setState({ todos: items });
  };

  render() {
    return (
      <Router>
        <Navigation />
        <div className="container">
          <div className="row">
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <Addtodolist add={this.addtodo} />
                  <Listcontainer
                    todos={this.state.todos.reverse()}
                    toggleMark={this.updateStatus}
                    deleteItem={this.removeItem}
                  />

                  <div className="col-md-4 offset-md-4">
                    {this.state.postData}
                    <ReactPaginate
                      previousLabel={"prev"}
                      nextLabel={"next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={this.state.pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={2}
                      onPageChange={this.handlePageClick}
                      containerClassName={"pagination justify-content-center"}
                      subContainerClassName={"page-item"}
                      pageClassName={"page-item"}
                      pageLinkClassName={"page-link"}
                      previousClassName={"page-item"}
                      nextClassName={"page-item"}
                      previousLinkClassName={"page-link"}
                      nextLinkClassName={"page-link"}
                      activeClassName={"active"}
                    />
                  </div>
                </React.Fragment>
              )}
            />
            <Route exact path="/aboutus" render={() => <Aboutus />} />
          </div>
        </div>
      </Router>
    );
  }
}
