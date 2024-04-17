import Sidebar from "./Sidebar";
import SearchSection from "./SearchSection";
import { useContext } from "react";
import MovieDetails from "./MovieDetails";
import { MovieStore } from "../store/movie-store";
import WatchListSection from "./WatchListSection";
import { Outlet } from "react-router-dom";

const Home = () => {
  const { section, movie } = useContext(MovieStore);
  let componentToRender;
  if (section == "watchlistsection") {
    componentToRender = <WatchListSection />;
  } else if (section == "moviedetails") {
    componentToRender = <MovieDetails movie={movie} />;
  } else if (section == "searchsection") {
    componentToRender = <SearchSection />;
  }
  return (
    <div className="homeSection">
      <Sidebar></Sidebar>
      <Outlet movie={movie}></Outlet>
    </div>
  );
};

export default Home;
