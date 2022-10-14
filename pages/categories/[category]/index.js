import React, { Fragment, useContext, useEffect, useState } from 'react'
import CategoryContext from '../../../store/category-context';
import {useVideos} from '../../../hooks/useRequest';
import VideoList from '../../../components/list/VideoList';
import ListGroup from '../../../components/list/ListGroup';
import { Container, Typography } from '@material-ui/core';
import { TrendingUp } from '@material-ui/icons';


function index(props) {
    const [videosList, setVideosList] = useState([]);
    // let allVideos = [];
    const catCtx = useContext(CategoryContext);
    const chosenCat = props.category;
    const categories = catCtx.categories;
    const category = categories.find(category => category.catName === chosenCat)
    const subCategories = category.subCats;
    const {isLoading, error, sendRequest} = useVideos();
    
    useEffect(() => {
        let mounted = true
        let allVideos = [];
        subCategories.map((subCat) => {
            sendRequest(subCat).then(data => {
                if (mounted) {
                    allVideos.push(data)
                }
            })
        })
        setTimeout(() => {
            setVideosList(allVideos)
          }, 1000)
        // console.log(allVideos);
        return () => mounted = false;
        }, [])
        
        console.log(videosList);
        console.log(videosList.length);
 
  return (
    
    <Fragment>
        {videosList.length > 0 &&
        <ListGroup allVideos={videosList}/>
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
