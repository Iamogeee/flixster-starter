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
  const [sortOptions, setSortOptions] = useState();
  const [liked, setLiked] = useState([]);
  const [viewed, setViewed] = useState([]);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`
  );
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleMovieClick = (movie) => {
    console.log(movie);
    setSelectedMovie(movie);
  };
  const toggleLike = (movie) => {
    setLiked((prev) => {
      let index = prev.indexOf(movie.id);
      if (index == -1) {
        prev.push(movie.id);
      } else {
        prev.splice(index, 1);
      }

      return prev;
    });
    console.log("postliked", liked);
  };
  console.log(liked);
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
    setMovies([]);
    setUrl(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`
    );
  };

  useEffect(() => {
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
    setUrl(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${
        pageNumber + 1
      }`
    );
  };

  const handleSortOption = (event) => {
    if (event == "default") {
      return;
    }
    console.log(event);
    setSortOptions(event);
    setMovies([]);
    setUrl(
      "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=" +
        event
    );
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
          <MovieList
            data={movies}
            onMovieClick={handleMovieClick}
            onLike={toggleLike}
            onWatched={setViewed}
            favorite={liked}
            watched={viewed}
          />

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
          <MovieList
            onLike={toggleLike}
            onWatched={setViewed}
            favorite={liked}
            watched={viewed}
            data={movies}
            onMovieClick={handleMovieClick}
          />
          <Modal movie={selectedMovie} onClose={handleClose} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default App;
