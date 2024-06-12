import React from "react";
import "./movieCard.css";

const MovieCard = ({ movie, path, title, rating, onMovieClick }) => {
  return (
    <div className="card" onClick={() => onMovieClick(movie)}>
      <img className="movieCover" src={path} alt="" />
      <h3>{title}</h3>
      <p>
        Rating: <span>{rating} ⭐️</span>
      </p>
    </div>
  );
};

export default MovieCard;
