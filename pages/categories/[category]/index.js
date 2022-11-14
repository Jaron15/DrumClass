import React, { Fragment, useContext, useEffect, useState } from 'react'
import CategoryContext from '../../../store/category-context';
import {useVideos} from '../../../hooks/useRequest';
import VideoList from '../../../components/list/VideoList';
import ListGroup from '../../../components/list/ListGroup';
import { Box, CircularProgress, Container, Typography } from '@material-ui/core';
import { TrendingUp } from '@material-ui/icons';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function index(props) {
    const [videosList, setVideosList] = useState([]);
    // let allVideos = [];
    const catCtx = useContext(CategoryContext);
    const chosenCat = props.category;
    const categories = catCtx.categories;
    const category = categories.find(category => category.catName === chosenCat)
    const subCategories = category.subCats;
    const {isLoading, error, sendRequest} = useVideos();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let mounted = true
        let allVideos = [];
        subCategories.map((subCat) => {
            sendRequest(subCat, 5).then(data => {
                if (mounted) {
                    allVideos.push(data)
                }
            })
        })
        setTimeout(() => {
            setLoading(false)
            setVideosList(allVideos)
          }, 1000)

        return () => mounted = false;
        }, [])

         
 
  return (
    
    <Fragment>
        {/* <Box style={{width:'100%', }}>
            <Box style={{margin: 10,alignSelf: 'start', paddingLeft: '1vh', fontSize: '2vh', width: '100%', display: 'flex', height: '2vh'}}>
                   
            </Box>
        </Box> */}
        {loading ? <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress /></Box>
 :        <Box>
        {videosList.length > 0 &&
        <ListGroup allVideos={videosList}/>
    }
    </Box>
   }
   </Fragment>
   )
}
export async function getServerSideProps(context) {
    const category = context.params.category;
    
    return {
        props:{
        category: category
    }}
}
export default index
