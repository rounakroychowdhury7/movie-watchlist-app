import Sidebar from "./Sidebar";
import SearchSection from "./SearchSection";
import { useContext } from "react";
import MovieDetails from "./MovieDetails";
import { MovieStore } from "../store/movie-store";
import WatchListSection from "./WatchListSection";

const Home = () => {
  const { section, movie, watchListMode } = useContext(MovieStore);
  // let componentToRender;
  // if (watchListMode === "watchListSection") {
  //   componentToRender = <WatchListSection />;
  // } else {
  //   if (section === "movieDetails") {
  //     componentToRender = <MovieDetails movie={movie} />;
  //   } else {
  //     componentToRender = <SearchSection />;
  //   }
  // }
    let componentToRender;
    if(section == "watchlistsection")
    {
      componentToRender = <WatchListSection />;
    }
    else if(section == "moviedetails"){
       componentToRender = <MovieDetails movie={movie} />;
    }
    else if(section == "searchsection"){
      componentToRender = <SearchSection />;
    }
  return (
    <div className="homeSection">
      <Sidebar></Sidebar>
      {componentToRender}
    </div>
  );
};

export default Home;
