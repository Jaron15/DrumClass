import { Box, Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import {isMobile} from 'react-device-detect';
import VideoList from '../../../../components/list/VideoList';
import MobileList from '../../../../components/list/MobileList';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Router, useRouter } from 'next/router';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from "@mui/material";




const MyModal = styled("div") ({
  position: 'relative',
  borderRadius: 7,
  width: 400,
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  "@keyframes myEffect": {
    from: {
      opacity: 0,
      transform: "translateY(-200%)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  animation: 'myEffect 1s ease'
});

function SingleView(props) {
  const vidId = props.video[0].id;
  const [favorite, setFavorite] = useState(false)
  const [mobileView, setMobileView] = useState(false)
  const { query, push, router } = useRouter();
  const {id} = query
  
  useEffect(() => { 
    //favorites logic
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    if (favorites) {
    if (favorites.includes(vidId)) {
      setFavorite(true)
    }
    else  {
      setFavorite(false)
    }
}
    if(isMobile) {
      setMobileView(true)
    }}, [id,push])

const channelLink = ('https://www.youtube.com/channel/' + props.video[0].snippet.channelId)
const videoLink = ('https://www.youtube.com/embed/' + vidId);
// const router = useRouter();

//favorites button logic
function addFavoriteHandler() {
  if (localStorage.getItem('favorites') === null) {
    localStorage.setItem('favorites', '[]')
  } 
  var oldData = JSON.parse(localStorage.getItem('favorites'));
  oldData.push(vidId);

  localStorage.setItem('favorites', JSON.stringify(oldData));
  setFavorite(true);
  handleOpen();
}
function removeHandler() {
  const favorites = JSON.parse(localStorage.getItem('favorites'))
  const newArray = favorites.filter((vid) => {
    return (vid !== vidId)
  })
  localStorage.setItem('favorites', JSON.stringify(newArray))
  setFavorite(false)
}
// favorites modal 

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
     setTimeout(() => {
      handleClose()
     }, 1200)
  };
  const handleClose = () => setOpen(false);
  const FavoritesPopup = <div>
  <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
   hideBackdrop={mobileView ? false : true}
  >
    <Fade in={open}>
      <Box sx={{
    position: 'absolute',
    top: {xs: '13%',sm: '13%'},
    left: '50%',
    transform: 'translate(-50%, -50%)',}}>
      <MyModal sx={{width: {xs: 300, sm: 400}}}>
        <Typography id="transition-modal-description" variant="h6" sx={{ mt: .5, textAlign: 'center' }}>
          Added to Favorites
        </Typography>
      </MyModal>
      </Box>
    </Fade>
  </Modal>
</div>

if (mobileView) {
  return (
    
    <Fragment>
       {FavoritesPopup}

      <Paper elevation={5} sx={{
      alignItems: "center",
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
      margin: 'auto'
      }}>
        <Box sx={{width: '100%', height: '35vh'}}>
    <iframe src={videoLink} frameBorder='0' width='100%' height='100%' allowFullScreen></iframe>
    </Box>
      <Box sx={{display: 'flex'}}>
    <Typography sx={{textAlign: 'start',fontSize: '2.5vh', fontWeight: 'bold', width: '100%', padding: .5, paddingLeft: 2}}>{props.video[0].snippet.title}  </Typography>
    <Box style={{height: '100%', display: 'flex', flexDirection: 'column', alignSelf: 'center',justifyContent: 'center'}}>
    {!favorite ? <AddIcon onClick={addFavoriteHandler} sx={{fontSize: '4vh',alignItems: 'center', marginRight: '2vh' }}/>
    : <RemoveIcon onClick={removeHandler} sx={{fontSize: '4vh',alignItems: 'center', marginRight: '2vh' }}/>
    }
    </Box>
    </Box>
      <Divider />
      
        <Box>
        <a href={channelLink} style={{color: 'inherit', textDecoration: 'inherit'}}>
    <Typography sx={{textAlign: 'start', alignItems: 'center', fontWeight: 'bold', width: '100%', paddingLeft: 2,  }}>{props.video[0].snippet.channelTitle}</Typography>
    <Typography sx={{textAlign: 'start', textDecoration: 'underline', fontSize: '1.5vh', width: '100%',paddingLeft: 2, marginBottom: .5 }}>Visit Channel</Typography>
    </a>
    </Box>


    <Accordion sx={{borderTop: 0,width: '100%', textAlign: 'start',  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{alignItems: 'end'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:'black', fontWeight: 'bold'}} >Description</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{width: '100%', textAlign: 'center', margin: 'auto'}}>
          <Typography sx={{fontSize: '2vh'}}>
          {props.video[0].snippet.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
    <MobileList videos={props.relatedVideos} /> 
    </Fragment>
  )}

  return (
    <Fragment>
      {FavoritesPopup}

      {/* <ArrowBackIosIcon 
      onClick={() => router.back()}
      sx={{margin: 3, marginLeft: 10, fontSize: 50,'&:hover': {
        cursor: "pointer",
      },}}/> */}
      <Typography variant='h4' sx={{
      fontFamily: "Rock Salt",
      fontWeight:'bold',
      marginTop:'9vh', 
      marginBottom:'2vh',
      textAlign: 'center'}} >{props.video[0].snippet.title}</Typography>

      <Paper elevation={5} sx={{
      alignItems: "center",
      justifyContent: 'center',
      textAlign: 'center',
      width: {xs:'50vh', md:'80vh'},
      margin: 'auto'
      }}>
    <iframe src={videoLink} frameBorder='0' width='100%' height='400' allowFullScreen></iframe>
    <Box style={{display: 'flex', flexDirection: 'row'}}>
      <Box style={{width: '50%'}}>
    <Typography style={{textAlign: 'start', fontWeight: 'bold', marginLeft: '1.5vh'}}>{props.video[0].snippet.channelTitle}</Typography>
    <Typography style={{textAlign: 'start', textDecoration: 'underline', fontSize: '1.2vh', marginTop: '-.8vh', marginLeft: '1.5vh'}}>Visit Channel</Typography>
    </Box>
       <Box style={{width: '50%', display: 'flex', justifyContent: 'end', cursor: 'pointer'}}>
    {!favorite ? <AddIcon onClick={addFavoriteHandler} sx={{fontSize: '4vh',alignItems: 'center', marginRight: '2vh' }}/>
    : <RemoveIcon onClick={removeHandler} sx={{fontSize: '4vh',alignItems: 'center', marginRight: '2vh' }}/>
    }
 </Box>
    </Box>
    
    <Accordion sx={{borderTop: 0,width: '100%', textAlign: 'center', margin: 'auto'}}>
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
    const key  = process.env.NEXT_PUBLIC_API_KEY;
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