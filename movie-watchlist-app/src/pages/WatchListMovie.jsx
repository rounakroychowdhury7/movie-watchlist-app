import React, { useContext } from "react";
import { MovieStore } from "../store/movie-store";
import { Link } from "react-router-dom";
const WatchListMovie = ({ data }) => {
  const { deleteMovie, setSection, setMovie } = useContext(MovieStore);
  const handleMovieDetails = ( movieObject) => {
    setMovie(movieObject);
  };
  return (
    <div className="watchListMovieContainer">
      <h2 className="highlight">My Watchlists</h2>
      <h5>About this Watchlists</h5>
      <p>
        Embark on cinematic journeys with curated movie watchlists tailored to
        your every mood and taste.
      </p>
      {data.length == 0 && (
        <h5 className="warningMsg">Watchlist is empty !!</h5>
      )}

      <div className="container">
        <div className="row">
          {data.map((movie, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-4 watchListcard">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  <i
                    className="bi bi-trash-fill"
                    onClick={() => deleteMovie(index)}
                  ></i>
                  <span className="visually-hidden">unread messages</span>
                </span>
                {movie.Poster !== "N/A" ? (
                  <img
                    src={movie.Poster}
                    className="card-img-top watchListimg"
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
                  <Link
                    to={"/movie-details"}
                    style={{ textDecoration: "none" }}
                  >
                    <p
                      className="card-title"
                      onClick={() => handleMovieDetails(movie)}
                      style={{ cursor: "pointer" }}
                    >
                      {movie.Title}
                    </p>
                  </Link>
                  <p className="card-text">
                    {parseInt(movie.Year.split("-")[0])} <br />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchListMovie;
