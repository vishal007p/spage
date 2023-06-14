import React from 'react';
import '../../styles/home/home.scss'
import { Box, Grid } from '@mui/material';
import SlideDown from '../../src/assets/SlideDown.png'
import Banner from '../../src/assets/banner.png'

const Home = () => {
    return <div className='Home'>
        <Box sx={{ flexGrow: 1 }} className='mainContainer'>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} className='contentbox'>
                <Grid item xs={12} sm={12} md={6} className='homeContent'>
                    <h1>Digital ID </h1>
                    <span>for products</span>
                    <p>Something cool is in  the making here.
                        Please come later to discover our solutions.
                        info@spagio.io</p>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className='HomeBanner'>
                    <button>HVAC</button>
                    <img src={Banner} alt="" width="100%" height="100%" />
                </Grid>
            </Grid>
        </Box>



        <div className='getStarted'>
            <div className='getBtn'>
                <button className='btn'>Get Started</button>
            </div>
            <div className='loginBtn'>
                <button>Login</button>
            </div>

        </div>


        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
            <img src={SlideDown} alt="" className='vert-move' />
        </Box>



    </div>;
}



export default Home;