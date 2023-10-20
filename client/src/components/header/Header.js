import React, { useState } from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  styled,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"

const Component = styled(AppBar)`
  background: skyblue;
  color: black;
`;

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({isAuthenticated}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Component className='headed'>
      <Container >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/"><img src="https://www.shutterstock.com/image-vector/alumni-badge-graduation-hat-icon-260nw-591791072.jpg" className="navbar-image" alt='no server'/></Link>
            Welcome Alumni's
          </Typography>
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
        </Hidden>
        <Hidden smDown>
          {/* Show the full menu on medium and larger screens */}
          <Link to="/home" className='heading'>HOME</Link>
          <Link to="/about" className='heading'>ABOUT</Link>
          <Link to="/event" className='heading'>EVENT</Link>
          <Link to="/contact" className='heading'>CONTACT</Link>
          
          <Link to="/profile" className='heading'>PROFILE</Link>
          <Link to="/explore" className='heading'>EXPLORE</Link>
          {!isAuthenticated ? (
            <Link className="loginbutton" to="/login" >Login</Link>
          ):(
            <div className="logged-buttons">
            <Link className="loginbutton" to="/logout">Logout</Link>
            
            </div>
          )}
        </Hidden>
      </Container>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <MenuItem onClick={handleDrawerClose}>
          <Link to="/home">HOME</Link>
        </MenuItem>
        <MenuItem onClick={handleDrawerClose}>
          <Link to="/about">ABOUT</Link>
        </MenuItem>
        <MenuItem onClick={handleDrawerClose}>
          <Link to="/contact">CONTACT</Link>
        </MenuItem>
        
        <MenuItem onClick={handleDrawerClose}>
          <Link to="/profile">PROFILE</Link>
        </MenuItem>
        <MenuItem onClick={handleDrawerClose}>
          <Link to="/explore">EXPLORE</Link>
        </MenuItem>
        <MenuItem>
        {!isAuthenticated ? (
            <Link className="loginbutton" to="/login" >Login</Link>
          ):(
            <div className="logged-buttons">
            <Link className="loginbutton" to="/logout">Logout</Link>
            
            </div>
          )}</MenuItem>
      </Drawer>
    </Component>
  );
};

export default Header;
