import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./navbar.css";
// import { LoginContext } from "../context/LoginContext";

export default function Navbar() {
  // const { setModalOpen } = useContext(LoginContext);

  const loginStatus = () => {
    return (
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to="/createPost">Create Post</Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link style={{ marginLeft: "20px" }} to="/followingpost">
            My Following
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to={""}>
            <button
              className="primaryBtn"
              /*onClick={() => setModalOpen(true)}*/
            >
              Log Out
            </button>
          </Link>
        </Grid>
      </Grid>
    );
  };

  return (
    <div className="navbar">
      <img alt="" />
      {loginStatus()}
    </div>
  );
}
