import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./Navbar.css"

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar
          style={{
            backgroundColor: "black",
          }}
        >
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <span className="material-icons-outlined">menu</span>
          </IconButton>
          <Typography variant="h6" className="title">
            My Website
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List className="drawerList">
          <ListItem  onClick={handleDrawerClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem  onClick={handleDrawerClose}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem  onClick={handleDrawerClose}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem  onClick={handleDrawerClose}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default NavBar;
