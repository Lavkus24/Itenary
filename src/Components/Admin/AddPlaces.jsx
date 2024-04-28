import React from 'react';
import { Button, CssBaseline, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
const defaultTheme = createTheme();

const SignInSide = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const newData = {
      name: data.get('name'),
      url: data.get('url'),
      capacity: data.get('number'), // Corrected field name
      price: data.get('price'),
    };

    console.log('newData' , newData)
    

    try {
      const response = await fetch('http://localhost:3001/addPlaces', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        console.log('Place added successfully');
        navigate('/'); // Navigate to the desired location after successful addition
      } else {
        console.error('Failed to add place');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '73vh', display: 'flex', justifyContent: 'center' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 3,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: '0px',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="url"
                label="URL"
                name="url"
                autoComplete="url"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="number"
                label="Capacity"
                name="number"
                autoComplete="number"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="price"
                label="Price"
                type="number"
                id="price"
                autoComplete="price"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ADD PLACES
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInSide;
