
const MovieDetails = ({ movie }) => {
  return (
    <div className="movieSection">
      <div className="movieContainer">
        <div className="">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="movieDetails">
          <div className="">{movie.Title}</div>
          <div className="">
            Year of Release : {parseInt(movie.Year.split("-")[0])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
