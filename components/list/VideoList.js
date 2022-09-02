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
  
  const videoCards = [videos.map((video, index) => (
    <VideoCard
      data-value={index+1}
      key={video.id.videoId}
      id={video.id.videoId}
      image={video.snippet.thumbnails.high.url}
      title={video.snippet.title}
      description={video.snippet.description}
    />
  ))];
  const DUMMY_VIDEOS = [
    {
      id: "1",
      image:
        "https://image.shutterstock.com/image-illustration/3d-render-number-one-glowing-260nw-1890767740.jpg",
      title: "first",
      description: "First video",
    },
    {
      id: "2",
      image:
        "https://st.depositphotos.com/1001311/3411/i/600/depositphotos_34119793-stock-photo-3d-golden-number-collection-2.jpg",
      title: "second",
      description: "second video",
    },
    {
      id: "3",
      image:
        "https://sagehills.alpineschools.org/wp-content/uploads/sites/34/2015/10/red-number-3.jpg",
      title: "third",
      description: "third video",
    },
    {
      id: "4",
      image:
        "https://c8.alamy.com/comp/B2604H/big-house-number-four-4-pressed-into-concrete-in-london-B2604H.jpg",
      title: "fourth",
      description: "fourth video",
    },
    {
      id: "5",
      image: "https://www.svgimages.com/svg-image/s5/number-5-256x256.png",
      title: "fifth",
      description: "fifth video",
    },
  ];
  const [] = useState();
  const listRef = useRef();
  const scrollRight = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    console.log(distance);
    listRef.current.style.transform = `translate(-65vh)`;
  };
  const scrollLeft = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    listRef.current.style.transform = `translate(0px)`;
  };

  return (
    <Fragment>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          justifyContent: "center",
          marginTop: "2vh",
          marginBottom: "1vh",
          fontFamily: "Rock Salt",
        }}
      >
        Category
      </Typography>
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
    />
  ))}
          </Carousel>
    </Fragment>
  );
};

export default VideoList;

