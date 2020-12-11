import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';

import Header from '../../components/Header';
import Divider from '@material-ui/core/Divider';
import Sidebar from '../Sidebar'
import Preview from '../Preview';
import Profile from '../Profile';


const useStyles = makeStyles((theme) => ({
    root: {
    //   display:"block",
    //   height:"100%",
    //   width:"100%",
    //   display:"block",
    },
    paper: {
      height: 500,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    // data: {
    //     height:"100%",
    //     alignItem: "center",
    // },
    preview: {
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
    },

  }));

const Dashboard = () => {
  
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Navbar />
            <Header />
            <Divider />
            <Grid container spacing={3}>
              
                <Grid item xs={3}>
                    <Preview />
              
                </Grid>

                <Grid item xs={6} className={classes.profile}>
                    <Profile />
                </Grid>
                <Grid item xs={3} className={classes.data}>
                    <Box className={classes.preview}>
                        <Sidebar />
                    </Box>
               
                </Grid>

            </Grid>
            <Divider />
           <Footer />
        </div>
    )
}

export default Dashboard;
