import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch, input }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="What are you watching today?"
        value={input}
        onChange={onSearch}
      />

      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
