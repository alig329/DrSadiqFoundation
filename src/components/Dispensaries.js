import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const Dispensaries = () => {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', padding: '40px', alignItems: 'stretch', marginBottom: '0px' }}>
      <Box sx={{ backgroundColor: '#027D40', padding: '40px', alignItems: 'stretch', marginBottom: '40px' }}>
        <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '12px', sm: '12px', md: '16px' }, fontWeight: '500', lineHeight: '60px', color: '#FFFFFF' }}>
            Ensuring Quality Healthcare For All
        </Typography>
        <Typography variant="h1" sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF', marginBottom: '40px' }}>
            DSF DISPENSARIES
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'column' }, alignItems: 'stretch', marginBottom: '40px' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src='/sc1.jpg' alt="Dr. Muhammad Sadiq" style={{ width: '90%', height: '500px', objectFit: 'cover' }} />
        </Box>
        <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', lineHeight: '40px', color: '#000000', marginTop: '60px' }}>
          Challenge
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: '500', lineHeight: { xs: '24px', md: '34px' }, color: '#000000', textAlign: 'justify', padding: '10px 100px' }}>
        In the Chakri region, access to quality healthcare is limited, particularly for people living in remote areas and surrounding tehsils. Patients often travel long distances to seek medical attention, making healthcare both costly and time-consuming. Ensuring that medical services are consistently available and managing a high daily patient inflow—ranging from 100 to 200 patients—poses significant challenges. Additionally, maintaining uninterrupted service in rural dispensaries requires a committed healthcare team and efficient management.
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#fff", display: "flex", justifyContent: "center" }}>
        <Grid container sx={{ maxWidth: "80vw" }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ width: "100%", height: "400px", overflow: "hidden", borderRadius: "1px" }}>
              {/* Image 1 */}
              <Box component="img"
                src="mandra2.png"
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
                src="disp3.png"
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
      To address these challenges, DSF runs two dispensaries in the Chakri region, providing vital healthcare services to both local residents and those from distant areas. The Dheri Dispensary operates six days a week (9:00 AM - 5:00 PM) since its inauguration on June 21, 2014, ensuring consistent healthcare access without any unscheduled closures. The Mial Dispensary, functioning since June 10, 2016, operates once a week on Saturdays (9:00 AM - 1:00 PM) and has continued its regular operations without interruption.<br/>
      <br/>
A dedicated team of doctors, nurses, and paramedics provides quality care, which has earned the dispensaries a reputation for reliability and trust within the community. With an average of 150 to 200 patients visiting daily, both dispensaries have proven successful in serving their communities. During the financial year 2019-2020, a total of 38,156 patients were treated at a cost of Rs. 8,036,597, demonstrating DSF's commitment to providing accessible
and affordable healthcare in the region.
        </Typography>
      
      
      <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <iframe
          width="90%"
          height="450px"
          src="https://www.youtube.com/embed/cmIfYSh_gUk?rel=0"
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
            backgroundColor: "#027D40",
            borderRadius: "10px",
            "&:hover": { backgroundColor: "#029D40" },
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

export default Dispensaries;
