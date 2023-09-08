import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Home from "./components/Home/home";

const cookies = new Cookies();

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = cookies.get("TOKEN");
  return isAuthenticated && token ? 
    <>
      <Home/>
      
    </> : <Navigate replace to='/' />
};
export default PrivateRoute