import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
// import Data from './Data';
import Profile from '../Profile';
import Header from '../../components/Header';
import Divider from '@material-ui/core/Divider';
import Sidebar from '../Sidebar'
import Preview from '../Preview';


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
    // const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    // const handleChange = (event) => {
    //     setSpacing(Number(event.target.value));
    //   };

    return (
        <div className={classes.root}>
            <Navbar />
            <Header />
            <Divider />
            <Grid container spacing={3}>
              
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>

                <Grid item xs={7} className={classes.profile}>
                    <Profile />
                </Grid>
                <Grid item xs={3} className={classes.data}>
                    <Box className={classes.preview}>
                    {/* <Data /> */}
                    <Preview />
                    </Box>
               
                </Grid>

            </Grid>
            <Divider />
           <Footer />
        </div>
    )
}

export default Dashboard;
