import React from 'react';
import { Typography, Card, makeStyles } from '@material-ui/core';
import Navbar from '../../components/Navbar';
import Sidebar from "../Sidebar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
      backgroundColor: "#dee3e2",
      padding: "3rem",
  },
  heading: {
      fontSize: "50px",
      fontweight: "bold",
      color: "#2e3236",
      textAlign: "center",
      paddding:"1rem",
      background: "#c0c2c4",
  },
}));

const Saved = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({clients : [], clientID: null, client: {}});
  const handleClientInput = (e) => {};

  React.useEffect(() => {
    let state = this.state;
    const url = new URL(process.env.SERVER_URL);
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

  return (
    <div>
    <Navbar />
    <Card Grid className={classes.mainContainer}>
        <Typography varient="h3" className={classes.heading}>
        Saved PDFs
        </Typography>
        <Sidebar onClick={handleClientInput} state={state}/>
    </Card>
    </div>
  )
}

export default Saved;