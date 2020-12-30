import React from "react";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import Header from "../../components/Header";
import Divider from "@material-ui/core/Divider";
import Sidebar from "../Sidebar";
import Profile from "../Profile";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 500,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  preview: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

/*
Retrieve JWT from local storage, decode, and return data
*/
// const FetchUserData = () => {
//   // get token from local storage
//   const token = window.localStorage.getItem("leet-pdf");
//   // TODO: add logic to handle if token cannot be retrieved
//   const base64Url = token.split('.')[1];
//   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//   const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//   }).join(''));
//   return JSON.parse(jsonPayload);
// }

const Dashboard = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({clients : [], clientID: null, client: {}});
  
  const handleInput = (e) => {
    let { id, value } = e.target;
    setState({ ...state, client: {...state.client, [id]: value }});
  };

  React.useEffect(() => {
   
    fetch("/api/profile", {
      method: "GET",
    })
      .then((res) => {
        res.json().then((clients) => {
          setState({ ...state, clients : clients });
        });
      })
      .catch((error) => alert(error.message));
  }, []);

  const handleClientInput = (e) => {
    let clientId = e.target.dataset.id;
    if(!clientId) return;
    setState({ ...state, clientID: clientId});

    fetch("/api/profile/" + clientId, {
      method: "GET",
    })
      .then((res) => {
        res.json().then((client) => {
          if(client) {
            setState({ ...state, client : client });
          }
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <Header />
      <Divider />
      <Grid container spacing={3}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6} className={classes.profile}>
          <Profile handleInput={handleInput} state={state} />
        </Grid>
        <Grid item xs={3} className={classes.data}>
          <Box className={classes.preview}>
            <Sidebar onClick={handleClientInput} state={state}/>
          </Box>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
};

export default Dashboard;
