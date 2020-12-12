import React from "react";
import Navbar from "../../components/Navbar";
import { Grid, Typography } from "@material-ui/core";
import Form from "../Profile/Form.js";
import SaveProfileBTN from "../../components/Button/SaveProfileBTN";
import Card from "@material-ui/core/Card";
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

const ProfilePage = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({});
  const handleInput = (e) => {
    let { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  return (
    <div>
      <Navbar />
      <Grid className={classes.mainContainer} spacing={2} item xs={12}>
        <Typography
          varient="h3"
          style={{ padding: "1rem" }}
          className={classes.heading}
        >
          Profile
        </Typography>

        <Card>
          <Form handleInput={handleInput} state={state} />
          <SaveProfileBTN />
        </Card>
      </Grid>
    </div>
  );
};

export default ProfilePage;
