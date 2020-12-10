import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FontDownloadTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    header: {
      fontSize: "60px",
      fontWeight: "bold",
      padding: "3rem",
    },
  }));


const Header = () => {
    const classes = useStyles();
    return (
        <div>
          <Container variant="h2" className={classes.header} >
            Welcome to Leet! 
          </Container>
        {/* <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            className={classes.mainContainer}
            >
            
        </Grid> */}
        </div>
    )
}

export default Header;
