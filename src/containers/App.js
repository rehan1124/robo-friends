import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const onSearch = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((items) => {
    return items.name.toLowerCase().includes(searchField.toLowerCase());
  });
  const htmlContent = (
    <div data-testid="app" className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onSearch={onSearch} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
  return !robots.length ? <h1 className="tc">Loading ...</h1> : htmlContent;
}

export default App;
