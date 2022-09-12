import React, { Fragment } from 'react';

import Head from 'next/head';
import Hero from '../components/hero/Hero';
import VideoCard from '../components/list/VideoCard';
import { Container } from '@material-ui/core';
import VideoList from '../components/list/VideoList';
import Typography from '@mui/material/Typography';




const HomePage = (props) => {
    const beginnerVideoData = props.bVideos;
    const intermediateVideoData = props.iVideos;
    const advancedVideoData = props.aVideos;
  
  return (
    <Fragment>
    <Hero />
    <Container>
    <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          justifyContent: "center",
          marginTop: "2vh",
          marginBottom: "2vh",
          fontFamily: "Rock Salt",
        }}
      >
        {beginnerVideoData[0].catName}
      </Typography>
   <VideoList videos={beginnerVideoData}/>
   <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          justifyContent: "center",
          marginTop: "2vh",
          marginBottom: "2vh",
          fontFamily: "Rock Salt",
        }}
      >
        {intermediateVideoData[0].catName}
      </Typography>
   <VideoList videos={intermediateVideoData}/>
   <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          justifyContent: "center",
          marginTop: "2vh",
          marginBottom: "2vh",
          fontFamily: "Rock Salt",
        }}
      >
        {advancedVideoData[0].catName}
      </Typography>
   <VideoList videos={advancedVideoData}/>
   </Container>
    </Fragment>
  )
}

export async function getStaticProps() {
  const key  = process.env.API_KEY
  const bResponse = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=Beginner drum lesson&maxResults=5&chart=mostPopular&key=' +  key)
    const bJson = await bResponse.json();
    const bDataBefore = bJson.items;
    const bData = bDataBefore.map(vid => ({...vid, catName: 'Beginner Drum Lessons'})) 
  const iResponse = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=Intermediate drum lesson&maxResults=5&chart=mostPopular&key=' + key)
    const iJson = await iResponse.json();
    const iDataBefore = iJson.items;
    const iData = iDataBefore.map(vid => ({...vid, catName: 'Intermediate Drum Lessons'})) 
  const aResponse = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=Advanced drum lesson&maxResults=5&chart=mostPopular&key=' + key)
    const aJson = await aResponse.json();
    const aDataBefore = aJson.items;
    const aData = aDataBefore.map(vid => ({...vid, catName: 'Advanced Drum Lessons'})) 

  return {
    props: {
      bVideos: bData,
      iVideos: iData,
      aVideos: aData,
    },
    // revalidate: 60
  };
}
export default HomePage
