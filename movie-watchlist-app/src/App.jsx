import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ProtectedRoutes from "./services/ProtectedRoutes";
import MovieStoreProvider from "./store/movie-store";
import WatchListSection from "./pages/WatchListSection";
import MovieDetails from "./pages/MovieDetails";
import SearchSection from "./pages/SearchSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "/watchList", element: <WatchListSection /> },
          { path: "/movie-details", element: <MovieDetails /> },
          { path: "/", element: <SearchSection /> },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Registration /> },
]);
const App = () => {
  return (
    <>
      <MovieStoreProvider>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />}></Route>
            </Route>
          </Routes>
        </BrowserRouter> */}
        <RouterProvider router={router}/>
      </MovieStoreProvider>
    </>
  );
};

export default App;
