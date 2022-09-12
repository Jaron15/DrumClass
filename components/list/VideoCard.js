import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useRouter} from 'next/router';
 
export default function VideoCard(props) {
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        height: "25vh",
        width: "35vh",
        margin: "1vh",
        marginTop: '1vh',
        paddingBottom: '1vh',
        objectFit: 'contain'
      };
     const router = useRouter();
     const videoSelectHandler = ()  => {
      router.push('/categories/'+ props.category + '/' + props.id);
     }
     
  return (
    <Card  style={cardStyle}>
      <CardActionArea onClick={videoSelectHandler}>
        <CardMedia
          component="img"
          height="150"
          image={props.image}
          alt={props.description}
          sx={{objectFit: 'contain', width: '100%', margin: 'none'}}
        />
        <CardContent sx={{ p:1, pl:2, objectFit: 'contain'}}>
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
