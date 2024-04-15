import React from 'react'
import SearchMovies from './SearchMovies';
import WelcomeMessage from './WelcomeMessage';

const SearchSection = () => {
  return (
    <div className="searchSection">
      <WelcomeMessage></WelcomeMessage>
      <SearchMovies></SearchMovies>
    </div>
  );
}

export default SearchSection;
