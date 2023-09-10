import React from "react";
import { Navigate,Outlet} from "react-router-dom";
import Cookies from "universal-cookie";
//import Home from "./components/Home/home";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

const cookies = new Cookies();

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = cookies.get("TOKEN");
  return isAuthenticated && token ? 
    <>
      <Header/>
      <Outlet />
      <Footer/>
      
    </> : <Navigate replace to='/' />
};
export default PrivateRoute