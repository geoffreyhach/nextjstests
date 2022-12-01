import React from 'react';
import Link from 'next/link';
import { Stack, Typography } from '@mui/material';


function NavBar() {
    return (
        <Stack
        component="header"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{backgroundColor:"primary.main",
            padding:"1rem"}}
        >
            <Typography color="white">HEADER</Typography>
            <Stack
            component="nav"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap="1rem">
                <Link href="/">Home</Link>
                <Link href='/blog'>Blog</Link>
            </Stack>
            
        </Stack>
    );
}

export default NavBar;