import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Fade, Slide } from '@mui/material';

const designations = [
  { name: 'Mr. Salmaan Sadiq', title: 'Chairman' },
  { name: 'Mr. Asif Zubair Sadiq', title: 'Vice Chairman' },
  { name: 'Mr. Saad Sadiq', title: 'Information Secretary' },
  { name: 'Mrs. Rasheeda Begum', title: 'Relationship Officer' },
  { name: 'Mrs. Habiba Salman', title: 'Secretary General' },
  { name: 'Mrs. Ayesha Bilal', title: 'Audit Secretary' },
  { name: 'Mrs. Saima Ellahi', title: 'Finance Secretary' },
];

const CaregiversSection = () => {
  const [currentDesignation, setCurrentDesignation] = useState(0);
  const [direction, setDirection] = useState('left');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('left');
      setCurrentDesignation((prev) => (prev + 1) % designations.length);
    }, 4000); // Change designation every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '97%',
        minHeight: '300px',
        background: '#F1F1F1',
        padding: { xs: '20px 10px', md: '30px 20px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: "rgba(51, 51, 51, 0.8)",
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontSize: { xs: '18px', md: '24px' },
          fontWeight: '600',
          marginBottom: '14px',
        }}
      >
        Caregivers of Our Mission
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontSize: { xs: '12px', md: '18px' },
          fontWeight: '500',
          textDecoration: 'underline',
          marginBottom: '30px',
        }}
      >
        Board of Trustees Dr. Sadiq Foundation
      </Typography>
      <Slide direction={direction} in={true} timeout={500}>
        <Card
          sx={{
            width: { xs: '100%', sm: '60%', md: '40%' },
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <CardContent>
            <Fade in={true} timeout={600}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: { xs: '20px', md: '28px' },
                  fontWeight: '600',
                  color: '#006400',
                }}
              >
                {designations[currentDesignation].name}
              </Typography>
            </Fade>
            <Fade in={true} timeout={800}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: { xs: '16px', md: '20px' },
                  fontWeight: '500',
                  color: '#555555',
                  marginTop: '10px',
                }}
              >
                {designations[currentDesignation].title}
              </Typography>
            </Fade>
          </CardContent>
        </Card>
      </Slide>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {designations.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: index === currentDesignation ? '#006400' : '#CCCCCC',
              margin: '0 5px',
              transition: 'background-color 0.3s ease-in-out',
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default CaregiversSection;
