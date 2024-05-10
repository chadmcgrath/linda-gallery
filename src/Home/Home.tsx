
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Gallery from '../Gallery/Gallery';
import { Link } from 'react-scroll';
;

const Home: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <AppBar position="sticky" color="inherit" sx={{ backgroundColor: '#2B2C2C' }}>
                <Toolbar>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <Link to="home" smooth={true} duration={500} style={{ color: 'inherit' }}>

                        <Button color="inherit" sx={{ border: 'none', fontSize: '1.2em', '&:hover, &:focus': { textDecoration: 'underline solid 2px', outline: 'none' } }}>Home</Button>
                    </Link>
                    <Link to="gallery" smooth={true} duration={500} style={{ color: 'inherit' }}>

                        <Button color="inherit" sx={{ border: 'none', fontSize: '1.2em', '&:hover, &:focus': { textDecoration: 'underline solid 2px', outline: 'none' } }}>Gallery</Button>
                    </Link>
                    <Button color="inherit" sx={{ border: 'none', fontSize: '1.2em', '&:hover, &:focus': { textDecoration: 'underline solid 2px', outline: 'none' } }}>Writing</Button>
                </Toolbar>
            </AppBar>
            <Fade in={true} timeout={2000}>
                <Box component="main" id="home" sx={{
                    backgroundImage: `url('assets/Images/tulips.jpg')`,
                    backgroundSize: 'cover',
                    //backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <Box sx={{
                        backgroundColor: 'transparent',
                        color: 'black',
                        padding: '1em',
                        margin: 'auto',
                        width: '50%',
                        textAlign: 'center',
                        borderRadius: '8px',
                        fontSize: '5em',
                        //fontWeight: 'bold', 
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    }}>
                        Linda Bullock
                    </Box>

                </Box></Fade>
            <div id="gallery">
                <Gallery />
            </div>
            <Box component="footer" sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
                <Typography variant="body1" align="center">
                    Footer
                </Typography>
            </Box>
        </div>
    );
}

export default Home;