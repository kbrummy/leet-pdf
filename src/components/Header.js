import React from 'react'
import { Avatar, Box } from '@material-ui/core';
import avatar from './Leet.jpg'

const Header = () => {
    return (
        <Box>
            <Avatar src={avatar} alt = "Leet Logo" />
        </Box>
    );
};

export default Header
