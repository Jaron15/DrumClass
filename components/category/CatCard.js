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
    <Card sx={{ maxWidth: 345, boxShadow: 5, margin: 3 }}>
      <CardActionArea onClick={() => catSelectHandler(name)}>
        <CardMedia
          component="img"
          height="100%"
          image="https://media.istockphoto.com/photos/white-wrinkle-paper-texture-background-picture-id672298630?b=1&k=20&m=672298630&s=170667a&w=0&h=pXZ_XVHseb5RY49K3N8PlzImUDyhShLMyCx91Q0GIdg="
          alt="green iguana"
        />
        <Box sx={{position: 'absolute', top:'0%', height: '100%', width: '100%',
            }}>
          <Typography
          sx={{marginTop: '25%',  position: 'relative', color: 'black', justifyContent: 'center', textAlign: 'center',
 
        }}
         variant="h5" >
            {props.name}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
