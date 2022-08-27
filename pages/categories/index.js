import { Box, Grid, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import CatCard from '../../components/category/CatCard';
 
export default function CategoryPage() {
    const Categories = [
        {
            catName: '',
            subCats: '',
        },
    ]
return (
    <Box sx={{margin: 'auto', width: '80%'}}>
    <Typography
    variant='h4'
    sx={{fontFamily: "Rock Salt", textAlign: 'center', margin: '3vh' }}
    >Categories</Typography>
    <Grid container
    direction='row'
    justifyContent="center"
    alignItems="center"
    height='100%'
    width='100%'
    >
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
    </Grid>
    </Box>
)
}
