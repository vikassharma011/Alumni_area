import React, { useState } from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  styled,
  colors,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Component = styled(AppBar)`
  background: #skyblue;
  color: black;
`;

const Container = styled(Toolbar)`
  justify-content: right;

  & > a {
    padding: 20px;
    color: #000;
    font: Roboto;
    text-decoration: none;
  }
`;

const Topbar = ({isAuthenticated}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Component>
      <Hidden mdUp>
        {/* Show menu button on small screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuButtonClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem>
            <Link to="/home">HOME</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">ABOUT</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/event">EVENT</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact">CONTACT</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/profile">PROFILE</Link>
          </MenuItem>
          <MenuItem>
          <Link to="/explore">EXPLORE</Link>
          </MenuItem>
          <MenuItem>
          {!isAuthenticated ? (
            <Link className="loginbutton" to="/login" >Login</Link>
          ):(
            <div className="logged-buttons">
            <Link className="loginbutton" to="/logout">Logout</Link>
            
            </div>
          )}
          </MenuItem>
         
        </Menu>
      </Hidden>
      <Hidden smDown>
        {/* Show the full menu on medium and larger screens */}
        <Container>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/"><img src="https://www.shutterstock.com/image-vector/alumni-badge-graduation-hat-icon-260nw-591791072.jpg" className="navbar-image" alt='no server'/></Link>
            Welcome Alumni's
          </Typography>
          <Link to="/home">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
          
         <Link to="/event">EVENTS</Link>
          <Link to="/profile">PROFILE</Link>
          <Link to="/explore">EXPLORE</Link>
          {!isAuthenticated ? (
            <Link className="loginbutton" to="/login" >Login</Link>
          ):(
            <div className="logged-buttons">
            <Link className="loginbutton" to="/logout">Logout</Link>
            
            </div>
          )}
        </Container>
      </Hidden>
    </Component>
  );
};

export default Topbar;
