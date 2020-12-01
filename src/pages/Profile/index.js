import React from 'react';
import Navbar from '../../components/Navbar';
import { Typography, Grid, Card } from '@material-ui/core';
import Form from './Form';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../components/Footer';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: "#dee3e2",
        padding: "3rem",
    },
    heading: {
        fontSize: "60px",
        fontweight: "bold",
        color: "#2e3236",
        textAlign: "center",
        paddding:"1rem",
        background: "#c0c2c4",
    },
    // formCard: {
    //     background: "#dee3e2",
    //     alignText: "center",
        
    // },
  }));

const Profile = () => {
    const classes = useStyles();
    return (
        <div>
        <Navbar />
        <Grid className={classes.mainContainer}>
            <Typography variant="h3" className={classes.heading}>
                Create Account
            </Typography>
            <Card className={classes.formCard}>
                <Form />
               
            </Card>
        </Grid>
        <Footer />
        </div>
    )
}

export default Profile;
