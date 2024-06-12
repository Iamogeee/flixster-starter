import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList/MovieList.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Modal from "./components/Modal/Modal.jsx";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [nowPlaying, setNowPlaying] = useState(true);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`
  );
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    console.log(movie);
    setSelectedMovie(movie);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  const onSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setUrl(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`
    );
    setMovies([]);
  };

  const handleIsSearching = () => {
    setMovies([]);
    setNowPlaying(false);
    setUrl(
      `https://api.themoviedb.org/3/search/movie?query=&include_adult=false&language=en-US&page=1`
    );
  };

  const handleNowPlaying = () => {
    setNowPlaying(true);
    setUrl(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`
    );
  };

  useEffect(() => {
    console.log("effect");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTdiNzQ4ZDRkMWVhZTQ0NTdmOWIwNzlmNDYyNGM1ZiIsInN1YiI6IjY2Njc2NDYyMjk2NjFmZDQ5MWRkYjIzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1asQD0ENnNwQHN2V7P9vOLLVOkz8bxxOrWqmNlrLmyU",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies((oldMovies) => oldMovies.concat(response.results));
      })
      .catch((err) => console.error(err));
  }, [pageNumber, url]);

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleSortOption = () => {
    setSortOption;
  };

  return (
    <div className="App">
      <Header
        handleSort={handleSortOption}
        searchQuery={searchQuery}
        onSearchChange={handleIsSearching}
        nowPlaying={handleNowPlaying}
      />

      {nowPlaying ? (
        <>
          <MovieList data={movies} onMovieClick={handleMovieClick} />

          {selectedMovie && (
            <Modal movie={selectedMovie} onClose={handleClose} />
          )}
          <button className="loadButton" onClick={loadMore}>
            Load More
          </button>
        </>
      ) : (
        <>
          <SearchBar input={searchQuery} onSearch={onSearchChange} />
          <MovieList data={movies} onMovieClick={handleMovieClick} />
          <Modal movie={selectedMovie} onClose={handleClose} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default App;
