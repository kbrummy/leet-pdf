import React from 'react';
import Navbar from '../../components/Navbar';
import { Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../components/Footer';
import Form from './Form';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: "#dee3e2",
        padding: "3rem",
    },
}));

const Create = () => {
    const classes = useStyles();
    return (
        <div>
        <Navbar />
    
        <Card Grid className={classes.mainContainer}>
            <Typography varient="h3">
                CREATE NEW PDF
            </Typography>
            <Form />
        </Card>
       
        <Footer />
        </div>
    )
}

export default Create;
