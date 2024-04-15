import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ProtectedRoutes from "./services/ProtectedRoutes";
import MovieStoreProvider from "./store/movie-store";
const App = () => {
  return (
    <>
      <MovieStoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieStoreProvider>
    </>
  );
};

export default App;
