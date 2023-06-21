import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const ExcerciseVideos = ({excerciseVideos, name }) => {
    console.log(excerciseVideos)
    if(!excerciseVideos.length) return 'Loading...';

  return (
    <Box sx={{ marginTop: {lg: '200px', xs: '20px'}}} p='20px'>
        <Typography variant='h3' mb='33px'>
            Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> excercise videos
        </Typography>
        <Stack alignItems='center' flexWrap='wrap' justifyContent='flex-start'
        sx={{
            flexDirection: {lg: 'row' },
            gap:{lg: '60px', xs: '0px'},
        }}
        >
            {excerciseVideos?.slice(0,3).map((item, index) =>(
                <a
                    key={index}
                    className='excercise-video'
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target='_blank'
                    rel='noreferrer'
                    >
                    <img  src={item.video.thumbnails[0].url} alt={item.video.title} />
                    <Box>
              <Typography variant='h6' color="#000">
                {item.video.title}
              </Typography>
              <Typography variant='h6' color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
                </a>
            ))}
        </Stack>
    </Box>
  )
}

export default ExcerciseVideos