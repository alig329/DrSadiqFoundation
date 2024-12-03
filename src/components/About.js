import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <div>
      {/* Background Section */}
      <Box sx={{
        width: '1672px',
        height: '1917px',
        top: '-1px',
        left: '124px',
        opacity: 0,
        backgroundColor: '#027D40',
        position: 'relative',
      }} />

      {/* Title Section: Empowering Humanity */}
      <Box sx={{
        width: '1422px',
        height: '301px',
        top: '203px',
        left: '249px',
        opacity: 0,
        gap: '0px',
        position: 'relative',
        paddingTop: '10px',
      }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '60px',
            fontWeight: 600,
            lineHeight: '66px',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          Empowering Humanity with Compassion and Care
        </Typography>
      </Box>

      {/* Foundation Text Section */}
      <Box sx={{
        width: '1422px',
        height: '124px',
        top: '380px',
        left: '249px',
        opacity: 0,
        gap: '0px',
        position: 'relative',
      }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '54px',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          Dr. Sadiq Foundation (DSF) dedicatedly serves humanity with kindness, empathy, and has a deep commitment to making a positive impact. Our journey began in 2010, when our Founding Trustee and Chairman, the late Dr. Muhammad Sadiq Rahmatullah Aleh (1950-2020), established our organization under the Trust Act.
        </Typography>
      </Box>

      {/* Leadership Section */}
      <Box sx={{
        width: '701px',
        height: '75px',
        top: '908px',
        left: '609px',
        opacity: 0,
        position: 'relative',
      }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '60px',
            fontWeight: 600,
            lineHeight: '75px',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          Our Leadership Today
        </Typography>
      </Box>
      <Box sx={{
        width: '1003px',
        height: '54px',
        top: '1008px',
        left: '458px',
        opacity: 0,
        position: 'relative',
      }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '35px',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          Together, our leadership team is passionate about creating a better world for all. Most importantly, we are proud to have been serving humanity for over a decade.
        </Typography>
      </Box>

      {/* CEO Section */}
      <Box sx={{
        width: '558px',
        height: '660px',
        top: '1162px',
        left: '352px',
        borderRadius: '30px 0px 0px 0px',
        opacity: 0,
        position: 'relative',
      }}>
        <img
          src="/ceo.png"
          alt="Salman Sadiq"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '30px 0px 0px 0px',
          }}
        />
      </Box>

      {/* Leadership Text */}
      <Box sx={{
        width: '1216px',
        height: '660px',
        top: '1162px',
        left: '352px',
        opacity: 0,
        position: 'relative',
      }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '35px',
            textAlign: 'left',
            color: '#FFFFFF',
          }}
        >
          Salman Sadiq, Chief Executive of Sadiq Group, leads a range of companies, including Sadiq Poultry, Jaguar Construction, and SB Pharma. Known for his strategic insights and collaborative leadership, he excels in driving organizational improvements across sales, HR, finance, and R&D. With a background in poultry sciences from the USA, he manages one of Pakistan's most efficient poultry businesses. Beyond his corporate role, he is dedicated to community upliftment through the Dr. Sadiq Foundation, supporting public healthcare, education, and vocational training for sustainable development.
        </Typography>
      </Box>

      {/* Heart of our Story Section */}
      <Box sx={{
        width: '1473px',
        height: '334px',
        top: '5087px',
        left: '223px',
        opacity: 0,
        position: 'relative',
      }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '60px',
            fontWeight: 600,
            lineHeight: '75px',
            textAlign: 'center',
            color: '#027D40',
          }}
        >
          Heart of our story
        </Typography>
      </Box>

      {/* Journey Text Section */}
      <Box sx={{
        width: '1473px',
        height: '234px',
        top: '5187px',
        left: '223px',
        opacity: 0,
        position: 'relative',
      }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '54px',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          Our journey began in 2010. Since then, we have been working tirelessly to serve humanity with compassion and care. We are proud of our achievements, but we know that there is still much work to be done. We invite you to join us on this journey, as we strive to make a positive impact in the lives of others. Dr. Sadiq Foundation believes that every individual deserves to be treated with kindness and respect. We look forward to continuing our mission to make a difference in the world.
        </Typography>
      </Box>

      {/* Background with Wave Image */}
      <Box sx={{
        width: '1676px',
        height: '495px',
        top: '5521px',
        left: '122px',
        opacity: 0,
        backgroundImage: 'url("/wave.svg")',
        backgroundColor: '#027D40',
        backgroundBlendMode: 'soft-light',
        position: 'relative',
      }} />
    </div>
  );
};

export default About;
