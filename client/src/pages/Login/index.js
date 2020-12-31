import React , { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Card, CardContent, Container, makeStyles }  from "@material-ui/core";
import avatar from "../../static/Leet.jpg";
import Axios from "axios";


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
  messages: {
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  console.log('function login in Login/index.js');

  let history = useHistory();
  const classes = useStyles();
  const [email_address, set_email_address] = useState("");
  const [password, set_password] = useState("");
  const register = () => {
    history.push("/register")
  };

  // add a react hook for keeping track of the message feedback state
  const [message, setMessage] = useState(null)

  const signin = () => {

    console.log('signin in Login/index.js');

    const userdata = {
      email_address: email_address, 
      password: password,
    }

    Axios.post('/auth/login', userdata)
    .then(res => {
      if (res.data.success === true) {
         // route user to the dashboard
         console.log('res.success === true');
        Axios.defaults.headers.common["Authorization"] = res.data.token;
        localStorage.setItem("leet-pdf", res.data.token);
        history.push("/dashboard");
      }
      else if (res.data.success === false && res.data.message === 'user account was not found'){
        // send error message to user
        setMessage(
          <Card className={useStyles.messages}>
            <CardContent>
              <Typography>
                Cannot find user account. Check your email and password are correct.
              </Typography>
            </CardContent>
          </Card>
        )
      }
      else {
        // send error message to user
        setMessage(
          <Card className={useStyles.messages}>
            <CardContent>
              <Typography>
                Uh oh! Something went terribly wrong with trying to log you in.
              </Typography>
            </CardContent>
          </Card>
        )
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar className={classes.avatar} src={avatar} alt="Leet Logo"/>
      <Typography component="h1" variant="h5">
        Leet
      </Typography>
      <form 
      className={classes.form} 
      noValidate
      onSubmit={event => event.preventDefault()}
      >
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
          onChange={(e) => set_password(e.target.value)} 
          />
        {message}
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
      </form>
        <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={register} variant="body2">
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
}

export default Login;