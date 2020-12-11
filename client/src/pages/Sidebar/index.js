import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
    margin: {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
}));

const Sidebar = () => {
    const classes = useStyles();

     return (

        <div className={classes.root}>
            History 

        </div>
        
  );

}

export default Sidebar;
