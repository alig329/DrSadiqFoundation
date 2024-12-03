import React from 'react';
import { Box, Typography, Button} from '@mui/material';

const images = [
  "cmk1.png",
  "cmk2.png",
  "cmk3.png",
  "cmk4.png",
  "cmk5.jpg",
  "cmk6.png"
];

const ChangeMakersSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'auto', md: '553px' },
        borderRadius: '0px 0px 30px 30px',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr' },
          gridTemplateRows: '1fr 1fr',
          gap: '10px',
          flex: 1
        }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Change Maker ${index + 1}`}
            sx={{
              width: '100%',
              height: { xs: 'auto', md: '263px' },
              borderRadius: '30px',
              objectFit: 'cover'
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: { xs: '0', md: '20px' },
          paddingTop: { xs: '20px', md: '0' }
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: { xs: '36px', md: '70px' },
            fontWeight: '700',
            lineHeight: { xs: '1.2', md: '87.76px' },
            textAlign: 'left',
            color: '#000000',
            marginBottom: '20px',
            padding: '0px 70px 10px 30px'
          }}
        >
          Meet the Change Makers
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: { xs: '14px', md: '18px' },
            fontWeight: '500',
            lineHeight: { xs: '1.5', md: '39px' },
            textAlign: 'left',
            color: '#000000',
            marginBottom: '20px',
            padding: '0px 0px 10px 30px'
          }}
        >
          Our team is dedicated to making a positive impact in the lives of individuals and communities. With a shared vision and passion for creating change, we work together to design and implement initiatives that drive meaningful progress.
        </Typography>
        <Button
          sx={{
            width: { xs: '50%', md: '200px' },
            height: '50px',
            fontFamily: 'Poppins',
            fontSize: { xs: '16px', md: '18px' },
            fontWeight: '500',
            color: '#FFFFFF',
            backgroundColor: '#027D40',
            borderRadius: '20px',
            '&:hover': { backgroundColor: '#029D40' },
            textAlign: 'center',
            marginLeft: '30px'
          }}
          onClick={() => window.location.href = "donate"}
        >
          Donate Now
        </Button>
      </Box>
    </Box>
  );
};

export default ChangeMakersSection;
