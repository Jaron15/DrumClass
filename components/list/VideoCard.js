import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

 
export default function VideoCard(props) {
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        height: "90%",
        width: "35vh",
        margin: "1vh",
        marginTop: '1vh',
        paddingBottom: '1vh',
        objectFit: 'contain'
      };
     
     
  return (
    <Card style={cardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={props.image}
          alt={props.description}
          sx={{objectFit: 'contain', width: '100%', margin: 'none'}}
        />
        <CardContent sx={{ p:1, pl:2, objectFit: 'contain'}}>
          <Typography sx={{fontWeight:'bold'}} marginBottom='0px' gutterBottom component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
