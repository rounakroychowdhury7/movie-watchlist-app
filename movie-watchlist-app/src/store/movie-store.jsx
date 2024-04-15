import { createContext, useReducer, useState } from "react";
export const MovieStore = createContext();
const movieReducer = (currentMovieState, action) => {
  let loggedUser = localStorage.getItem("loggedUserEmail");
  let newCurrentMovieState = currentMovieState;

  if (action.type === "ADD_MOVIE") {
    const newMovie = action.payload.movie;
    const isMovieAlreadyPresent = currentMovieState.some(
      (movie) => movie.imdbID === newMovie.imdbID
    );

    if (isMovieAlreadyPresent) {
      alert("The movie is already present!");
    } else {
      newCurrentMovieState = [newMovie, ...currentMovieState];
      localStorage.setItem(loggedUser, JSON.stringify(newCurrentMovieState));
    }
  } else if (action.type === "DELETE_MOVIE") {
    console.log("delete");
    newCurrentMovieState = [...currentMovieState];
    newCurrentMovieState.splice(action.payload.movieID, 1);
    localStorage.setItem(loggedUser, JSON.stringify(newCurrentMovieState));
  }
  else if (action.type === "DELETE_STATE") {
    newCurrentMovieState = currentMovieState;
  }

  return newCurrentMovieState;
};

const MovieStoreProvider = ({ children }) => {
  const [section, setSection] = useState("searchsection");
  const [movie, setMovie] = useState([]);
  const loggedUser = localStorage.getItem("loggedUserEmail");
  const dataFromLocalStorage = localStorage.getItem(loggedUser);
  const initialMovieState = JSON.parse(dataFromLocalStorage) || [];
  const addNewMovie = (movie) => {
    movieStateDiscpatch({ type: "ADD_MOVIE", payload: { movie } });
  };
  const deleteMovie = (movieID) => {
    movieStateDiscpatch({ type: "DELETE_MOVIE", payload: { movieID } });
  };

  const movieStateNull = () =>{
    movieStateDiscpatch({ type: "DELETE_STATE" });
  }
  const [movieState, movieStateDiscpatch] = useReducer(
    movieReducer,
    initialMovieState
  );

  return (
    <MovieStore.Provider
      value={{
        section,
        setSection,
        movie,
        setMovie,
        addNewMovie,
        deleteMovie,
        movieState,
        movieStateNull,
      }}
    >
      {children}
    </MovieStore.Provider>
  );
};
export default MovieStoreProvider;
