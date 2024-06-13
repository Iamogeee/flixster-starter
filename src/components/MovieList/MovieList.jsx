import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movieList.css";

const MovieList = ({
  data,
  onMovieClick,
  onLike,
  onWatched,
  favorite,
  watched,
}) => {
  console.log(favorite);
  const createCards = (movie, index) => {
    return (
      <MovieCard
        movie={movie}
        key={index}
        title={movie?.original_title}
        path={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
        rating={movie?.vote_average}
        onMovieClick={onMovieClick}
        onFavorite={onLike}
        onViewed={onWatched}
        liked={favorite}
        viewed={watched}
      />
    );
  };
  return <div className="movieList">{data.map(createCards)}</div>;
};

export default MovieList;
