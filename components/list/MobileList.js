import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { Fragment, useRef, useState } from 'react'
import VideoCard from './VideoCard'
import Carousel from 'react-elastic-carousel';


const MobileList = (props) => {
    const videos = props.videos; 
    
    return (
      <Fragment>
            <Stack sx={{alignItems: 'center', margin: {xs: 'none',md:'auto'}}}>
            {videos.map((video, index) => (
      <VideoCard
        data-value={index+1}
        key={video.id.videoId}
        id={video.id.videoId}
        image={video.snippet.thumbnails.high.url}
        title={video.snippet.title}
        description={video.snippet.description}
        channel={video.snippet.channelTitle}
        category={videos[0].catName}
      />
    ))}
            </Stack>
      </Fragment>
    );
}

export default MobileList