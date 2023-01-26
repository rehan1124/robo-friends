import React from "react";

const SearchBox = () => {
    const htmlContent =
    <div data-testid="search-robots" className="pa2">
        <input type="search" placeholder="Search robots ..." className="pa3 ba b--green bg-lightest-blue"></input>
    </div>
    return htmlContent;
}

export default SearchBox