import React from "react";

function SearchBox({ searchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      ></input>
    </div>
  );
}

export default SearchBox;
