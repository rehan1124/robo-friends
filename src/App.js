import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from "./SearchBox";
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ""
        }
    }

    onSearch = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter((items) => {
            return items.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        const htmlContent =
        <div data-testid="app" className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox onSearch={ this.onSearch }/>
            <CardList robots={filteredRobots}/>
        </div>
        return htmlContent;
    }
}

export default App;