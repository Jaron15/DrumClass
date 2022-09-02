import React, { Fragment } from 'react';

import Head from 'next/head';
import Hero from '../components/hero/Hero';
import VideoCard from '../components/list/VideoCard';
import { Container } from '@material-ui/core';
import VideoList from '../components/list/VideoList';
import useSWR from 'swr'; 




const HomePage = (props) => {
    //   console.log('====================================');
    //   console.log(props);
    // console.log('====================================');
    const beginnerVideoData = props.bVideos;
    console.log(beginnerVideoData);
  
  return (
    <Fragment>
    
    <Hero />
    <Container>
   <VideoList videos={beginnerVideoData}/>
   {/* <VideoList /> */}
   </Container>
    </Fragment>
  )
}

export async function getStaticProps() {
  const key  = process.env.API_KEY
  const bResponse = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=Beginner drum lesson&maxResults=5&chart=mostPopular&key=' +  key)
    const bJson = await bResponse.json();
    const bData = bJson.items;
  const iResponse = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=Intermediate drum lesson&maxResults=5&chart=mostPopular&key=' + key)
    const iJson = await iResponse.json();
    const iData = iJson.items;
  const aResponse = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=Advanced drum lesson&maxResults=5&chart=mostPopular&key=' + key)
    const aJson = await aResponse.json();
    const aData = aJson.items;

  return {
    props: {
      bVideos: bData,
      iVideos: iData,
      aVidoes: aData
    },
    revalidate: 60
  };
}
export default HomePage

// props: {
//   videos: data.map((videos) => ({
//     title: videos.snippet.title
// }))
// }