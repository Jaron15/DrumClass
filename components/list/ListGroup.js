import React from 'react'
import { Container } from '@material-ui/core';
import VideoList from './VideoList';
import Typography from '@mui/material/Typography';

function ListGroup(props) {
    const allVideos = props.allVideos;
  return (
   <Container>
    {allVideos.map(vids =>  {
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
          {vids[0].catName}
        </Typography>
     <VideoList videos={vids}/>
     </Container>
        )
      
    })}
  </Container>
  )
}

export default ListGroup