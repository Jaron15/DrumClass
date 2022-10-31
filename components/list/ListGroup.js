import React, { Fragment, useEffect, useState } from 'react'
import {isMobile} from 'react-device-detect';
import { Button, Container, Box } from '@material-ui/core';
import VideoList from './VideoList';
import Typography from '@mui/material/Typography';
import MobileList from './mobileList';



 function ListGroup(props) {
    const allVideos = props.allVideos;
    const initialSelect = allVideos[0][0].catName
    const [mobileView, setMobileView] = useState(false)
    const [category, setCategory] = useState(initialSelect)
    const [selectedVideos, setSelectedVideos] = useState([])
    // button styles 
    const buttonBox =  {
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-evenly'
    }
    const buttonStyle = {
      borderRadius: 35,
          backgroundColor: "white",
          fontSize: "1.25vh",
          marginTop: 10,
          marginBottom: 10,
          padding: 13,
          fontWeight: 'bold',
          width: '11vh'
    }
    const selectedButtonStyle = {
      borderRadius: 35,
          backgroundColor: "#444",
          fontSize: "1.25vh",
          marginTop: 10,
          marginBottom: 10,
          padding: 13,
          fontWeight: 'bold',
          width: '11vh',
          color: 'white',
          boxShadow:'1px 1px 5px rgba(63, 180, 254, 0.6), 1px 1px 5px rgba(63, 180, 254, 0.6)'
    }
    //this effect checks if the user is on mobile and manages the selected videos
    //based on what category is selected 
    useEffect(() => { 
      if(isMobile) {
        setMobileView(true)
        const videos = allVideos.find(vids => vids[0].catName === category)
        setSelectedVideos(videos)
      }}, [category, isMobile])
      
      //function to handle changing categories
      const catSelectHandler = (props) => {
        setCategory(props);
      }
  
    if (mobileView)  {
      //mobile view
      return (
        <Fragment>
          <Box style={buttonBox}>
        {allVideos.map(vids =>  {
          const cat = vids[0].catName;
          const btnLabel = cat.slice(-0,-12)
            return (    
        <Button 
        onClick={() => catSelectHandler(cat)}
        style={cat === category ? selectedButtonStyle : buttonStyle}
        variant='contained'>{btnLabel}</Button>
        )
      })}
      </Box>
         <MobileList videos={selectedVideos} />
      </Fragment> 
      )
    }
    //desktop view
  return (
   <Container>
    {allVideos.map(vids =>  {
      const cat = vids[0].catName;
        return (
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
          {cat}
        </Typography>
     <VideoList videos={vids}/>
     </Container>
        )
    })}
  </Container>
  )
}

export default ListGroup