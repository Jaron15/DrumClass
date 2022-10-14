import { Box, Grid, Typography } from '@mui/material'
import React, { Fragment, useRef, useState } from 'react'
import VideoCard from './VideoCard'
import Carousel from 'react-elastic-carousel';




const VideoList = (props) => {
  const videos = props.videos;
  const responsive = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
  ];
  
  return (
    <Fragment>
          <Carousel breakPoints={responsive}>
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
          </Carousel>
    </Fragment>
  );
};

export default VideoList;

