import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileLeftMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  BottomNavigationAction,
} from "@material-ui/core";
import {
  Home,
  // AddBoxIcon,
  // TurnedInIcon,
  // ExitToAppIcon,
} from "@material-ui/icons";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AddBoxIcon from "@material-ui/icons/AddBox";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "@material-ui/icons/GitHub";

import avatar from "../../static/Leet.jpg";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 300,
    backgroundColor: "#1d242b",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "white",
  },

  names: {
    marginLeft: "auto",
    color: "white",
  },
  root: {
    color: "white",  
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listTest: "Dashboard",
    listPath: "/dashboard",
  },
  {
    listIcon: <AccountBoxIcon />,
    listTest: "Profile",
    listPath: "/profile",
  },
  {
    listIcon: <AddBoxIcon />,
    listTest: "Create New PDF",
    listPath: "/create",
  },
  {
    listIcon: <TurnedInIcon />,
    listTest: "Saved PDF's",
    listPath: "/saved",
  },
  // Add link to the landing page
  {
    listIcon: <ExitToAppIcon />,
    listTest: "Logout",
    listPath: "/login",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Leet Logo" />
      <Divider />
      <List>
        {menuItems.map((items, key) => (
          <ListItem button key={key} component={Link} to={items.listPath}>
            <ListItemIcon className={classes.listItem}>
              {items.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={items.listTest}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box compnent="navbar">
        <AppBar position="static" style={{ background: "#1d242b" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("left", true)}>
              <MenuOpenIcon style={{ color: "red" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#dee3e2" }}>
              Leet
            </Typography>
            <MobileLeftMenuSlider
              anchor="left"
              open={state.left}
              onClose={toggleSlider("left", false)}
            >
              {sideList("left")}
            </MobileLeftMenuSlider>
        
            <Box m={1} className={classes.names}>
              Ian Astesana
              <BottomNavigationAction
                label="Ian Astesana"
                href="https://github.com/Greezon"
                target="_blank"
                className={classes.root}
                icon={<GitHubIcon />}
              />
              Kristin Brumfield
              <BottomNavigationAction
                href="https://github.com/kbrummy"
                target="_blank"
                className={classes.root}
                icon={<GitHubIcon />}
                />
              Alan Fernandes
              <BottomNavigationAction
                href="https://github.com/anoblefernandes"
                target="_blank"
                className={classes.root}
                icon={<GitHubIcon />}
              />
              Alicia Gorton
              <BottomNavigationAction
                href="https://github.com/aliciagorton"
                target="_blank"
                className={classes.root}
                icon={<GitHubIcon />}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
