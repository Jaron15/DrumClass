
// import classes from './Layout.module.css';
import Navbar from "./Navbar";
import { Box } from '@mui/material'

function Layout(props) {
  return (
    <Box
    sx={{overflow: 'hidden'}}>
      <Navbar />
      <main >{props.children}</main>
    </Box>
  );
}

export default Layout;
