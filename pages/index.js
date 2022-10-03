import React, { Fragment } from 'react';

import Head from 'next/head';
import Hero from '../components/hero/Hero';
import VideoCard from '../components/list/VideoCard';
import { Container } from '@material-ui/core';
import VideoList from '../components/list/VideoList';
import Typography from '@mui/material/Typography';
import ListGroup from '../components/list/ListGroup';

const HomePage = (props) => {
  const allVideos = props.videos
  console.log(allVideos);
  return (
    <Fragment>
    <Hero />
    <Container>
    <ListGroup allVideos={allVideos} />
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
 let allVideos = [];
 allVideos.push(bData, iData, aData) 
  return {
    props: {
      videos: allVideos
    },
    // revalidate: 60
  };
}
export default HomePage
