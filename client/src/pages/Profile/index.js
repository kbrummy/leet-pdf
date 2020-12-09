import React from 'react';
import Navbar from '../../components/Navbar';
import { Typography } from '@material-ui/core';
import Form from './Form';
import SaveProfileBTN from '../../components/Button/SaveProfileBTN';
import Card from '@material-ui/core/Card';



const Profile = () => {

    return (
        <div>
            <Navbar />
            <Typography variant="h3">
                PROFILE
            </Typography>
            <Card>
                <Form />
                <SaveProfileBTN />
            </Card>
      
           
        </div>
    )
}

export default Profile;
