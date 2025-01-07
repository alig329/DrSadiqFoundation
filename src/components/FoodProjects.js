import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const FoodProjects = () => {
  return (
    <Box        sx      = {{ backgroundColor: '#FFFFFF', padding: '40px', alignItems: 'stretch', marginBottom: '0px' }}>
    <Box        sx      = {{ backgroundColor: '#027D40', padding: '40px', alignItems: 'stretch', marginBottom: '40px' }}>
    <Typography variant = "h2" sx = {{ display: 'flex', justifyContent: 'center', fontSize: { xs: '12px', sm: '12px', md: '16px' }, fontWeight: '500', lineHeight: '60px', color: '#FFFFFF' }}>
            Nourishing Lives
        </Typography>
        <Typography variant = "h1" sx = {{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF', marginBottom: '40px' }}>
             DSF-BBH Food Project
        </Typography>
      </Box>
      <Box sx  = {{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'column' }, alignItems: 'stretch', marginBottom: '40px' }}>
      <Box sx  = {{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src = '/sc2.jpg' alt = "Dr. Muhammad Sadiq" style = {{ width: '90%', height: '500px', objectFit: 'cover' }} />
        </Box>
        <Typography variant = "h2" sx = {{ display: 'flex', justifyContent: 'center', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', lineHeight: '40px', color: '#000000', marginTop: '60px' }}>
        Identified Barrier
        </Typography>
        <Typography sx = {{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: '500', lineHeight: { xs: '24px', md: '34px' }, color: '#000000', textAlign: 'justify', padding: '10px 100px' }}>
        Since its launch in February 2010, the DSF-BBH Food Project has encountered numerous challenges in maintaining consistent healthcare services. The critical task of providing three daily meals—breakfast, lunch, and dinner—to indoor patients requires a complex supply chain to ensure the continuous availability of fresh ingredients. To meet the nutritional needs of an average of 400 patients per meal, engaging multiple vendors became necessary to ensure an uninterrupted food supply. Additionally, the COVID-19 pandemic introduced significant hurdles, including a decrease in patient numbers due to social distancing measures, which disrupted service dynamics and logistics.
        </Typography>
      </Box>
      <Box  sx           = {{ backgroundColor: "#fff", display: "flex", justifyContent: "center" }}>
      <Grid container sx = {{ maxWidth: "80vw" }} spacing = {2}>
      <Grid item xs      = {12} sm                        = {6}>
      <Box  sx           = {{ width: "100%", height: "400px", overflow: "hidden", borderRadius: "1px" }}>
              {/* Image 1 */}
              <Box component = "img"
                   src       = "bbh2.png"
                   alt       = "Image 1"
                   sx        = {{
                  width       : "100%",
                  height      : "100%",
                  objectFit   : "cover",
                  borderRadius: "1px",
                  transition  : "transform 0.3s ease-in-out", "&:hover": 
                  { transform: "scale(1.05)" },
                }} />
            </Box>
          </Grid>
          <Grid item xs = {12} sm = {6}>
          <Box  sx      = {{ width: "100%", height: "400px", overflow: "hidden", borderRadius: "1px" }}>
              {/* Image 2 */}
              <Box component = "img"
                   src       = "bbh3.png"
                   alt       = "Image 2"
                   sx        = {{
                  width       : "100%",
                  height      : "100%",
                  objectFit   : "cover",
                  borderRadius: "1px",
                  transition  : "transform 0.3s ease-in-out", "&:hover": 
                  { transform: "scale(1.05)" },
                }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      
      <Typography variant = "h2" sx = {{ display: 'flex', justifyContent: 'center', fontSize: { xs: '15px', sm: '20px', md: '30px' }, fontWeight: 'bold', lineHeight: '40px', color: '#000000', marginTop: '60px' }}>
      Our Approach
      </Typography>
      <Typography sx = {{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: '500', lineHeight: { xs: '24px', md: '34px' }, color: '#000000', textAlign: 'justify', padding: '10px 100px' }}>
      Despite these challenges, the DSF-BBH Food Project has remained fully operational since its launch, supported by a dedicated team of 21 staff members committed to delivering high-quality service. Throughout the pandemic, the project adapted by continuing as a dedicated COVID-19 treatment center, ensuring uninterrupted service to all patients, including those affected by the virus. The staff worked tirelessly to provide nutritious meals, demonstrating their resilience and commitment during such a challenging time. As the project nears its conclusion in September 2024, its contributions to patient care—particularly during the pandemic—serve as a testament to the team's unwavering dedication to serving the community.
        </Typography>
      
      
      <Box sx = {{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <iframe
          width       = "90%"
          height      = "450px"
          src         = "https://www.youtube.com/embed/JY4Mp8o7BVo?rel=0"
          frameBorder = "0"
          allow       = "accelerometer;
           autoplay; 
           clipboard-write;
            encrypted-media; 
            gyroscope; 
            picture-in-picture"
          allowFullScreen
          title = "YouTube Video"
          style = {{ borderRadius: '1px' }}
        />
        <Button
          sx={{
            width            : "250px",
            fontFamily       : "Poppins",
            fontSize         : "18px",
            fontWeight       : "500",
            color            : "#FFFFFF",
            backgroundColor  : "#ECA30C",
            borderRadius     : "10px",
            "&:hover"        : { backgroundColor: "#ECA90D" },
            textAlign        : "center",
            animationDuration: "0ms",
            margin           : "20px 0px 0px 10px"
          }}
          onClick = {() => window.location.href = "donate"}
        >
          Support This Cause
        </Button>
      </Box>
    </Box>
  );
};

export default FoodProjects;
