import React from "react";
import { Grid } from "@material-ui/core";
import Form from "./Form";
import SaveProfileBTN from "../../components/Button/SaveProfileBTN";
import Card from "@material-ui/core/Card";
import PreviewBTN from "../../components/Button/PreviewBTN";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const Profile = () => {

  const [state, setState] = React.useState({});
  const handleInput = (e) => {
    let { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  return (

    <div>
      <Grid  container className={classes.root} spacing={0} item xs={12} >
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Card>
          <Form handleInput={handleInput} state={state} />
          <PreviewBTN state={state} />
          <SaveProfileBTN />
        </Card>
      </Grid>
 
    </div>
  );
};

export default Profile;
