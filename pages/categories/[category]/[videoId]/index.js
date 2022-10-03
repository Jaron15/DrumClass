import { Box } from '@material-ui/core';
import React from 'react'
import { Fragment } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import VideoList from '../../../../components/list/VideoList';

function SingleView(props) {

const videoLink = ('https://www.youtube.com/embed/' + props.video[0].id);
  return (
    <Fragment>
      <Typography variant='h4' sx={{
      fontFamily: "Rock Salt",
      fontWeight:'bold',
      marginTop:'2vh', 
      marginBottom:'2vh',
      textAlign: 'center'}} >{props.video[0].snippet.title}</Typography>
      <Paper elevation={5} sx={{
      alignItems: "center",
      justifyContent: 'center',
      textAlign: 'center',
      width: '80vh',
      margin: 'auto'
      }}>
    <iframe src={videoLink} frameBorder='0' width='100%' height='400' allowFullScreen></iframe>
    <Typography sx={{textAlign: 'start', fontWeight: 'bold', marginLeft: '1.5vh'}}>{props.video[0].snippet.channelTitle}</Typography>
    <Typography sx={{textAlign: 'start', textDecoration: 'underline', fontSize: '1.2vh', marginTop: '-.8vh', marginLeft: '1.5vh'}}>Visit Channel</Typography>
    <Accordion sx={{borderTop: 0,width: '80vh', textAlign: 'center', margin: 'auto'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Description</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{width: '80vh', textAlign: 'center', margin: 'auto'}}>
          <Typography sx={{fontSize: '1.35vh'}}>
          {props.video[0].snippet.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
    <Box sx={{margin: 'auto', width: '80%'}}>
      <Typography variant="h4" sx={{
          textAlign: "center",
          justifyContent: "center",
          marginTop: "2vh",
          marginBottom: "2vh",
          fontFamily: "Rock Salt",
        }}>More {props.category}</Typography>
    <VideoList videos={props.relatedVideos} />
    </Box>
    </Fragment>
  )
}
export async function getServerSideProps(context) {
    const videoId = context.params.videoId;
    const videoCat = context.params.category;
    const key  = process.env.API_KEY;
    console.log('RIGHT HERE' + key);
    const videoRes = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=' + videoId + '&key=' + key)
    const videoJson = await videoRes.json();
    const videoData = videoJson.items;
    const relatedVids = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + videoCat + '&maxResults=6&chart=mostPopular&key=' + key)
    const relatedJson = await relatedVids.json();
    const relatedData = relatedJson.items;
    const relatedVideos = relatedData.filter(video => video.id.videoId !== videoId)
    const relatedVidsFinal = relatedVideos.map(vid => ({...vid, catName: videoCat}))
    return {
        props: {
            video: videoData,
            category: videoCat,
            relatedVideos: relatedVidsFinal,
        }
    }

    
}
export default SingleView