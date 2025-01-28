import React from 'react';
import { Box, Typography, Grid,  Button } from '@mui/material';

const DsfHistory = () => {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', padding: '40px', alignItems: 'stretch', marginBottom: '0px' }}>
      <Box sx={{ backgroundColor: '#027D40', padding: '40px', alignItems: 'stretch', marginBottom: '40px' }}>
        <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '12px', sm: '12px', md: '16px' }, fontWeight: '500', lineHeight: '60px', color: '#FFFFFF' }}>
          Help for all, facilities for all:
        </Typography>
        <Typography variant="h1" sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF', marginBottom: '40px' }}>
        DSF JOURNEY
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'column' }, alignItems: 'stretch', marginBottom: '40px' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src='/banner2.png' alt="Dr. Muhammad Sadiq" style={{ width: '90%', height: '500px', objectFit: 'cover' }} />
        </Box>
        <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', lineHeight: '40px', color: '#000000', marginTop: '60px' }}>
          Challenge
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: '500', lineHeight: { xs: '24px', md: '34px' }, color: '#000000', textAlign: 'justify', padding: '10px 100px' }}>
        Many deserving people from underpreviliged units of Pakistan face financial barriers that prevent them from pursuing or acheiving their goals. With limited financial resources, these people struggle day and night to earn their livelihood, and other academic expenses. Additionally, managing the financial, educational, medical welfare process across multiple sectors while ensuring fairness, transparency, and efficiency was a complex challenge.
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#fff", display: "flex", justifyContent: "center" }}>
        <Grid container sx={{ maxWidth: "80vw" }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ width: "100%", height: "400px", overflow: "hidden", borderRadius: "1px" }}>
              {/* Image 1 */}
              <Box component="img"
                src="sch2.png"
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
                src="sch3.png"
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
      DSF is dedicated to addressing various challenges faced by underprivileged communities. The organization provides annual scholarships to students from public sector universities spread across KPK, Punjab, and Sindh. Additionally, DSF offers monthly food expenses to deserving families, educational support for underprivileged children, and free medical care in disadvantaged areas through DSF dispensaries. This multifaceted approach ensures that financial aid, nutrition, education, and healthcare are accessible to those in need. The universities currently benefiting from the DSF Scholarship include:
        </Typography>
      
      
      <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <iframe
          width="90%"
          height="450px"
          src="https://www.youtube.com/embed/cOJr2OA1lbo?rel=0"
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
            backgroundColor: "#FF9900",
            borderRadius: "10px",
            "&:hover": { backgroundColor: "#E68A00" },
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

export default DsfHistory;
