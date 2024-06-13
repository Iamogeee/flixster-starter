import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header-item">
      <div className="header-left">
        <h2> 🎬 FLIXSTER </h2>
        <div className="nav-bar">
          <button className="header-button" onClick={props.nowPlaying}>
            Now Playing
          </button>
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
        </div>
      </div>

      {/* <div className="navBar"> */}
      <button
        style={{ border: "none", backgroundColor: "transparent" }}
        onClick={props.onSearchChange}
      >
        <i className="fa-solid fa-magnifying-glass"></i>{" "}
      </button>

      {/* </div> */}
    </div>
  );
};

export default Header;
