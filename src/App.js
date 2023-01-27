import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearch = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((items) => {
      return items.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    const htmlContent = (
      <div data-testid="app" className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearch={this.onSearch} />
        <Scroll data-testid="scroll">
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
    if (this.state.robots.length === 0) {
      return <h1 className="tc">Loading ...</h1>;
    }
    return htmlContent;
  }
}

export default App;
