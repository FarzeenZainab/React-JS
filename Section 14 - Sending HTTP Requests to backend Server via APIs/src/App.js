import React, { useEffect, useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState();

  const baseUrl = "https://swapi.dev/api/";
  const moviesRoot = `${baseUrl}/films`;

  // Using useCallback to avoid re-render when we add this function as an dependency inside useEffect
  // When we work with async await we use try catch to handle potentional errors when sending http request

  // reference: https://stackoverflow.com/questions/62601538/passing-a-function-in-the-useeffect-dependency-array-causes-infinite-loop

  const fetchMovies = useCallback(async () => {
    try {
      setisLoading(true);
      const response = await fetch(moviesRoot, { method: "GET" });

      if (!response.ok) {
        // throws a custom error in the catch block
        throw new Error(`Something went wrong, ${response.status}`);
      }

      const movies = await response.json();
      const moviesTransformed = movies.results.map((movie, i) => {
        return {
          id: i,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        };
      }, []);

      setMovies(moviesTransformed);
      setisLoading(false);
      return moviesTransformed;
    } catch (e) {
      setError(e.message);
    }
    setisLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // add movie to firebase backend
  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://movies-udemy-98cb8-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Click fetch to load movies</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (movies.length === 0) {
    content = <p>No movies found</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
