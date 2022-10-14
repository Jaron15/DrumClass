import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useRouter} from 'next/router';
import {isMobile} from 'react-device-detect';
 
export default function VideoCard(props) {
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        height: "27vh",
        width: "33vh",
        margin: "1vh",
        marginTop: '1vh',
        paddingBottom: '1vh',
        objectFit: 'contain'
      };
    const mobileCardStyle = {
        display: "flex",
        flexDirection: 'column',
        transitionDuration: "0.3s",
        height: "100%",
        width: "100%",
        
        paddingBottom: '1vh',
        objectFit: 'contain'
      };
     const router = useRouter();
     const videoSelectHandler = () => {
      router.push('/categories/'+ props.category + '/' + props.id);
     }
     
  return (
    <Card  style={isMobile ? mobileCardStyle : cardStyle}>
      <CardActionArea sx={{display: 'flex',flexDirection: 'column', justifyContent: 'left'}} onClick={videoSelectHandler}>
        <CardMedia
          component="img"
          height={isMobile ? '220' : '160'}
          image={props.image}
          alt={props.description}
          sx={{objectFit: 'cover', width: '100%', margin: 'none'}}
        />
        <CardContent sx={{ p:1, align: 'left', width: '100%', objectFit: 'contain'}}>
          <Typography sx={{fontWeight:'bold', lineHeight: 1, marginTop: '.5vh'}} marginBottom='0px' gutterBottom component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.channel}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
