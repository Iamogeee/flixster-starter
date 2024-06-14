import React from "react";
import "./modal.css";
import { useState, useEffect } from "react";

const Genres = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

function mapGenres(genres) {
  return genres.map((genre) => Genres[genre]).join(", ");
}

const Modal = ({ movie, onClose }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const getModalVideo = async (movieId) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const videosUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

    const trailerUrl = await fetch(videosUrl)
      .then((response) => response.json())
      .then((response) =>
        response.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        )
      )
      .then((trailer) => `https://www.youtube.com/embed/${trailer.key}`)
      .catch((error) => {
        console.error("Error fetching movie trailer:", error);
      });

    //❗️CHANGE THE LINE BELOW TO SET YOUR TRAILER URL
    setTrailerUrl(trailerUrl);
  };

  useEffect(() => {
    getModalVideo(movie.id);
  }, [movie]);

  if (!movie) return null;

  return (
    <div className="modal_popup" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{movie.title}</h2>
          {/* <p className="close">&times; Movie Title</p> */}
        </div>
        <div className="modal-content">
          <div className="image-container">
            <div className="media-content1">
              <img
                className="modal-img"
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt={movie.title}
              />
            </div>
            <div className="media-content">
              <iframe
                src={trailerUrl} // CHANGE TRAILER VARIABLE TO YOURS
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Movie Trailer"
                className="modal-movie-trailer" // CHANGE CLASS NAME TO YOURS
              ></iframe>
            </div>
          </div>
          <div className="bottom">
            <p> Release Date: {movie.release_date}</p>
            <p>Genres: {mapGenres(movie.genre_ids)}</p>
            <p>Overview: {movie.overview}</p>
          </div>

          <div></div>

          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
