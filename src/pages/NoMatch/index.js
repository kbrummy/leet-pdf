import React from "react";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

function NoMatch() {
const classes = useStyles();
  return (
      <div>
            <Typography varient="h1" className={classes.heading}>
                404 Page Not Found
            </Typography>
      </div>

  );
}

export default NoMatch;
