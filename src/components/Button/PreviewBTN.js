import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    alignText: "center",
  },
}));

export default function PreviewBTN() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Print/Preview
      </Button>
    </div>
  );
}