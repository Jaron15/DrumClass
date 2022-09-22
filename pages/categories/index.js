import { Box, Grid, Typography } from '@mui/material';
import React, { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';
import CatCard from '../../components/category/CatCard';
import CategoryProvider from '../../store/CategoryProvider';
import CategoryContext from '../../store/category-context';

 
export default function CategoryPage() {
    const catCtx = useContext(CategoryContext)
    const categories = catCtx.categories;
    console.log(categories);
    
    
return (
    <CategoryProvider>
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
    >{categories.map(cat => {

      return (
        <CatCard name={cat.catName} />
      )
    })}
    </Grid>
    </Box>
    </CategoryProvider>
)
}
