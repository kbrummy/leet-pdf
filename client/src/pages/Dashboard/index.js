import React from "react";
import Navbar from "../../components/Navbar";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";

import Header from "../../components/Header";
import Divider from "@material-ui/core/Divider";
import Sidebar from "../Sidebar";
import Preview from "../Preview";
import Profile from "../Profile";

const useStyles = makeStyles((theme) => ({
  root: {
    //   display:"block",
    //   height:"100%",
    //   width:"100%",
    //   display:"block",
  },
  paper: {
    height: 500,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  // data: {
  //     height:"100%",
  //     alignItem: "center",
  // },
  preview: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({clients : [], clientID: null, client: {}});
  const handleInput = (e) => {
    let { id, value } = e.target;
    setState({ ...state, client: {...state.client, [id]: value }});
  };

  React.useEffect(() => {
    const url = new URL(window.location.origin);
    url.port = 3001;
    url.pathname = "/api/profile";

    fetch(url.href, {
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
    const url = new URL(window.location.origin);
    url.port = 3001;
    url.pathname = "/api/profile/" + clientId;

    fetch(url.href, {
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
          <Preview />
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
