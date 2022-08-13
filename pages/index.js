import React, { Fragment } from 'react';

import Head from 'next/head';


const HomePage = (props) => {
   
  return (
    <Fragment>
    <Head>
        <title>Drum Class</title>
        <meta 
        name='description'
        contents="Free tool to learn how to drum at all levels!"
        />
    </Head>
   <h1>Hello world </h1>
    </Fragment>
  )
}
export default HomePage
