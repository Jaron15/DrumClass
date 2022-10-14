import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { useState } from 'react';
import styles from './Navbar.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {useRouter} from 'next/router';


const drawerWidth = 240;
const navItems = ['Home', 'Categories', 'About'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();
  const goHome = () => {
    router.push('/')
  }
  const handleDrawerToggle = () => {
    console.log('clicked');
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
     
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {mobileOpen &&
      <React.Fragment>
      <Typography variant="h6" sx={{ my: 2, fontFamily: "Rock Salt", }}>
        Drum Class
      </Typography>
      <Divider />
      <List sx={{overflow: 'hidden'}}>
          <ListItem key='Home'sx={{margin: {xs:'2.5vh', md:'1.5vh'}, width: {xs: '90%', md:'100%'}}} disablePadding className={styles.slideLeft}>
            <Link href='/'>
            <ListItemButton sx={{ textAlign: 'center'}}>
            <Typography sx={{fontWeight: 'bold', fontSize: {xs:'2.75vh',md:'2.25vh'}, textAlign: 'center', width: '85%'}} >
              Home</Typography>
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem key='About' disablePadding sx={{margin: {xs:'2.5vh', md:'1.5vh'}, width: {xs: '90%', md:'100%'}}} className={styles.slideLeftMid}>
          <Link href='/categories'>
            <ListItemButton sx={{ textAlign: 'center'}}>
            <Typography sx={{fontWeight: 'bold', fontSize: {xs:'2.75vh',md:'2.25vh'}, textAlign: 'center', width: '85%'}} >
              Categories</Typography>
            </ListItemButton>
            </Link>
          </ListItem>
          
          <ListItem key='Contact' sx={{margin: {xs:'2.5vh', md:'1.5vh'}, width: {xs: '90%', md:'100%'}}} disablePadding className={styles.slideLeftLow}>
            <ListItemButton sx={{ textAlign: 'center' }}>
            <Typography sx={{fontWeight: 'bold', fontSize: {xs:'2.75vh',md:'2.25vh'}, textAlign: 'center', width: '85%'}} >
              About</Typography>
            </ListItemButton>
          </ListItem>
         
      </List>
      <Box sx={{position: 'absolute', bottom: 25, width: '100%'}}>
      <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          >
            <Link href='/'>
            <img onClick={goHome} src="/DrumClassLogo.png" height='55px' width="55px"/>
            </Link>
          </Typography>
          </Box>
      </React.Fragment>
      }
    </Box>
   
  );
  
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#ffffff', height: {xs:70, md: 80} }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon
            fontSize='large'
            size='large' 
            style={{height: '60', color:  'black'}} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src="/DrumClassLogo.png" height='55px' width="55px"/>
          </Typography>
          <Search style={{borderColor: 'black', borderWidth: '2px', borderStyle:  'solid', color: 'black', marginLeft: 15}}>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'inline' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default Navbar;
