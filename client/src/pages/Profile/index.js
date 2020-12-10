import React from "react";
import Navbar from "../../components/Navbar";
import { Typography } from "@material-ui/core";
import Form from "./Form";
import SaveProfileBTN from "../../components/Button/SaveProfileBTN";
import Card from "@material-ui/core/Card";
import PreviewBTN from "../../components/Button/PreviewBTN";

const Profile = () => {
  const [state, setState] = React.useState({});
  const handleInput = (e) => {
    let { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  return (
    <div>
      <Navbar />
      <Typography variant="h3">PROFILE</Typography>
      <Card>
        <Form handleInput={handleInput} state={state} />
        <PreviewBTN state={state} />
        <SaveProfileBTN />
      </Card>
    </div>
  );
};

export default Profile;
