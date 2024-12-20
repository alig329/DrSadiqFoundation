import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const Vocational = () => {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', padding: '40px', alignItems: 'stretch', marginBottom: '0px' }}>
      <Box sx={{ backgroundColor: '#027D40', padding: '40px', alignItems: 'stretch', marginBottom: '40px' }}>
        <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '12px', sm: '12px', md: '16px' }, fontWeight: '500', lineHeight: '60px', color: '#FFFFFF' }}>
            Empowering Women, Transforming Lives
        </Typography>
        <Typography variant="h1" sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF', marginBottom: '40px' }}>
        DSF'S VOCATIONAL TRAINING INITIATIVE
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'column' }, alignItems: 'stretch', marginBottom: '40px' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src='/voc1.png' alt="Dr. Muhammad Sadiq" style={{ width: '90%', height: '500px', objectFit: 'cover' }} />
        </Box>
        <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', lineHeight: '40px', color: '#000000', marginTop: '60px' }}>
          Challenge
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: '500', lineHeight: { xs: '24px', md: '34px' }, color: '#000000', textAlign: 'justify', padding: '10px 100px' }}>
        Widows, divorced women, and vulnerable individuals in rural areas often face limited opportunities for financial independence and empowerment. These women, in particular, struggle with a lack of resources, support systems, and access to skills that can help them earn a livelihood. This can lead to social isolation and a loss of dignity, as they are unable to provide for themselves and their families.
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#fff", display: "flex", justifyContent: "center" }}>
        <Grid container sx={{ maxWidth: "80vw" }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ width: "100%", height: "400px", overflow: "hidden", borderRadius: "1px" }}>
              {/* Image 1 */}
              <Box component="img"
                src="voc2.png"
                alt="Image 1"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1px",
                  transition: "transform 0.3s ease-in-out", "&:hover":
                  { transform: "scale(1.05)" },
                }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ width: "100%", height: "400px", overflow: "hidden", borderRadius: "1px" }}>
              {/* Image 2 */}
              <Box component="img"
                src="voc3.png"
                alt="Image 2"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1px",
                  transition: "transform 0.3s ease-in-out", "&:hover":
                  { transform: "scale(1.05)" },
                }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      
      <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '15px', sm: '20px', md: '30px' }, fontWeight: 'bold', lineHeight: '40px', color: '#000000', marginTop: '60px' }}>
        Our Work
      </Typography>
      <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: '500', lineHeight: { xs: '24px', md: '34px' }, color: '#000000', textAlign: 'justify', padding: '10px 100px' }}>
      To address these challenges, DSF prioritizes the empowerment of widows, divorced women, and youth through targeted vocational training programs. Through three active Skill Development Centers, located in rural areas, DSF offers training in handicrafts, tailoring, and entrepreneurship. These programs equip participants with marketable skills, enabling them to become financially independent. By fostering financial self-reliance, DSF helps restore dignity and provide these women with the opportunity to build sustainable livelihoods for themselves and their families.
        </Typography>
      
      
      <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <iframe
          width="90%"
          height="450px"
          src="https://www.youtube.com/embed/BDuJM8Yr4uo?rel=0"
          frameBorder="0"
          allow="accelerometer;
           autoplay; 
           clipboard-write;
            encrypted-media; 
            gyroscope; 
            picture-in-picture"
          allowFullScreen
          title="YouTube Video"
          style={{ borderRadius: '1px' }}
        />
        <Button
          sx={{
            width: "250px",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: "500",
            color: "#FFFFFF",
            backgroundColor: "#ECA30C",
            borderRadius: "10px",
            "&:hover": { backgroundColor: "#ECA90D" },
            textAlign: "center",
            animationDuration: "0ms",
            margin: "20px 0px 0px 10px"
          }}
          onClick={() => window.location.href = "donate"}
        >
          Support This Cause
        </Button>
      </Box>
    </Box>
  );
};

export default Vocational;
