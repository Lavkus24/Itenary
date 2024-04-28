import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  icon: {
    fontSize: 20,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#2979ff',
    color: 'white',
    height: '100%',
  },
});

const ThreeColumnComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/AddPlaces');
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Paper className={classes.column}>
          <Typography variant="h6">Contact Me</Typography>
          <Typography>
            <CallIcon color="primary" sx={{ fontSize: 35 }} />
            <span>6798999199</span>
          </Typography>
          <Typography>
            <EmailIcon color="primary" sx={{ fontSize: 35 }} />
            <span>abc@gmail.com</span>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.column}>
          <Typography variant="h6">Schedule Day</Typography>
          <Typography>Monday- Friday 9am-11pm</Typography>
          <Typography variant="h6">Address</Typography>
          <Typography>Varanasi Uttar Pradesh, Near Lanka</Typography>
          <Button onClick={handleClick}>Add More places</Button>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.column}>
          <Typography variant="h6">Follow us</Typography>
          <FacebookIcon color="primary" sx={{ fontSize: 35 }} />
          <InstagramIcon color="primary" sx={{ fontSize: 35 }} />
          <TwitterIcon color="primary" sx={{ fontSize: 35 }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ThreeColumnComponent;
