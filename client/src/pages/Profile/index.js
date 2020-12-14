import React from "react";
import { Grid } from "@material-ui/core";
import Form from "./Form";
import SaveProfileBTN from "../../components/Button/SaveProfileBTN";
import Card from "@material-ui/core/Card";
import PreviewBTN from "../../components/Button/PreviewBTN";
import { makeStyles } from "@material-ui/core/styles";

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
    paddding: "1rem",
    background: "#c0c2c4",
  },
}));

const url = new URL(window.location.origin);
url.port = 3001;
url.pathname = "/api/profile";

fetch(url.href, {
  method: "GET"
}).then((res) => {
  res.json().then((clients) => {
    // List of clients on the server.
    console.dir(clients);
  });
}).catch(error => alert(error.message));

const Profile = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({});
  const handleInput = (e) => {
    let { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  return (
    <div>
      <Grid container className={classes.root} spacing={0} item xs={12}>
        <Card>
          <Form handleInput={handleInput} state={state} />
          <PreviewBTN state={state} />
          <SaveProfileBTN state={state} />
        </Card>
      </Grid>
    </div>
  );
};

export default Profile;
