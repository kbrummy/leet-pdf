import React , { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import avatar from "../../static/Leet.jpg";
import Axios from "axios";
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Landing() {
  let history = useHistory();
  const classes = useStyles();
  const register = () => {
    history.push("/dashboard")
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar className={classes.avatar} src={avatar} alt="Leet Logo">
          {/* <LockOutlinedIcon /> */}
      </Avatar>
      <Typography component="h1" variant="h5">
        Leet
      </Typography>
      <form className={classes.form} noValidate>
        
      <TextField
          required
          id="name"
          label="name"
          name="name"
          placeholder="name"
          variant="outlined"
          margin="normal"
          color="secondary"
          fullWidth
          autoFocus
        /> 
        <TextField
          required
          id="email_address"
          label="Email Address"
          name="email_address"
          type="email"
          placeholder="Email Address"
          variant="outlined"
          margin="normal"
          color="secondary"
          fullWidth
          autoComplete="email"
        />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          name="password"
          placeholder="********"
          variant="outlined"
          margin="normal"
          color="secondary"
          fullWidth
          autoFocus
          autoComplete="current-password"
          />
      </form>
        <Button  
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit} 
          onClick={register}
          >
          Register
        </Button>
      </div>
    </Container>
  );
}

export default Landing;