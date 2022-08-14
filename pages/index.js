import React, { Fragment } from 'react';

import Head from 'next/head';




const HomePage = (props) => {
   
  return (
    <Fragment>
    <Head>
        <title>Drum Class</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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
