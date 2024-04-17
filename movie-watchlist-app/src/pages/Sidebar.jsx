import { useContext } from "react";
import { MovieStore } from "../store/movie-store";
import { Link, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const { setSection } =
    useContext(MovieStore);
  const loggedUser = localStorage.getItem("loggedUserName");
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedInStatus");
    localStorage.removeItem("loggedUserName");
    nav("/login");
  };
  const onNavigateHome = () => {
    setSection("searchsection");
  };
  return (
    <div
      className="d-flex flex-column p-4 sidebar"
      style={{ width: "280px", minHeight: "100vh" }}
    >
      <a className="d-flex align-items-center mb-3 text-white text-decoration-none">
        <div className="sideHeader">
          <h1 className="sidebarHeading">Watchlists</h1>
          <input
            className="mt-4 sidebarInput"
            type="text"
            placeholder="Search"
          />
        </div>
      </a>
      <ul className="nav nav-pills flex-column">
        <li>
          <Link
            to={"/"}
            href="#"
            className="nav-link text-white sidebarNavlink"
            aria-current="page"
          >
            <i className="bi bi-house"></i> Home
          </Link>
        </li>
      </ul>
      <hr />
      <div className="myWatchlists">
        <span className="ms-2">My Lists</span>
        <div className="mt-2 m-2">
          <Link
            className="border myWatchList"
            to={"/watchList"}
            style={{ textDecoration: "none", color:"#000" }}
          >
            <i className="bi bi-film"></i>&nbsp;&nbsp;
            <strong style={{ cursor: "pointer" }}>My Watchlists</strong>
          </Link>
        </div>
      </div>

      <div className="dropdown mt-auto">
        <div className="footer">
          <div className="username">
            <i className="bi bi-person"></i> {loggedUser}
          </div>
          <i
            className="bi bi-box-arrow-right"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
