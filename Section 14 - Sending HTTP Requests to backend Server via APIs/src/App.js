import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const baseUrl = "https://swapi.dev/api/";
  const moviesRoot = `${baseUrl}/films`;

  const fectchMotives = async () => {
    const response = await fetch(moviesRoot, { method: "GET" });
    const movies = await response.json();

    const moviesTransformed = movies.results.map((movie, i) => {
      return {
        id: i,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl,
      };
    });

    console.log(moviesTransformed);

    return moviesTransformed;
  };

  // remember: callback is a function passed as a parameter to another function. ex below
  useEffect(() => {
    setMovies(fectchMotives());
  }, []);

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>{/* <MoviesList movies={movies} /> */}</section>
    </React.Fragment>
  );
}

export default App;
