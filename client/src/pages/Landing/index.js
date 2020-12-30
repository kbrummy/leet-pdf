import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Copyright from './Copyright';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import avatar from "../../static/Leet.jpg";
import Axios from "axios"
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    border: "2px solid red",
    width: "120px",
    height: "120px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const SignUp = () => {
  let history = useHistory();
  const classes = useStyles();
  const [state, setState] = useState({});
  const handleInput = (e) => {
    let { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} src={avatar} alt="Leet Logo" />
        <Typography component="h1" variant="h5">
          Sign up for Leet
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id="first_name"
              label="First Name"
              name="first_name"
              placeholder="First Name"
              variant="outlined"
              color="secondary"
              value={state.first_name}
              onChange={handleInput}
              fullWidth
              autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id="last_name"
              label="Last Name"
              name="last_name"
              placeholder="Last Name"
              variant="outlined"
              color="secondary"
              value={state.last_name}
              onChange={handleInput}
              fullWidth
              autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
              id="email_address"
              label="Email Address"
              name="email_address"
              placeholder="Email Address"
              variant="outlined"
              color="secondary"
              value={state.email_address}
              onChange={handleInput}
              fullWidth
              autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
              id="password"
              label="Password"
              name="password"
              placeholder="********"
              variant="outlined"
              color="secondary"
              value={state.password}
              onChange={handleInput}
              fullWidth
              autoFocus
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={(event)=>{
              event.preventDefault()
              console.log("log State", state)
              Axios.post('/auth/register', state)
          .then(data => {
            history.push("/login")
            console.log(data)
          })
          .catch(err => console.log(err))}
          }
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUp;
