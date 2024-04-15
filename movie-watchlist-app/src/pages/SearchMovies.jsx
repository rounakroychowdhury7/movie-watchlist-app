import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import MovieResponse from "./MovieResponse";

const SearchMovies = () => {
  const [movieList, setMovieList] = useState("");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(`https://www.omdbapi.com/?s="tom"}&apikey=47506f05`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setLoading(true);
          setResponse(data.Search);
        } else {
          setLoading(true);
          setResponse([]);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onAddMovie = (e) => {
    setLoading(false);
    e.preventDefault();
    setMovieList(e.target.value);
    fetch(`https://www.omdbapi.com/?s=${e.target.value}&apikey=47506f05`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setLoading(true);
          setResponse(data.Search);
        } else {
          setLoading(true);
          setResponse([]);
        }
      });

    if (e.target.value.length === 0) {
      fetchData();
    }
  };
  return (
    <div className="">
      <div className="">
        <input
          className="movieSearch"
          type="text"
          value={movieList}
          onChange={onAddMovie}
        />
        <button className="movieSearchButton">Search</button>
        {!loading && <Loading></Loading>}
        {loading && response && (
          <MovieResponse movies={response}></MovieResponse>
        )}
      </div>
    </div>
  );
};

export default SearchMovies;
