import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { STATES } from "mongoose";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Sidebar = ({ onClick, state}) => {
  const classes = useStyles();

  return (
  <div className={classes.root}>
    <h2>Clients</h2>
    <p>
      {state.clients.map((value, index) => {
        return <button onClick={onClick} key={value._id} data-id={value._id}>{value.first_name} {value.last_name}</button>
      })
    }
    </p>
  </div>
  );
};

export default Sidebar;
