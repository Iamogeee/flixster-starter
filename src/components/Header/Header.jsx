import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header-item">
      <div className="">
        <h2> 🎬 FLIXSTER </h2>
      </div>

      {/* <div className="navBar"> */}
      <div className="nav-bar">
        <button onClick={props.onSearchChange}> Search </button>
        <button onClick={props.nowPlaying}>Now Playing</button>
      </div>
      <select
        id="choice"
        onChange={(event) => props.handleSort(event.target.value)}
      >
        <option value="default">Sort by</option>
        <option value="original_title.asc">Title</option>
        <option value="primary_release_date.desc">Release date</option>
        <option value="vote_average.desc">Vote average</option>
        <option value="popularity.desc">Popularity</option>
      </select>
      {/* </div> */}
    </div>
  );
};

export default Header;
