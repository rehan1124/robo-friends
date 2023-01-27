import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

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
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((items) => {
      return items.name.toLowerCase().includes(searchField.toLowerCase());
    });
    const htmlContent = (
      <div data-testid="app" className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearch={this.onSearch} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
    return !robots.length ? <h1 className="tc">Loading ...</h1> : htmlContent;
  }
}

export default App;
