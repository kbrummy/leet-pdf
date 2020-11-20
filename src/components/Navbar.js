import React,{useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer'
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
} from '@material-ui/core';
import {
  ArrowBack,
  Home,
} from '@material-ui/icons';


import avatar from "./Leet.jpg";

// CSS STYLES
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "darkgrey",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin:'0.5rem auto',
    width: theme.spacing(13),  
    height: theme.spacing(13),
  },
  listItem: {
    color: 'black'
  }
}));

const menuItems = [
  {
    listIcon: <Home/>,
    listTest: "Home"
  },
  // {
  //   listIcon: <Profile/>,
  //   listTest: "Profile"
  // },
  // {
  //   listIcon: <Register/>,
  //   listTest: "Register"
  // },
  // {
  //   listIcon: <Logout/>,
  //   listTest: "Logout"
  // },
]

const Navbar = () => {
  const [state, setState] =  useState ({
    right: false
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = slider => (
    <Box 
    className={classes.menuSliderContainer} 
    component='div'
    onClick={toggleSlider(slider, false)}
    >
    <Avatar className={classes.avatar} src={avatar} alt="Leet Logo" />
    <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listItem} 
            primary={lsItem.listTest}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
  return (
    <>
      <Box compnent='navbar'>
        <AppBar position='static' style={{ background: '#222' }}>
            <Toolbar>
              <IconButton onClick={toggleSlider("right", true)}>
                <ArrowBack style={{ color: 'red' }}/>
              </IconButton>   
              <Typography variant='h5' style={{color: 'grey'}}>
                Leet
              </Typography>   
              <MobileRightMenuSlider 
              anchor='right'
              open={state.right}
              onClose={toggleSlider("right", false)}
              >
                {sideList("right")}
              </MobileRightMenuSlider>
            </Toolbar>
          </AppBar>
      </Box>
   </>
  );
};


export default Navbar;