import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

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
    header: {
      alignItems: "left",
      fontSize: "40px",
      justifyContent: "left",
      padding: "3rem 0rem"
    },
}));


const Header = () => {
    const classes = useStyles();
    return (
        <div>
          <Container variant="h2" className={classes.header} >
            Welcome to Leet! 
          </Container>
          <div className={classes.root}>
            <Button variant="contained" size="medium" color="primary" className={classes.btn}>
              Select Client
            </Button>
            <Button variant="contained" size="medium" color="primary" className={classes.btn}>
              Create a new Client
            </Button>
            <Button variant="contained" size="medium" color="primary" className={classes.btn}>
              Select a PDF
            </Button>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                Upload
                </Button>
            </label>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
                </IconButton>
            </label>
        </div>
        </div>
    )
}

export default Header;
