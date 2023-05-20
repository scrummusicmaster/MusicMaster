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
          Music MAster
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Historia</Button>
          <Button color="inherit">Empleados</Button>
          <Button color="inherit">Agenda</Button>
          <Button color="inherit">Tienda</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List className="drawerList">
          <ListItem  onClick={handleDrawerClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem  onClick={handleDrawerClose}>
            <ListItemText primary="Historia" />
          </ListItem>
          <ListItem  onClick={handleDrawerClose}>
            <ListItemText primary="Empleados" />
          </ListItem>
          <ListItem  onClick={handleDrawerClose}>
            <ListItemText primary="Agenda" />
          </ListItem>
          <ListItem  onClick={handleDrawerClose}>
            <ListItemText primary="Tienda" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default NavBar;
