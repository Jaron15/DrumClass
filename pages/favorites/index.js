import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react'
import MobileList from '../../components/list/MobileList';
import SearchResults from '../../components/list/SearchResults';
import VideoList from '../../components/list/VideoList';
import {useVideos} from '../../hooks/useRequest';
import {isMobile} from 'react-device-detect';
import VideoCard from '../../components/list/VideoCard';
import CircularProgress from '@mui/material/CircularProgress';



function Favorites() {
    const [videosList, setVideosList] = useState([]);
    const {isLoading, error, favoritesRequest} = useVideos();
    const [mobileView, setMobileView] = useState(false);
    
    useEffect(() => {
        if (isMobile) {
            setMobileView(true)
        }
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        let mounted = true
        let allVideos = [];
        if (favorites) {
        favorites.map((id) => {
            favoritesRequest(id).then(data => {
                if (mounted) {
                    allVideos.push(data)
                }
            })
        })
        
        setTimeout(() => {
            setVideosList(allVideos);
        }, 1500)
    }

        return () => mounted = false;
    }, [])


    return (
        <Fragment>
            <Typography sx={{fontWeight: 'bold', fontFamily: "Rock Salt", fontSize: '5vh', textAlign: 'center', textDecoration: 'underline', my: 3}}>Favorites</Typography>
            {
            videosList.length > 0 ?
        <Stack sx={{alignItems: 'center', margin: {xs: 'none',md:'auto'}}}>
        {videosList.map((video, index) => (
  <VideoCard
    data-value={index+1}
    key={video[0].id}
    id={video[0].id}
    image={video[0].snippet.thumbnails.high.url}
    title={video[0].snippet.title}
    description={video[0].snippet.description}
    channel={video[0].snippet.channelTitle}
    category={video[0].catName}
  />
))}
        </Stack> 
        : <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            { !isLoading ? <Typography sx={{textAlign: 'center', fontWeight: 'bold', fontFamily: "Rock Salt", fontSize: '5vh'}}> No Favorites Yet</Typography> : <CircularProgress />}
                </Box>}
  </Fragment>
    )
}

export default Favorites