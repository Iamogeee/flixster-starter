import React from "react";

const SearchBar = ({ onSearch, input }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={onSearch}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
