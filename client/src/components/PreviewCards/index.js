import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Cards from '../Card/Card.js';

// import passport from '../../static/img/passport.jpg';
// import nameChange from '../../static/img/nameChange.jpg';
// import voter from '../../static/img/voter.ipg';

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

export default function PreviewCards() {
  const classes = useStyles();

  return (

    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root}>

        <Grid item xs={4} md={6}>
          <Cards />
        </Grid>

      </Container>
    </React.Fragment>
    
  );
}
