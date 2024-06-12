import React from "react";
import "./modal.css";

const Modal = ({ movie, onClose }) => {
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
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
            />
          </div>
          <div className="bottom">
            <p> Release Date: {movie.release_date}</p>
            <p>Genres: {movie.genre_ids}</p>
            <p>Overview: {movie.overview}</p>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
