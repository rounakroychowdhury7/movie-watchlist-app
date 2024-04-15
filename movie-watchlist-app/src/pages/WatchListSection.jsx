import React, { useContext } from "react";
import WatchListMovie from "./WatchListMovie";
import { MovieStore } from "../store/movie-store";

const WatchListSection = () => {
  const {movieState} = useContext(MovieStore)
  return (
    <div>
      <WatchListMovie data={movieState}></WatchListMovie>
    </div>
  );
};

export default WatchListSection;
