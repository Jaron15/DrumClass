import {isMobile} from 'react-device-detect';
import React, { Fragment, useEffect, useContext, useState } from 'react'
import { useVideos } from '../../../hooks/useRequest';
import { Box, Typography, CircularProgress } from '@mui/material';
import SearchResults from '../../../components/list/SearchResults';
import MobileList from '../../../components/list/MobileList';
import CategoryContext from '../../../store/category-context';
import { QuestionAnswerSharp } from '@material-ui/icons';
function index(props) {
  const subject = props.subject
  const catCtx = useContext(CategoryContext)
    const questions = catCtx.questions;
    
  const info = questions.filter(question => question.category === subject)
 
  const [videosList, setVideosList] = useState([]);
  const {isLoading, error, sendRequest} = useVideos();
  const [mobileView, setMobileView] = useState(false)
  const [loading, setLoading]  = useState(true)
  useEffect(() => {
      if (isMobile) {
          setMobileView(true)
      }
      let mounted = true
      let allVideos = []
      sendRequest(subject, 10).then((data) => {
          allVideos = data;
      } );
      setTimeout(() => {
          setLoading(false)
          setVideosList(allVideos)
      }, 1000)
      return () => mounted = false;
  }, [subject])
  

  if (mobileView) {
    return (
      <Fragment>
      {loading ? <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vw'}}><CircularProgress /></Box> :
      <Box>
          <Typography
            variant="h4"
             sx={{
        textAlign: "center",
        justifyContent: "center",
        marginTop: "2vh",
        marginBottom: "2vh",
        fontFamily: "Rock Salt",
      }}>{subject}</Typography>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      <Typography sx={{textAlign: 'center', width: '100%', marginBottom: '3vh'}}>
        {info[0].About}
      </Typography>
      </Box>
            <MobileList videos={videosList} />
            </Box>
    }
        </Fragment>
    )
}
    return (
        <Fragment>
          {loading ? <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress /></Box> :
           <Box>
            <Typography
            variant="h4"
             sx={{
        textAlign: "center",
        justifyContent: "center",
        marginTop: "2vh",
        marginBottom: "2vh",
        fontFamily: "Rock Salt",
      }}>{subject}</Typography>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      <Typography sx={{textAlign: 'center', width: '60%', fontWeight: 'bold'}}>
        {info[0].About}
      </Typography>
      </Box>
            <Box sx={{ py: 5, height: '100%', width: '90%', margin: 'auto'}}>
            <SearchResults videos={videosList} />      
            </Box>
            </Box>
}
        </Fragment>
    )
}

export async function getServerSideProps(context) {
const subject = context.params.subject;

return {
    props:{
      subject: subject
}}
}
export default index