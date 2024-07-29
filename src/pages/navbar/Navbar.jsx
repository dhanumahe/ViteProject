import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/admin">
          <ListItemText primary="Admin" />
        </ListItem>
        <ListItem button component={Link} to="/user">
          <ListItemText primary="User" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          HallBooking
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <Typography
            variant="body1"
            sx={{ mx: 2, textDecoration: 'none' }}
            component={Link}
            to="/"
            color="inherit"
          >
            Home
          </Typography>
          <Typography
            variant="body1"
            sx={{ mx: 2, textDecoration: 'none' }}
            component={Link}
            to="/contact"
            color="inherit"
          >
            Contact
          </Typography>
          <Typography
            variant="body1"
            sx={{ mx: 2, textDecoration: 'none' }}
            component={Link}
            to="/login"
            color="inherit"
          >
            Login
          </Typography>
          
          <IconButton
            edge="end"
            color="inherit"
            aria-label="profile"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
          >
            <PersonIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
      >
        <MenuItem component={Link} to="/admin" onClick={handleProfileMenuClose}>
          Admin
        </MenuItem>
        <MenuItem component={Link} to="/user" onClick={handleProfileMenuClose}>
          User
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
