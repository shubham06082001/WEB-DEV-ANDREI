import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  // console.log("SearchBox");
  return (
    <div className="pa2">
      <input
      aria-label="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
