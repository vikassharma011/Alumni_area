import React from "react";
//import Home from "../../img/home.png";
// import Noti from "../../img/noti.png";
import { Home } from "@mui/icons-material";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CommentIcon from '@mui/icons-material/Comment';
import { UilSetting } from "@iconscout/react-unicons";

import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        {/* <img src={Home} alt="" /> */}
        <Home/>
      </Link>
      <UilSetting />
      {/* <img src={NotificationsActiveIcon} alt="" /> */}
      <NotificationsActiveIcon/>
      <Link to="./chat">
        {/* <img src={CommentIcon} alt="" /> */}
        <CommentIcon/>
      </Link>
    </div>
  );
};

export default NavIcons;