import React, { useContext } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import { MovieStore } from "../store/movie-store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const MovieResponse = ({ movies }) => {
  const { setSection, setMovie, addNewMovie } = useContext(MovieStore);
  const notify = () => toast("Movie added to Watchlist");
  const handleMovieDetails = (movieObject) => {
    console.log("movie object sent")
    setMovie(movieObject);
  };
  const handleAddMovie = (movieData) =>{
    addNewMovie(movieData);
    notify();
  }

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-3 movieCard" key={index}>
            <div className="card mb-4">
              {movie.Poster !== "N/A" ? (
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  alt={movie.Title}
                />
              ) : (
                <div className="fillerPoster">
                  <img
                    className="card-img-top"
                    src="https://cdn4.iconfinder.com/data/icons/web-interface-10/512/823-02-512.png"
                    alt="Filler Poster"
                  />
                </div>
              )}

              <div className="card-body">
                <Link to={"/movie-details"} style={{ textDecoration: "none" }}>
                  <p
                    className="card-title"
                    onClick={() => handleMovieDetails(movie)}
                    style={{ cursor: "pointer" }}
                  >
                    {movie.Title}
                  </p>
                </Link>
                <p className="card-text">
                  {parseInt(movie.Year.split("-")[0])}
                </p>
                <span>
                  <MdBookmarkAdded
                    style={{ fontSize: "25px", color: "green" }}
                  />
                  <MdBookmarkAdd
                    style={{
                      fontSize: "25px",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={() => handleAddMovie(movie)}
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieResponse;
