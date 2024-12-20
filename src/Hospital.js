import React from 'react';
import { Box, Grid, Typography, Button, List, ListItem } from '@mui/material';


const Hospital = () => {
    return (
        <Box sx={{ backgroundColor: '#FFFFFF', padding: '40px', alignItems: 'stretch', marginBottom: '0px' }}>
            <Box sx={{ backgroundColor: '#027D40', padding: '40px', alignItems: 'stretch', marginBottom: '40px' }}>
                <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '12px', sm: '12px', md: '16px' }, fontWeight: '500', lineHeight: '60px', color: '#FFFFFF' }}>
                    DSF's Commitment to Community Health
                </Typography>
                <Typography variant="h1" sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF', marginBottom: '40px' }}>
                    DR. SADIQ FOUNDATION HOSPITAL, MANDRA
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'column' }, alignItems: 'stretch', marginBottom: '40px' }}>


                <Box sx={{ 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center'  
                    }}>
                    <img src='/hosp11.jpg'
                     alt="DSF Hospital"
                      style={{ 
                        width: '90%', 
                        height: '600px', 
                        objectFit: 'cover'
                         }} />
                </Box>
                <Box sx={{ 
                    flex: 1,
                     mb: { xs: '20px', md: 0 },
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between'
                       }}>


                    <Typography sx={{
                        fontFamily: 'Poppins', 
                        fontSize: { xs: '14px', sm: '16px', md: '18px' }, 
                        fontWeight: '500', 
                        lineHeight: { xs: '24px', md: '34px' }, 
                        color: '#000000', 
                        textAlign: 'left',
                        marginTop: '20px',
                        padding: '10px 100px 10px 100px'
                    }}>
                        The Dr. Sadiq Foundation (DSF) Hospital in Mandra, Tehsil Gujjar Khan, District Rawalpindi, is a groundbreaking healthcare initiative. Designed as a state-of-the-art teaching hospital, it will cater to the diverse medical needs of the region, providing quality care and training the next generation of medical professionals.

                        <List>
                            <ListItem>
                                <Typography variant="body1" sx={{ color: '#027D40', fontWeight: 'bold' }}>
                                    Capacity:<br/>
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#000000' }}>
                                    200 beds
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1" sx={{ color: '#027D40', fontWeight: 'bold' }}>
                                    Specialized Services:<br/>
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#000000' }}>
                                    Nine advanced medical disciplines
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1" sx={{ color: '#027D40', fontWeight: 'bold' }}>
                                    Current Phase:<br/>
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#000000' }}>
                                    Construction underway, following approval from the Tehsil Municipal Administration (TMA) Rawalpindi
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1" sx={{ color: '#027D40', fontWeight: 'bold' }}>
                                    Estimated Cost:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#000000' }}>
                                    PKR 10 billion
                                </Typography>
                            </ListItem>
                        </List>
                    </Typography>

                </Box>
                <Typography variant="h2" sx={{ 
                    display: 'flex',
                     justifyContent: 'center', 
                     fontSize: { xs: '20px', sm: '30px', md: '40px' }, 
                 fontWeight: 'bold',
                  lineHeight: '40px', 
                  color: '#000000',
                  marginTop: '60px' }}>
                    Challenge
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: '500', lineHeight: { xs: '24px', md: '34px' }, color: '#000000', textAlign: 'justify', padding: '10px 100px' }}>
                    Mandra faces severe healthcare challenges, including limited access to quality medical services and overcrowded facilities that delay treatments. The lack of specialized care in fields like cardiology and oncology forces residents to travel long distances, often compromising their health. Additionally, the absence of local medical training institutions leaves the region underserved by skilled professionals, further deepening the healthcare crisis.
                </Typography>
            </Box>
            <Box sx={{
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
            }} >
                <Grid container sx={{
                    maxWidth: "80vw",
                }} spacing={2} >
                    <Grid item xs={12} sm={6}>
                        <Box sx={{
                            width: "100%",
                            height: "400px",
                            overflow: "hidden",
                            borderRadius: "1px",
                        }} >
                            {/* Image 1 */}
                            <Box component="img"
                                src="mandra1.png"
                                alt="Image 1"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "1px",
                                    transition: "transform 0.3s ease-in-out", "&:hover":
                                     { transform: "scale(2.05)" },
                                }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{
                            width: "100%",
                            height: "400px",
                            overflow: "hidden",
                            borderRadius: "1px",
                        }} >
                            {/* Image 2 */}
                            <Box component="img"
                                src="mandra2.png"
                                alt="Image 2"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "1px",
                                    transition: "transform 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.05)"
                                    },
                                }} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Typography variant="h2" sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                 fontSize: { xs: '15px', sm: '20px', md: '30px' }, 
                 fontWeight: 'bold',
                  lineHeight: '40px', 
                  color: '#000000',
                  marginTop: '60px'
                  }}>
            WHY THERE IS A NEED FOR A HOSPITAL?
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: '500', lineHeight: { xs: '24px', md: '34px' }, color: '#000000', textAlign: 'justify', padding: '10px 100px' }}>
                The DSF Hospital is crucial to addressing these challenges by providing advanced medical services and specialized care locally. It will ensure timely treatment, improve health outcomes, and promote preventive care. By establishing medical education programs, the hospital will train future professionals, empowering them to serve their communities effectively. This project will also boost the local economy through job creation and infrastructure development.
                </Typography>
                <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src='/angio.png' alt="Dr. Muhammad Sadiq" style={{ width: '90%', height: '450px', objectFit: 'cover' }} />
                </Box>
                <Typography variant="h2" sx={{ 
                    display: 'flex',
                     justifyContent: 'center',
                      fontSize: { xs: '15px', sm: '20px', md: '30px' }, 
                 fontWeight: 'bold',
                  lineHeight: '40px', 
                  color: '#000000',
                  marginTop: '60px' }}>
                Our Goal
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: '500', lineHeight: { xs: '24px', md: '34px' }, color: '#000000', textAlign: 'justify', padding: '10px 100px' }}>
                The DSF Hospital aims to deliver comprehensive healthcare services, including specialized treatments in cardiology, oncology, and neurology. It seeks to establish a robust medical education system to train healthcare professionals and support long-term sustainability. Ultimately, the hospital aspires to improve the quality of life in the region and serve as a hub for community development.
                </Typography>
                <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <iframe
                          width="90%"
                          height="450px"
                          src="https://www.youtube.com/embed/cmIfYSh_gUk?si=B1ocRBb93wdz5hWC?rel=0"
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
              "&:hover": { backgroundColor: "#cc8a09" },
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

export default Hospital;