import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react'
import MobileList from '../../../components/list/mobileList';
import SearchResults from '../../../components/list/SearchResults';
import VideoList from '../../../components/list/VideoList';
import {useVideos} from '../../../hooks/useRequest';
import {isMobile} from 'react-device-detect';

function index(props) {
    const [videosList, setVideosList] = useState([]);
    const {isLoading, error, sendRequest} = useVideos();
    const [mobileView, setMobileView] = useState(false)
    const [loading, setLoading] = useState(true);
    const category = props.category
    useEffect(() => {
        if (isMobile) {
            setMobileView(true)
        }
        let mounted = true
        let allVideos = []
        sendRequest(category, 10).then((data) => {
            allVideos = data;
        } );
        setTimeout(() => {
            setLoading(false)
            setVideosList(allVideos)
        }, 1000)
        return () => mounted = false;
    }, [category])
    

    
    if (mobileView) {
        return (
            <Fragment>
                 {loading ? <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vw'}}><CircularProgress /></Box>
              : <Box> <MobileList videos={videosList} /> </Box>}
            </Fragment>
        )
    }
        return (
            <Fragment>
                {loading ? <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress /></Box>
                 : <Box>
                     <Typography
                variant="h4"
                 sx={{
            textAlign: "center",
            justifyContent: "center",
            marginTop: "2vh",
            marginBottom: "2vh",
            fontFamily: "Rock Salt",
          }}>{category}</Typography>

                <Box sx={{ py: 5, height: '100%', width: '90%', margin: 'auto'}}>
                <SearchResults videos={videosList} />      
                </Box>
                </Box> }
            </Fragment>
        )
}

export async function getServerSideProps(context) {
    const category = context.params.searchTerm;
    
    return {
        props:{
        category: category
    }}
}
export default index