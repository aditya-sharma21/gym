import React from 'react'
import{ Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/gym.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '250px', xs: '70px'},
        ml: { sm: '70px' }
    }} position="relative" p='90px'>
        <Typography color ='#FF2625' fontWeight={600} fontSize='60px' >
            Fitness Club
        </Typography>
        <Typography color = 'black' fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb='100px' mt='100px'>
            Sweat, Smile <br /> Repeat
        </Typography>
        <Typography color ='black'  fontSize='25px' lineHeight='35px' mb={4}>
            Check out the most effective excercises
        </Typography>
        <Button variant='contained' color='error' href='#excercises' sx={{backgoundColor: '#ff2625', padding: '10px'}}>Explore Excercises</Button>
        <Typography
            fontWeight={600} color='#ff2625' sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}}} fontSize='200px'>Excercises
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner