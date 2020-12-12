import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    alignText: "center",
  },
}));

export default function SaveProfileBTN() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        component={Link}
        to="/saved"
        onClick={(e) => {
          e.preventDefault()
        axios.post("api/profile",{})}}
      >
        Save
      </Button>
    </div>
  );
}
