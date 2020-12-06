import React from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import PreviewCards from '../../components/PreviewCards';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card } from '@material-ui/core';
import Select from '../../components/SelectPDF/index';
// import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
            <Typography variant="h3" className={classes.heading}>
                    Dashboard
                </Typography>
            <Grid container spacing={3}>
              
                <Grid item xs={2}>
                    <Header />
                </Grid>
                <Grid item xs={8}>
                    <Card className={classes.previewCards}>
                        <PreviewCards />
                        <Select />
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card className={classes.paper}>History for selected client</Card>
                </Grid>
                  {/* SECOND ROW */}
                <Grid item xs={2}>
                    <Card>Hi</Card>
                </Grid>
                <Grid item xs={8}>
                    <Card className={classes.previewCards}>
                        <PreviewCards />
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card className={classes.paper}>Another Suggestion??</Card>
                </Grid>
               
            </Grid>
            
           
        </div>
    )
}

export default Dashboard;
