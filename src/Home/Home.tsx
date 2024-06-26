
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Gallery from '../Gallery/Gallery';
import { Link } from 'react-scroll';
import Writing from '../Writing/Writing';
import { styled } from '@mui/system';
import { Owner } from '../types'; 

const StyledLink = styled(Link)({
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
});

//todo: from firebase
const owner:Owner ={
    id : "linda-bullock",
    docs:["assets/Documents/Psych/psychNurse.xml"],
    images:["assets/Images/psychNurse/surfacing.png"],
    name : "Linda BUllock",
}
const Home: React.FC = () => {
    const appBarHeight = 64;
    const minPageHeight = `calc(100vh - ${appBarHeight}px)`;
    // todo!!!!
    const ownerName = owner.name;
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', scrollbarGutter: 'always' }}>
            <AppBar position="sticky" color="inherit" sx={{ backgroundColor: '#2B2C2C' }}>
                <Toolbar>


                    <StyledLink to="home" smooth={true} duration={500} style={{ color: 'inherit' }}>

                        <Button color="inherit" sx={{ border: 'none', fontSize: '1.2em', '&:hover, &:focus': { textDecoration: 'underline solid 2px', outline: 'none' } }}>Home</Button>
                    </StyledLink>
                    <StyledLink to="gallery" offset={-1 * appBarHeight} smooth={true} duration={500} style={{ color: 'inherit' }}>

                        <Button color="inherit" sx={{ border: 'none', fontSize: '1.2em', '&:hover, &:focus': { textDecoration: 'underline solid 2px', outline: 'none' } }}>Gallery</Button>
                    </StyledLink>
                    <StyledLink to="writing" offset={-1 * appBarHeight} smooth={true} duration={500} style={{ color: 'inherit' }}>
                        <Button color="inherit" sx={{ border: 'none', fontSize: '1.2em', '&:hover, &:focus': { textDecoration: 'underline solid 2px', outline: 'none' } }}>Writing</Button>
                    </StyledLink>
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
                        fontSize: '6em',
                        //fontWeight: 'bold', 
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    }}>
                        {ownerName}
                    </Box>

                </Box></Fade>

            <Box id="gallery" sx={{
                minHeight: minPageHeight,
                position: 'relative',
                '&::before': {
                    content: '""',
                    display: 'block',
                    height: appBarHeight + 'px',
                    marginTop: -(appBarHeight) + 'px',
                    visibility: 'hidden',
                }
            }}>
                <Gallery />
            </Box>
            <Writing {...owner} />
            <Box component="footer" sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
                <Typography variant="body1" align="center">

                </Typography>
            </Box>
        </Box>
    );
}

export default Home;