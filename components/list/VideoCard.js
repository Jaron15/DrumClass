import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

 
export default function VideoCard() {
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
          height="140"
          image="https://image.shutterstock.com/image-illustration/3d-render-number-one-glowing-260nw-1890767740.jpg"
          alt='first image'
          sx={{objectFit: 'contain'}}
        />
        <CardContent sx={{ p:1, pl:2, objectFit: 'contain'}}>
          <Typography  marginBottom='0px' gutterBottom variant="h5" component="div">
            Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
