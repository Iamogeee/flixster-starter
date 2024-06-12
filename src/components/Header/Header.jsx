import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header-item">
      <h1> 🎬 FLIXSTER 🍿</h1>

      {/* <div className="navBar"> */}
      <div>
        <button onClick={props.onSearchChange}> Search </button>
        <button onClick={props.nowPlaying}>Now Playing</button>
      </div>
      <select id="choice" onChange={props.handleSort}>
        <option className="sortOptions">Sort By</option>
        <option value="Genres">Genres</option>
        <option value="Release date">Release date</option>
        <option value="Vote average">Vote average</option>
      </select>
      {/* </div> */}
    </div>
  );
};

export default Header;
