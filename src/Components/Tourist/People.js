import * as React from 'react';
import Box from '@mui/material/Box';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';

const sharedBoxStyles = {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    my: 2,
    p: 1,
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
    color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
    borderRadius: 2,
    fontSize: '0.875rem',
    fontWeight: '700',
  };

export default function TextOverflow() {
  return (
    <div style={{ width: 200, whiteSpace: 'nowrap' }}>
      <Box component="div" sx={sharedBoxStyles} >
        Name
      </Box>
      <Box component="div" sx={sharedBoxStyles} >
        Seat Number
      </Box>
      <Box component="div" sx={sharedBoxStyles} >
        Number of Activities
      </Box>
     
      <Box > 
        <Dropdown>
          <MenuButton>List Of Activities</MenuButton>
          <Menu >
            <MenuItem>Activities1</MenuItem>
            <MenuItem >Activities2</MenuItem>
            <MenuItem>Activities3</MenuItem>
          </Menu>
        </Dropdown>
      </Box>
    </div>
  );
}