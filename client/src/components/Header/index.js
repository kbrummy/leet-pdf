import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
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
  header: {
    fontWeight: "bold",
    fontSize: "40px",
    padding: "2rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Container variant="h2" className={classes.header}>
        Welcome to Leet!
      </Container>
      <div className={classes.root}></div>
    </div>
  );
};

export default Header;
