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

function Login() {
  let history = useHistory();
  const classes = useStyles();
  const [email_address, set_email_address] = useState("");
  const [password, set_password] = useState("");
  const signin = () => {
    const userdata = {
      email_address: email_address, 
      password: password,
    }
    Axios
    .post('http://localhost:3001/auth/login', userdata)
    .then(res => {
      if (res.success) {
        Axios.defaults.headers.common["Authorization"] = res.token
        localStorage.setItem("jwtToken", res.token)
      }
      history.push("/dashboard")
    })
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
          autoFocus
           // onChange={handleInput}
          // value={state.email_address}
          onChange={(e) => set_email_address(e.target.value)}
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
          // value={state.password}
          // onChange={handleInput}
          onChange={(e) => 
            set_password(e.target.value)} 
          />
      </form>
        <Button  
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit} 
          onClick={signin}
          >
          Login
        </Button>
        <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/" variant="body2">
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
}

export default Login;