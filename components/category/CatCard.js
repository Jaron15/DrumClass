import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
 
export default function CatCard(props) {
const router = useRouter();
  const catSelectHandler  = () => {
    router.push('/categories/' + props.name)
  }
  return (
    <Card sx={{ width: {xs:160, md:345}, height: {xs:120, md:170}, boxShadow: 6, margin: {xs:2, md:3}, borderRadius: 3 }}>
      <CardActionArea sx={{height: '100%'}} onClick={() => catSelectHandler(name)}>
        {/* <CardMedia
          component="img"
          height="100%"
          // image="https://media.istockphoto.com/photos/white-wrinkle-paper-texture-background-picture-id672298630?b=1&k=20&m=672298630&s=170667a&w=0&h=pXZ_XVHseb5RY49K3N8PlzImUDyhShLMyCx91Q0GIdg="
          alt="category card"
        /> */}
        <Box sx={{
           height: '100%', 
           width: '100%', 
           display: 'flex', 
           justifyContent: 'center', 
           alignItems: 'center',
           margin: 'auto',
            }}>
          <Typography
          sx={{  position: 'relative', color: 'black', fontSize: '3.5vh'
 
        }}
         variant="h5" >
            {props.name}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
