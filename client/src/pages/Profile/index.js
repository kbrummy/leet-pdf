import React from "react";
// import Navbar from "../../components/Navbar";
import { Typography } from "@material-ui/core";
import Form from "./Form";
import SaveProfileBTN from "../../components/Button/SaveProfileBTN";
import Card from "@material-ui/core/Card";
import PreviewBTN from "../../components/Button/PreviewBTN";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const Profile = () => {
  const [state, setState] = React.useState({});
  const handleInput = (e) => {
    let { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <Typography variant="h3">PROFILE</Typography>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Card>
        <Form handleInput={handleInput} state={state} />
        <PreviewBTN state={state} />
        <SaveProfileBTN />
      </Card>
    </div>
  );
};

export default Profile;
