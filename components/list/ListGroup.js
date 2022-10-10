import React, { useEffect, useState } from 'react'
import {isMobile} from 'react-device-detect';
import { Button, Container, Box } from '@material-ui/core';
import VideoList from './VideoList';
import Typography from '@mui/material/Typography';



 function ListGroup(props) {
    const allVideos = props.allVideos;
    const [category, setCategory] = useState('')
    const [mobileView, setMobileView] = useState(false)
    const buttonBox =  {
      marginTop:10, 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-evenly'
    }
    const buttonStyle = {
      borderRadius: 35,
          backgroundColor: "white",
          fontSize: "1.25vh",
          marginBottom: 50,
          padding: 13,
          fontWeight: 'bold',
          width: '11vh'
    }
    const selectedButtonStyle = {
      borderRadius: 35,
          backgroundColor: "rgba(63, 180, 254, 0.6)",
          fontSize: "1.25vh",
          marginBottom: 50,
          padding: 13,
          fontWeight: 'bold',
          width: '11vh',
          color: 'white',
    }
    const catSelectHandler = (props) => {
      setCategory(props)
    }

  useEffect(() => { 
    if(isMobile) {
    setMobileView(true)
    const initialSelect = allVideos[0][0].catName
    setCategory(initialSelect)
  }}, [])


    
    if (mobileView)  {
      return (
          <Box style={buttonBox}>
        {allVideos.map(vids =>  {
          const cat = vids[0].catName;
          const btn  =  cat.slice(-0,-12)
            return (    
        <Button 
        onClick={() => catSelectHandler(cat)}
        style={cat === category ? selectedButtonStyle : buttonStyle}
        variant='contained'>{btn}</Button>
        )
      })}
      </Box>        
      )
    }
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