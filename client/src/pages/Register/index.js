import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import { Card, CardContent, CssBaseline, Button, Avatar, TextField, Typography, Container, makeStyles } from "@material-ui/core/";
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Landing() {
  let history = useHistory();
  const classes = useStyles();

  // get the user data
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email_address, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const userdata = {
    first_name: first_name,
    last_name: last_name,
    email_address: email_address,
    password: password,
  }

  // add a react hook for keeping track of the message feedback state
  const [message, setMessage] = useState(null)

  const register = () => {
    // check if user is registered
    Axios.post('/auth/register', userdata)
    .then(res => {
      if (res.data.success === true && res.data.message === "user registration successful") {
        Axios.defaults.headers.common["Authorization"] = res.data.token;
        localStorage.setItem("leet-pdf", res.data.token);
        history.push('/dashboard');
      }
      // TODO: Add handling for additional scenarios, like the user account already exists
      else {
        // send error message to user
        setMessage(
          <Card className={useStyles.messages}>
            <CardContent>
              <Typography>
                Uh oh! Something went terribly wrong with trying to register your account.
              </Typography>
            </CardContent>
          </Card>
        )
      }
    })
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
        id="first_name"
        label="First Name"
        name="first_name"
        type="text"
        placeholder="First Name"
        variant="outlined"
        margin="normal"
        color="secondary"
        fullWidth
        autoComplete="first_name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        required
        id="last_name"
        label="Last Name"
        name="last_name"
        type="text"
        placeholder="Last Name"
        variant="outlined"
        margin="normal"
        color="secondary"
        fullWidth
        autoComplete="last_name"
        onChange={(e) => setLastName(e.target.value)}
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
          onChange={(e) => setEmailAddress(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
          />
        {/*TODO: Add a second password field, and add logic to verify passwords match before submitting*/}
        {message}
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
      </form>
      </div>
    </Container>
  );
}

export default Landing;