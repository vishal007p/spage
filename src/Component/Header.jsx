import React from 'react';
import '../../styles/header/header.scss'
import { Box, Grid } from '@mui/material';
import HamburgerIcon from '../../src/assets/HamburgerIcon.png'
import Logo from '../../src/assets/logo.png';

const Header = () => {
    return <>
 

        <Box className='mainContainer'>
            <Grid container className='Content'>
                <Grid item xs={12} sm={3} md={8} className='Logo'>
                    <img src={Logo} alt="" srcset=""  />
                </Grid>
                <Grid item xs={12} sm={8} md={3} className='HeaderMenu'>
                    <ul>
                        <li>login</li>
                        <li> <button>Get Started</button></li>
                        <li><img src={HamburgerIcon} alt="" /></li>
                    </ul>
                </Grid>

            </Grid>

        </Box>



    </>;
}



export default Header;