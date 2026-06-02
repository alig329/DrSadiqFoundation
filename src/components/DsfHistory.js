import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const DsfHistory = () => {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', alignItems: 'stretch' }}>
      <Box sx={{ backgroundColor: '#027D40' }}>
        <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '12px', sm: '12px', md: '16px' }, fontWeight: { xs: '300', md: '500' }, lineHeight: { xs: '20px', md: '40px' }, color: '#FFFFFF' }}>
          Help for all, facilities for all
        </Typography>
        <Typography variant="h1" sx={{ fontFamily: 'Poppins', fontSize: { xs: '18px', sm: '20px', md: '34px' }, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF', marginBottom: '0.5px' }}>
          DSF JOURNEY
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'stretch', marginBottom: { xs: '5px', md: '40px' } }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="https://i.ibb.co/bRLB5SDL/banner2.webp" alt="Dr. Sadiq Foundation" style={{ width: '90%', height: 'auto', objectFit: 'cover' }} />
        </Box>
        <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '16px', md: '24px' }, fontWeight: 'bold', lineHeight: { xs: '10px', md: '40px' }, color: '#000000', marginTop: { xs: '10px', md: '40px' } }}>
          Challenge
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '12px', md: '16px' }, fontWeight: { xs: '300', md: '500' }, lineHeight: { xs: '20px', md: '24px' }, color: '#000000', textAlign: 'justify', padding: { xs: '10px', md: '10px 250px' } }}>
          Many deserving people from underpreviliged units of Pakistan face financial barriers that prevent them from pursuing or acheiving their goals. With limited financial resources, these people struggle day and night to earn their livelihood, and other academic expenses. Additionally, managing the financial, educational, medical welfare process across multiple sectors while ensuring fairness, transparency, and efficiency was a complex challenge.
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: "#fff", display: "flex", justifyContent: "center" }}>
        <Grid container sx={{ maxWidth: "80vw" }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ width: "100%", height: { xs: "200px", md: "400px" }, overflow: "hidden", borderRadius: "1px" }}>
              <Box component="img" src="https://i.ibb.co/pjckXG7y/sch2.webp" alt="Healthcare Welfare"
                sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1px", transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" } }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ width: "100%", height: { xs: "200px", md: "400px" }, overflow: "hidden", borderRadius: "1px" }}>
              <Box component="img" src="https://i.ibb.co/WNSY77DC/sch3.webp" alt="DSF Paramedics"
                sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1px", transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" } }} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '16px', md: '24px' }, fontWeight: 'bold', lineHeight: { xs: '10px', md: '40px' }, color: '#000000', marginTop: { xs: '10px', md: '40px' } }}>
        Our Work
      </Typography>
      <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '12px', md: '16px' }, fontWeight: { xs: '300', md: '500' }, lineHeight: { xs: '20px', md: '24px' }, color: '#000000', textAlign: 'justify', padding: { xs: '5px', md: '10px 250px' } }}>
       DSF is dedicated to addressing various challenges faced by underprivileged communities. The organization provides annual scholarships to students from public sector universities spread across KPK, Punjab, and Sindh. Additionally, DSF offers monthly food expenses to deserving families, educational support for underprivileged children, and free medical care in disadvantaged areas through DSF dispensaries. This multifaceted approach ensures that financial aid, nutrition, education, and healthcare are accessible to those in need.
      </Typography>

      <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <iframe width="90%" height="400px" src="https://www.youtube.com/embed/cOJr2OA1lbo?rel=0" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen title="YouTube Video" style={{ borderRadius: '1px' }} />
        <Button sx={{ width: "250px", fontFamily: "Poppins", fontSize: { xs: "12px", md: "18px" }, fontWeight: { xs: "300", md: "500" }, color: "#FFFFFF", backgroundColor: "#FF9900", borderRadius: "10px", "&:hover": { backgroundColor: "#E68A00" }, textAlign: "center", animationDuration: "0ms", margin: { xs: "5px 5px", md: "20px 0px 0px 10px" } }}
          onClick={() => window.location.href = "donate"}>
          Support This Cause
        </Button>
      </Box>
    </Box>
  );
};

export default DsfHistory;
