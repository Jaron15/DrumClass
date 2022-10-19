import { Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react'
import VideoCard from './VideoCard';

function SearchResults(props) {
    const videos = props.videos; 
  return (
    <Fragment>
            <Grid container rowSpacing={1} direction="row" sx={{height: '100%', width: '100%', marginLeft: {xs:10,xl: 3}}}>
            {videos.map((video, index) => (
                <Grid item sx={{width: '33vh', mx: {sm: 1, md: 1}}}>
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
      </Grid>
    ))}
            </Grid>
      </Fragment>
  )
}

export default SearchResults