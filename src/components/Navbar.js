import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <AppBar
        position="static"
        sx={{
          width: {xs: '80%', md: '100%'},
          height: '60px',
          backgroundColor: '#FFFFFF',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            <img src="/dsfLogo.JPG" alt="Company Logo" height="56.78px" />
          </Typography>
          <Box sx={{ display: 'flex', gap: '0px' }}>
            <Button
              sx={{
                color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: '500',
                padding: '20px'
              }}
              component={Link} to="/">Home
            </Button>
            <Button
              sx={{
                color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: '500',
                padding: '20px'
              }}
              component={Link} to="/history">History
            </Button>
            <Button
              sx={{
                color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: '500',
                padding: '20px'
              }}
              component={Link} to="/projects">Projects
            </Button>
            <Button
              sx={{
                color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: '500',
                padding: '20px'
              }}
              component={Link} to="/success-stories">Success Stories
            </Button>
            <Button
              sx={{
                color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: '500',
                padding: '20px'
              }}
              component={Link} to="/certificates">Certificates
            </Button>
            <Button
              sx={{
                color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: '500',
                padding: '20px'
              }}
              component={Link} to="/contact-us">Contact Us
            </Button>
            <Button
              sx={{
                color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                width: '80px',
                height: '60px',
                fontWeight: '500',
                backgroundColor: '#FFD15C',
                padding: '20px'
              }}
              component={Link} to="/donate">
                Donate
            </Button>
            <Button
              sx={{
                color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: '500',
                backgroundColor: '#FFAA5C',
                padding: '20px'
              }}
              component={Link} to="/volunteer">
                Become a Volunteer
            </Button> 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;