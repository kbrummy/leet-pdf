import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          background: "#dee3e2",
        },
      },
      form: {
          backgroundColor: "white",
          padding: "4rem"
      },

  }));

const Form = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <form className={classes.form}>
                <Typography className={classes.subHeading}>Select from PDF options:</Typography>
                <Divider />
            </form>
        </div>
    )
};
export default Form;