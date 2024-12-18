import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';

const BelovedSection = () => {
  return (
    <Box sx={{ backgroundColor: '#027D40' }}>
      <Container>
        <Grid container spacing={0} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: { xs: '24px', md: '40px' },
                fontWeight: '500',
                lineHeight: '1.4',
                color: '#FFFFFF',
                textAlign: 'justify',
                paddingRight: '30px'
              }}
            >
              ONE PERSON'S GENEROSITY CAN SPARK<br/>
               <Box component="span" sx={{
                 color: '#ECA30C' 
                 }}> 
                A LEGACY OF KINDNESS 
              </Box>
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: { xs: '14px', md: '18px' },
                lineHeight: '2.8',
                color: '#FFFFFF',
                textDecoration: 'underline',
                fontWeight: '700'
              }}
            >
              The heart of our foundation!
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: { xs: '12px', md: '16px' },
                lineHeight: '1.8',
                color: '#FFFFFF',
                textAlign: 'justify',
                paddingRight: '40px',
                mb: 2,
              }}
            >
              Dr. Muhammad Sadiq (1950-2020) was a kind and caring person who wanted
              to make a difference. He founded the Dr. Sadiq Foundation in 2010 to
              help those in need and bring hope to underserved communities. His
              legacy of love and compassion continues to inspire us today.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FF9900',
                color: '#FFFFFF',
                fontFamily: 'Poppins',
                fontWeight: '500',
                textTransform: 'none',
                px: 4,
                '&:hover': { backgroundColor: '#E68A00',
                 },
              }}
              onClick={() => window.location.href = "history"}
            >
              Read More
            </Button>
          </Grid>
          
          {/* Image Section */}
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            
            <Box sx={{ zIndex: 0, position: 'relative' }}>
              <img
                src="/DrSahb22.jpg"
                alt="Dr. Muhammad Sadiq"
                style={{
                  height: '500px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '10px',
                  left: { xs: '5px', md: '5px' },
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  color: '#FFFFFF',
                  padding: '10px',
                  borderRadius: '10px',
                  zIndex: 2,
                }}
              >
                <Typography variant="h6">Dr. Muhammad Sadiq</Typography>
                <Typography variant="subtitle2">(Late)</Typography>
                <Typography variant="subtitle2">Founding Chairman</Typography>
              </Box>
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BelovedSection;
