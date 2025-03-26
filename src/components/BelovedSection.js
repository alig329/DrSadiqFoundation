import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const BelovedSection = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#027D40', 
      width: '80%', 
      overflow: 'hidden', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '8px',
      padding: '40px',
      margin: '20px auto',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      
    }}>  
      <Container>
        <Grid container spacing={0} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 8 }}
            >
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: { xs: '18px', md: '24px' },
                  fontWeight: '500',
                  lineHeight: '1.4',
                  color: '#FFFFFF',
                  textAlign: 'left',
                  paddingRight: { xs: '10px', md: '30px' }
                }}
              >
                ONE PERSON'S GENEROSITY CAN SPARK 
                <Box component="span" sx={{
                  color: '#ECA30C',
                  paddingLeft: { xs: '10px', md: '10px' }
                }}> 
                  A LEGACY OF KINDNESS 
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: { xs: '12px', md: '16px' },
                  lineHeight: '2.0',
                  color: '#FFFFFF',
                  textDecoration: 'underline',
                  fontWeight: '600',
                  marginTop: '14px'
                }}
              >
                The Core of Our Foundation!
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: { xs: '10px', md: '12px' },
                  lineHeight: '1.6',
                  color: '#FFFFFF',
                  textAlign: 'justify',
                  paddingRight: { xs: '10px', md: '40px' },
                  mb: 2,
                }}
              >
                Dr. Muhammad Sadiq (1950-2020) was a visionary whose compassion and commitment to making a difference led to the establishment of Dr. Sadiq Foundation in 2010. His dedication to uplifting underserved communities and supporting those in need continues to inspire and guide our work. His legacy of kindness and generosity remains the driving force behind everything we do.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FF9900',
                  color: '#FFFFFF',
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                  textTransform: 'none',
                  px: 1,
                  py: 0.5,
                  '&:hover': { backgroundColor: '#E68A00' },  
                }}
                onClick={() => window.location.href = "read"}
              >
                Read More
              </Button>
            </motion.div>
          </Grid>
          
          {/* Image Section */}
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 8 }}
            >
              <Box sx={{ zIndex: 0, position: 'relative', height: { xs: '200px', md: 'auto' } }}>
                <img
                  src="https://i.ibb.co/rRhTPV1R/DrSahb22.jpg"
                  alt="Dr. Muhammad Sadiq"
                  style={{
                    height: '80%',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                />
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    position: 'absolute',
                    top: '10px',
                    left: { xs: '5px', md: '10px' },
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    color: '#FFFFFF',
                    padding: '8px',
                    borderRadius: '8px',
                    zIndex: 2,
                  }}
                >
                  <Typography variant="subtitle1">Dr. Muhammad Sadiq</Typography>
                  <Typography variant="caption">(Late) <br/></Typography>
                  <Typography variant="caption">Founding Chairman</Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BelovedSection;
