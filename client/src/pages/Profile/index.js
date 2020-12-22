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

const Profile = ({handleInput, state}) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root} spacing={0} item xs={12}>
        <Card>
          <Form handleInput={handleInput} state={state.client} />
          <PreviewBTN state={state.client} />
          <SaveProfileBTN state={state.client} />
        </Card>
      </Grid>
    </div>
  );
};

export default Profile;
