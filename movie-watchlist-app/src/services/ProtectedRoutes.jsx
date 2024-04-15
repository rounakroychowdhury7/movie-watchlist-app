import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = () => {
  const isUserLoggedIn = localStorage.getItem("loggedInStatus");
  return isUserLoggedIn ? <Outlet/> : <Navigate to={"/login"}/>
};

export default ProtectedRoutes;
