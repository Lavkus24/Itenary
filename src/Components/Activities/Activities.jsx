import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid';
import Payment from './PayForActivities'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const  OutlinedCard = () => {
   const navigate = useNavigate();
    const handleClick = () => {
      navigate('/People')
    }

const card = (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
      <React.Fragment >
        <CardContent >
        <CardContent >
          <Typography sx={{ fontSize: '2rem' }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> 
          <CardMedia sx={{borderRadius:'6px'}}
                component="img"
                height="300vh"
                image='https://media1.thrillophilia.com/filestore/q8hvqqoatpb1zwq8mirrytsl6jsp_IMG_1897.jpeg?w=1536&dpr=1.25'
                alt="Paella dish"
            />
        <Typography sx={{ fontSize: '2rem' , marginTop:'12px'}} color="text.secondary" gutterBottom>
            ABOUT 
        </Typography> 
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Rajdari, nestled in the heart of the verdant landscapes of India, exudes an aura
        of timeless charm and cultural richness. This quaint village, located in the 
        Chandauli district of Uttar Pradesh, holds within its embrace a tapestry of
          traditions, history, and natural splendor. As one traverses the winding paths
          that meander through lush greenery and rustic hamlets, they are greeted by the
            serene tranquility that pervades the atmosphere. Rajdari is renowned for its 
            breathtaking natural beauty, with the majestic Rajdari
        and Devdari waterfalls standing as awe-inspiring symbols of nature's grandeur. 
        </Typography>
        <Typography>
        <Button variant="contained" onClick={handleClick}>PASSENGER</Button>
        </Typography>
        </CardContent>
        </CardContent>
      </React.Fragment>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardContent>
          <Typography my={1.6} sx={{ fontSize: '2rem' ,paddingRight:'45px'}} color="text.secondary" gutterBottom>
          Activities
          </Typography> 
          <CardMedia sx={{borderRadius:'6px'}}
            component="img"
            height="300vh"
            image='https://media1.thrillophilia.com/filestore/actso432pp7n9cze5nprblt3vzmt_IMG-worlds-of-adventure.webp?h=425&w=auto&dpr=1.25'
            alt="Paella dish"
        />
      </CardContent>
      <Payment/>
      </Grid>
    </Grid>
);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default OutlinedCard