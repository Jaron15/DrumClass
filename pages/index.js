import React, { Fragment } from 'react';

import Head from 'next/head';
import Hero from '../components/hero/Hero';
import VideoCard from '../components/list/VideoCard';
import { Container } from '@material-ui/core';
import VideoList from '../components/list/VideoList';




const HomePage = (props) => {
   
  return (
    <Fragment>
    
    <Hero />
    <Container>
   <VideoList />
   <VideoList />
   </Container>
    </Fragment>
  )
}
export default HomePage
