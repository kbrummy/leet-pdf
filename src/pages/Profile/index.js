import React from 'react';
import Navbar from '../../components/Navbar';
import { Typography } from '@material-ui/core';
import Form from './Form';



const Profile = () => {

    return (
        <div>
            <Navbar />
            <Typography variant="h3">
                PROFILE
            </Typography>
            <Form />
           
        </div>
    )
}

export default Profile;
