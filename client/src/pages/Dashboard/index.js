import React from 'react';
import Navbar from '../../components/Navbar';
// import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card } from '@material-ui/core';
import Data from './Data';
import Profile from '../Profile';
import Header from '../../components/Header';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height:"100%",
      width:"100%",
      display:"block",
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
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
                  
                </Grid>


                <Grid item xs={7}>
                    <Card className={classes.profile}>
                        <Profile />
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Data />
                </Grid>

            </Grid>
            
           <Footer />
        </div>
    )
}

export default Dashboard;
