// StatSection.js
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

const StatSection = () => {
  const stats = [
    { number: '4852+', subtitle: 'Scholarships' },
    { number: '2.2M+', subtitle: 'Beneficiaries' },
    { number: '939M+', subtitle: 'Financial Assistance' },
    { number: '5153+', subtitle: 'Families Supported' },
  ];

  return (
    <Box
      sx={{
        boxShadow: '0px 10px 25px 0px #21343014',
        backgroundColor: '#FFFFFF',
        width: '100%',
        color: '#588BC6',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '10px 0px 0px 0px',
        padding: '20px',
        gap: '10px',
      }}
    >
      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: '46px',
                  fontWeight: 'bold',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                {stat.number}
                {/* SVG Underline */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="5"
                  viewBox="0 0 60 4"
                  fill="none"
                  style={{
                    position: 'absolute',
                    bottom: '0px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <rect
                    x="60"
                    y="0.25"
                    width="3"
                    height="60"
                    rx="1.5"
                    transform="rotate(90 60 0.25)"
                    fill="#ECA30C"
                  />
                </svg>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#213430',
                }}
              >
                {stat.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Achievements Button Section */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '310px' },
          height: { xs: 'auto', md: '204px' },
          borderRadius: '0px 10px 10px 0px',
          backgroundColor: '#588BC6',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '15px',
          gap: '10px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '28px',
            fontWeight: '600',
            lineHeight: '20px',
            color: '#FFFFFF',
          }}
        >
          Achievements
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '28px',
            fontWeight: '600',
            lineHeight: '20px',
            color: '#FFFFFF',
          }}
        >
          in Numbers
        </Typography>
        {/* Become a Member Button */}
        <Button
          sx={{
            position: 'absolute',
            bottom: '30px',
            left: '5px',
            width: '150px',
            height: '34px',
            backgroundColor: 'transparent',
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'space-between',
            padding: '0 10px',
            textTransform: 'none',
            '&:hover': {
              textDecoration: 'underline', // Apply hover effect to text
            },
          }}
        >
          Become a Member
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </Box>
    </Box>
  );
};

export default StatSection;