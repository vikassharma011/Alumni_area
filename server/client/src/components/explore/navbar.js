import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import { LoginContext } from "../context/LoginContext";

export default function Navbar() {
  // const { setModalOpen } = useContext(LoginContext);
  const location = useLocation();
  const navigate = useNavigate();
  const loginStatus = () => {
    return (
      <Grid container spacing={2} alignItems="center" className="colorme">
        <Grid item xs={12} sm={6}>
          <Link to="/profile">
            
            <button className="Btn">Profile</button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to="/createPost">
          <button className="Btn">Create Post</button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link style={{ marginLeft: "20px" }} to="/followingpost">
          <button className="Btn">My Following</button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link style={{ marginLeft: "20px" }} to="/search">
            <button className="Btn">Search alumni</button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to={""}>
            <button
              className="Btn"
              /*onClick={() => setModalOpen(true)}*/
            >
              Log Out
            </button>
          </Link>
        </Grid>
      </Grid>
    );
  };
  const goto = () => {
   navigate("/")
    
  };
  return (
    <div className="real-page">
      <img alt="" src="https://www.shutterstock.com/image-vector/alumni-badge-graduation-hat-icon-260nw-591791072.jpg" onClick={goto}/>
      {loginStatus()}
    </div>
  );
}
