import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Visibility() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/AddPlaces')
    }
  return (
    <div style={{ width: '100%' , border:'none' , position:'sticky' , bottom:'0' }}>
      <Box
        component="span"
        sx={{
          visibility: 'visible',
          my: 2,
          p: 1,
          display:'flex',
          justifyContent:'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <Button onClick={handleClick}>Explore More Places </Button>
      </Box>
    </div>
  );
}