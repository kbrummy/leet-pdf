import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '../Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">

        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Card />
            </Grid>
            <Grid item xs={3}>
              <Card />
            </Grid>
            <Grid item xs={3}>
              <Card />
            </Grid>
            <Grid item xs={3}>
              <Card />
            </Grid>
          </Grid>
        </div>

      </Container>
    </React.Fragment>
    
  );
}
