import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';

const BelovedSection = () => {
  return (
    <Box sx={{ backgroundColor: '#027D40' }}>
      <Container>
        <Grid container spacing={1} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: { xs: '24px', md: '40px' },
                fontWeight: '600',
                lineHeight: '1.4',
                color: '#FFFFFF',
                mb: 2,
              }}
            >
              ONE PERSON'S GENEROSITY CAN SPARK A LEGACY OF KINDNESS
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: { xs: '14px', md: '18px' },
                lineHeight: '1.8',
                color: '#FFFFFF',
                mb: 2,
              }}
            >
              Meet our foundation’s generous heart!
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: { xs: '12px', md: '16px' },
                lineHeight: '1.8',
                color: '#FFFFFF',
                mb: 4,
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
                py: 1,
                '&:hover': { backgroundColor: '#E68A00',
                 },
              }}
            >
              Read More
            </Button>
          </Grid>
          
          {/* Image Section */}
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: { xs: 'relative', md: 'absolute' },
                top: 0,
                right: { xs: 0, md: '-20%' },
                height: '100%',
                width: { xs: '100%', md: '80%' },
                backgroundImage: 'url("/wave.svg")',
                backgroundColor: '#027D40',
                backgroundBlendMode: 'soft-light',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '100px 0px 0px 0px',
                zIndex: 0,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '10px',
                  right: { xs: '10px', md: '10px' },
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
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

            <Box sx={{ zIndex: 1, position: 'relative' }}>
              <img
                src="/DrSahb.jpg"
                alt="Dr. Muhammad Sadiq"
                style={{
                  width: '85%',
                  height: '460px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BelovedSection;
