import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    background: "#1d242b",
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 300,
    },
    "& .MuiSvgIcon-root": {
      fill: "white",
      fontSize: "1.8rem",
    },
  },
  footerContainer: {
    backgroundColor: "#1d242b",
    color: "white",
    padding: "1rem",
    height: "auto",
  },
  subHeadingTwo: {
    textAlign: "center",
    padding: "0.5rem",
  },
});

const Footer = () => {
  const classes = useStyles();

    const classes = useStyles();

    return(
        <div className={classes.footerContainer}>
            <Typography className={classes.subHeadingTwo}>Created & Designed by: </Typography>
            <BottomNavigation width="auto" style={{background: "#1d242b"}}>
                <BottomNavigationAction
                    label="Ian Astesana"
                    href="https://github.com/Greezon"
                    target="_blank"
                    className={classes.root}
                    style={{padding: 0}}
                    icon={<GitHubIcon/>}
                />
                    {/* <Typography> */}
                        {/*  */}
                    {/* </Typography> */}
                
                {/* <Typography> */}
                    {/* Kristin Brumfield */}
                    {/* <BottomNavigationAction
                    href="https://github.com/kbrummy" target="_blank"
                    className={classes.root}
                    style={{padding: 0}}
                    icon={<GitHubIcon/>}
                    /> */}
                {/* </Typography> */}
                {/* <Typography> */}
                    {/* Alan Fernandes */}
                    {/* <BottomNavigationAction
                        href="https://github.com/anoblefernandes" target="_blank"
                        className={classes.root}
                        style={{padding: 0}}
                        icon={<GitHubIcon/>}
                    /> */}
                {/* </Typography> */}
                {/* <Typography> */}
                    {/* Alicia Gorton */}
                    {/* <BottomNavigationAction
                        href="https://github.com/aliciagorton" target="_blank"
                        className={classes.root}
                        style={{padding: 0}}
                        icon={<GitHubIcon/>}
                    /> */}
                {/* </Typography> */}
            </BottomNavigation>
        </div>
       
    );
}

export default Footer;
