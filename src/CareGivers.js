import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const designations = [
  { name: 'Mr. Salman Sadiq', title: 'Chairman/Trustee' },
  { name: 'Mr. Zubair Sadiq', title: 'Vice Chairman' },
  { name: 'Mr. Muhammad Saad Sadiq', title: 'Information Secretary' },
  { name: 'Mst. Rasheeda Begum', title: 'Relationship Officer' },
  { name: 'Mrs. Habiba Salman', title: 'Secretary General' },
  { name: 'Mrs. Ayesha Bilal', title: 'Audit Secretary' },
  { name: 'Mrs. Saima Elahi', title: 'Finance Secretary' },
];

const CaregiversSection = () => {
  const [currentDesignation, setCurrentDesignation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDesignation((prev) => (prev + 1) % designations.length);
    }, 3000); // Change designation every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'auto', md: '350px' }, // Responsive height
        background: '#027D40',
        margin: '40px auto',
        padding: { xs: '20px', md: '0' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        animation: 'fadeIn 1s', // Added animation
      }}
    >
      <Typography
        sx={{
          width: { xs: '100%', md: '100%' },
          fontFamily: 'Poppins',
          fontSize: { xs: '36px', md: '50px' }, // Responsive font size
          fontWeight: '600',
          lineHeight: '46px',
          marginBottom: '20px',
        }}
      >
        Caregivers of Our Mission
      </Typography>
      <Typography
        sx={{
          width: { xs: '100%', md: '100%' },
          fontFamily: 'Poppins',
          fontSize: { xs: '24px', md: '32px' }, // Responsive font size
          fontWeight: '300',
          lineHeight: '60px',
          textDecoration: 'underline',
          marginBottom: '20px',
        }}
      >
        Board of Trustees Dr. Sadiq Foundation
      </Typography>
      <Box>
        <Typography
          sx={{
            width: { xs: '100%', md: '100%' },
            fontFamily: 'Poppins',
            fontSize: { xs: '28px', md: '30px' }, // Responsive font size
            fontWeight: '600',
            marginBottom: '10px',
            animation: 'fadeIn 1s', // Add animation
          }}
        >
          {designations[currentDesignation].name}
        </Typography>
        <Typography
          sx={{
            width: { xs: '100%', md: '100%' },
            fontFamily: 'Poppins',
            fontSize: { xs: '18px', md: '24px' }, // Responsive font size
            fontWeight: '500',
            animation: 'fadeIn 1s', // Add animation
          }}
        >
          {designations[currentDesignation].title}
        </Typography>
      </Box>
    </Box>
  );
};

export default CaregiversSection;
