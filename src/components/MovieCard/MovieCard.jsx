import React, { useState } from "react";
import "./movieCard.css";
import logo from "../../assets/F.png";

const MovieCard = ({
  movie,
  path,
  title,
  rating,
  onMovieClick,
  onFavorite,
  onViewed,
}) => {
  const [like, setLike] = useState(false);
  const [watched, setWatched] = useState(false);
  return (
    <div className="card" onClick={() => onMovieClick(movie)}>
      <div>
        <img className="flixster-icon" src={logo} />
        <img className="movieCover" src={path} alt="" />
      </div>
      <h3>{title}</h3>
      <p>
        Rating: <span>{rating} ⭐️</span>
      </p>
      <div className="movie-card-bottom">
        <button
          onClick={(e) => {
            setLike((prev) => !prev);
            onFavorite(movie);
            e.stopPropagation();
          }}
        >
          {!like ? (
            <i className="fa-regular fa-heart"></i>
          ) : (
            <i className="fa-solid fa-heart" style={{ color: "#ff0000" }}></i>
          )}
        </button>
        <button
          onClick={(e) => {
            setWatched((prev) => !prev);
            onViewed(movie);
            e.stopPropagation();
          }}
        >
          Watched:
          {!watched ? (
            <i className="fa-regular fa-square-check"></i>
          ) : (
            <i className="fa-solid fa-square-check"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
