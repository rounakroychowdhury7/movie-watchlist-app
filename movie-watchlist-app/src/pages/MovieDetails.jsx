import { useContext } from "react";
import { MovieStore } from "../store/movie-store";

const MovieDetails = () => {
  const { movie } = useContext(MovieStore);
  console.log(movie)
  return (
    <div className="movieSection">
      <div className="movieContainer">
        {movie.length === 0 && `No movies found`}
        <div className="">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="movieDetails">
          <div className="">{movie.Title}</div>
          <div className="">
            {movie.length !== 0 &&
              `Year of Release : ${parseInt(movie.Year.split("-")[0])}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
