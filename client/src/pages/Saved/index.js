import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Form from '../../components/Form/EmptyForm';
import Navbar from '../../components/Navbar';
import Sidebar from "../Sidebar";

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
        paddding:"1rem",
        background: "#c0c2c4",
    },
}));

const Saved = () => {
    const classes = useStyles();

    const [state, setState] = React.useState({clients : [], clientID: null, client: {}});
    const handleClientInput = (e) => {};

    React.useEffect(() => {
        const url = new URL("https://tranquil-coast-14497.herokuapp.com/");
        // url.port = 3001;
        url.pathname = "/api/profile";
    
        fetch(url.href, {
          method: "GET",
        })
          .then((res) => {
            res.json().then((clients) => {
              setState({ ...state, clients : clients });
            });
          })
          .catch((error) => alert(error.message));
      }, []);

    return (
        <div>
        <Navbar />
        <Card Grid className={classes.mainContainer}>
            <Typography varient="h3" className={classes.heading}>
            Saved PDFs
            </Typography>
            <Sidebar onClick={handleClientInput} state={state}/>
        </Card>
        </div>
    )
}

export default Saved;