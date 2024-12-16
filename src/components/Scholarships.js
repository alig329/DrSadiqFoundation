import React from 'react';
import { Box, Typography, Grid, List, ListItem, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Scholarships = () => {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', padding: '40px', alignItems: 'stretch', marginBottom: '0px' }}>
      <Box sx={{ backgroundColor: '#027D40', padding: '40px', alignItems: 'stretch', marginBottom: '40px' }}>
        <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '12px', sm: '12px', md: '16px' }, fontWeight: '500', lineHeight: '60px', color: '#FFFFFF' }}>
          Supporting Dreams, Shaping Futures:
        </Typography>
        <Typography variant="h1" sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF', marginBottom: '40px' }}>
          DSF SCHOLARSHIPS
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'column' }, alignItems: 'stretch', marginBottom: '40px' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src='/sch1.png' alt="Dr. Muhammad Sadiq" style={{ width: '90%', height: '500px', objectFit: 'cover' }} />
        </Box>
        <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', lineHeight: '40px', color: '#000000', marginTop: '60px' }}>
          Challenge
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: '500', lineHeight: { xs: '24px', md: '34px' }, color: '#000000', textAlign: 'justify', padding: '10px 100px' }}>
        Many deserving students from public sector universities in Pakistan face financial barriers that prevent them from pursuing or completing their higher education. With limited financial resources, these students struggle to afford tuition and other academic expenses. Additionally, managing the scholarship application process across multiple universities while ensuring fairness, transparency, and efficiency was a complex challenge.
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
      To address these challenges, DSF provides 120 annual scholarships to students from 11 public sector universities spread across KPK, Punjab, and Sindh. Students apply for financial assistance through a standardized form (S-1), which is submitted to their respective university for processing. The Heads or Deans of Faculties review the applications and forward them to DSF with their recommendations, ensuring that only eligible students are considered. <br/>
      Once approved, DSF issues cross cheques in the individual student's name and delivers them to the university management for distribution. This system ensures transparency and accountability in delivering financial aid directly to students. The universities currently benefiting from the DSF Scholarship include:
        </Typography>
      <Box sx={{ flex: 1, mb: { xs: '20px', md: 0 }, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 100px' }}>
        <List sx={{ flex: 1 }}>
          {[
            "Bahauddin Zakriya University, Multan.",
            "Khyber Medical College, Peshawar.",
            "NED University of Engineering & Technology, Karachi.",
            "Gomal University, D. I. Khan, KPK.",
            "Khyber Medical College, Peshawar"
          ].map((item, index) => (
            <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleIcon sx={{ color: 'green', borderRadius: '50%', marginRight: '8px' }} />
              <Typography variant="body1" sx={{ color: '#000000' }}>
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
        <List sx={{ flex: 1 }}>
          {[
            "NED University of Engineering & Technology, Karachi.",
            "PMAS Arid Agriculture University, Rawalpindi.",
            "Sindh Agriculture University, Tandojam, Sindh.",
            "University of Agriculture, Faisalabad & Peshawar",
            "University of Veterinary & Animal Sciences, Lahore."
          ].map((item, index) => (
            <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleIcon sx={{ color: 'green', borderRadius: '50%', marginRight: '8px' }} />
              <Typography variant="body1" sx={{ color: '#000000' }}>
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      
      <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <iframe
          width="90%"
          height="450px"
          src="https://www.youtube.com/embed/UZq2VasXVDk?rel=0"
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

export default Scholarships;
