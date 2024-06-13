import React from "react";
import "./movieCard.css";

const MovieCard = ({ movie, path, title, rating, onMovieClick }) => {
  // const [like, setLike] = useState();
  // const [watched, setWatched] = useState(false);

  return (
    <div className="card" onClick={() => onMovieClick(movie)}>
      <div>
        <img className="movieCover" src={path} alt="" />
      </div>
      <h3>{title}</h3>
      <p>
        Rating: <span>{rating} ⭐️</span>
      </p>
      <button onClick={(e) => e.stopPropagation()}>
        <i class="fa-regular fa-heart"></i>
      </button>
      <button onClick={(e) => e.stopPropagation()}>Watched</button>
    </div>
  );
};

export default MovieCard;
