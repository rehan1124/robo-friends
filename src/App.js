import React from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from "./SearchBox";

const App = () => {
    const htmlContent =
    <div data-testid="app" className="tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={robots}/>
    </div>
    return htmlContent;
}

export default App;