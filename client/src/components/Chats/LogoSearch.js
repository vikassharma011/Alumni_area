import React from "react";
// import Logo from "../../img/logo.png";
import './LogoSearch.css'
import SearchIcon from '@mui/icons-material/Search';
// import { UilSearch } from '@iconscout/react-unicons'
import Instagram from "@mui/icons-material/Instagram";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
     <Instagram/>
      {/* <img src={<Instagram/>} alt="" /> */}
      <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
                <SearchIcon/>
                <h1>logo</h1>
          </div>
      </div>
    </div>
  );
};

export default LogoSearch;