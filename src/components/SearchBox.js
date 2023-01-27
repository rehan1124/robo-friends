import React from "react";

const SearchBox = ({ onSearch }) => {
  const htmlContent = (
    <div data-testid="search-robots" className="pa2">
      <input
        type="search"
        placeholder="Search robots ..."
        className="pa3 ba b--green bg-lightest-blue"
        onChange={onSearch}
      ></input>
    </div>
  );
  return htmlContent;
};

export default SearchBox;
