import React from "react";
import { MdBookmarkAdd } from "react-icons/md";
const WelcomeMessage = () => {
  return (
    <div className="welcomeMessage mb-4">
      <h2>
        Welcome to <span className="highlight">Watchlists</span>
      </h2>
      <p>Browse movies, add them to watchlists and share them with friends</p>
      <p>
        Just click the <MdBookmarkAdd /> to add a movie, the poster to see more
        details.
      </p>
    </div>
  );
};

export default WelcomeMessage;
