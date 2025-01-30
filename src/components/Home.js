import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CaregiversSection from '../CareGivers';
import StoriesOfChange from '../StoriesOfChange';
import CollaborationSection from './CollaborationSection';
import ProjectsWithPurpose from './ProjectsPurpose';
import BelovedSection from './BelovedSection';
import StatSection from './StatSection';
import { keyframes } from '@mui/system';
import { motion } from 'framer-motion';

const slideUp = keyframes`
 0% { 
 transform: translateY(-100%);
 opacity  : 0;
  }
  100% { 
  transform: translateY(0);
  opacity  : 1;
   } 
  `;

const Homepage = () => {
  const SecondCarouselItem = () => {
   const textLines = [
    "At Dr. Sadiq Foundation, we actively make a difference in the lives of those who need it most.",
    "Food Projects: Providing 3 meals to an average of 400 patients daily",
    "Dispensaries: Offering free medicine to 50,000 patients annually",
    "Skill Development Centers: Teaching skills to build a better future",
    "Scholarships: Fulfilling the education needs of brilliant students",
   ];

   const [currentLine, setCurrentLine] = useState(0);
   const [isFadingIn, setIsFadingIn]   = useState(true);

   useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingIn(true);                              // Start with fade-in
      setTimeout   (() => setIsFadingIn(false), 3000);  // Then fade-out

       // Move to the next line or loop back to the start
      setTimeout(() => setCurrentLine((prev) => (prev + 1) % textLines.length), 1000);
    }, 3000);

    return () => clearInterval(interval);
   });

   return (
    <Box
      sx={{
       height            : '60vh',
       backgroundImage   : 'url("/banner2.png")',
       backgroundSize    : 'cover',
       backgroundPosition: 'center',
       display           : 'flex',
       justifyContent    : 'center',
       alignItems        : 'center',
       color             : '#fff',
       textAlign         : 'center',
      }}
    >
      
      <Box
       sx={{
        position : "absolute",
        top      : "80%",
        left     : "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
       }}
      >
       <Typography variant = "h6" sx = {{ mb: 2, fontWeight: "bold", color: "rgba(255, 255, 255, 0.8)" }}>
        Compassion drives our Multiple Welfare Projects
       </Typography>
       <Typography
        key = {currentLine}
        sx  = {{
          opacity   : isFadingIn ? 1             : 0,
          transition: "opacity 1s 1s ease-out",     // Smooth fade-in and fade-out
          mb        : 1,
          color     : "rgba(255, 255, 255, 0.8)",
        }}
       >
        {textLines[currentLine]}
       </Typography>
      </Box>
    </Box>
   );
  };

  const ThreeThumbnails = () => {
   const images = [
    {
      src        : "/thnail2.png",
      alt        : "WE SEE!",
      description: "We build strong communities by understanding and addressing their future needs. Our support goes beyond financial aid; we actively provide guidance and counseling to everyone, regardless of their background or status....",
    },
    {
      src        : "/QMR2.png",
      alt        : "WE CARE!",
      description: "We care for those in need, empowering youth and women through education and health awareness. We support vulnerable communities, including widows and orphans, and create joyful moments, such as dignified weddings for orphaned girls.",
    },
    {
      src        : "/bbh3.png",
      alt        : "WE SERVE!",
      description: "We run a unique program, driven by our team's creative approach and commitment to addressing social needs. We discreetly identify and support those in need, using a thorough verification process to ensure that help reaches those who deserve it most.",
    },
   ];

   const overlayStyles = [{
    backgroundColor: "rgba(49, 157, 167, 0.69)",
   },
   { backgroundColor: "rgba(214, 148, 13, 0.6)" },
   { backgroundColor: "rgba(134, 55, 115, 0.75)" },
   ];
   return (
    <Container sx={{
      backgroundColor: "#f9f9f9",
      py             : 0
    }}>
      <Grid container spacing = {0}>
       {images.map((image, index) => (
        <Grid item xs = {12} sm = {6} md = {4} key = {index}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Box  sx      = {{
           position    : "relative",
           height      : "300px",
           overflow    : "hidden",
           borderRadius: "0px",
           animation   : `${slideUp} 1s ${index * 0.2}s ease-in-out forwards`,
          }} >
           <Box
            component = "img"
            src       = {image.src}
            alt       = {image.alt}
            sx        = {{
              width     : "98%",
              height    : "100%",
              objectFit : "cover",
              transition: "transform 0.3s ease-in-out",
              "&:hover" : { transform: "scale(1.05)" },
            }} />
           <Box sx={{
            position: "absolute",
            top     : 0,
            left    : 0,
            width   : "90%",
            height  : "100%",
            ...overlayStyles[index],
            display       : "flex",
            flexDirection : "column",
            justifyContent: "flex-end",
            p             : 2,
            textAlign     : "center",
            opacity       : 1,
            transition    : "opacity 0.3s ease-in-out",
            "&:hover"     : { opacity: 0 },
           }} >
            <Typography variant = "body2"
                    sx      = {{
               color     : "rgba(255, 255, 255, 0.8)",
               fontFamily: "Poppins, sans-serif",
               fontSize  : "12px",
               fontWeight: "500",
               lineHeight: 2.5,
               mb        : 2,
               textAlign : "center",
              }}>
              {image.description}
            </Typography>
            <Typography variant="h4" sx={{
              color     : "#FFFFFF",
              fontFamily: "Poppins, sans-serif",
              fontSize  : "18px",
              fontWeight: "bold",
              mb        : 3
            }}>
              {image.alt}
            </Typography>
           </Box>
          </Box>
        </motion.div>
        </Grid>))}
      </Grid>
    </Container>);
  };

  return (
   <div>
    {/* Hero Section */}
    <Box sx={{
      position      : 'relative',
      height        : '300px',
      width         : '86%',
      justifyContent: 'center',
      alignItems    : 'center',
      margin        : 'auto',
      marginTop     : '0px',
      marginBottom  : '20vh'
    }} className="hero-section">
      <Carousel
       navButtonsProps={{
        style: {
          opacity: 0.3,
        },
       }}
       indicatorContainerProps={{
        style: {
          display: 'none',
        },
       }}
      >
        
       <Box sx = {{ height: '60vh', position: 'relative' }}>
        {/* Image Section */}
        <Box
          component = "img"
          src       = "banner.png"
          alt       = "Image 1"
          sx        = {{
           width    : '100%',
           height   : '100%',
           objectFit: 'auto',
          }}
        />
        {/* Typography Section */}
        <Box
          sx={{
           position      : 'absolute',
           top           : 60,
           left          : 15,
           width         : { xs: '100%', md: '35%' },
           height        : '100%',
           display       : 'flex',
           flexDirection : 'column',
           justifyContent: 'left',
           p             : { xs: 2, md: 4 },
          }}
        >
          <Typography
           variant = "h3"
           sx      = {{
            fontWeight: 'bold',
            color     : 'rgba(255, 255, 255, 0.8)',
            mb        : 2,
            fontSize  : { xs: '18px', md: '24px' },
           }}
          >
           FOUNDATION FOR A BRIGHTER NATION
          </Typography>
          <Typography
           variant = "body1"
           sx      = {{
            lineHeight: '1.4',
            color     : 'rgba(255, 255, 255, 0.8)',
            mb        : 2,
            fontSize  : { xs: '12px', md: '16px' },
           }}
          >
           Everyone deserves access to quality education, healthcare,
           
           and economic opportunities. At Dr. Sadiq Foundation, we
          
           make this possible through empathy, kindness, and understanding.
          </Typography>
          <a
           href  = "/donate"
           style = {{
            color         : 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'underline',
            fontSize      : '16px',
            fontWeight    : '500',
           }}
          >
           Join Us in this kind act
          </a>
        </Box>
       </Box>



       {/* Second Carousel Item */}
       <SecondCarouselItem />

       {/* Third Carousel Item 
       <Box sx={{
        height            : '60vh',
        backgroundImage   : 'url("/hostel.jpg")',
        backgroundSize    : 'cover',
        backgroundPosition: 'center',
        position          : 'relative'
       }}>
        <Box sx={{
          position : 'absolute',
          top      : '80%',
          left     : '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color    : '#FFFFFF',
          width    : { xs: '90%', md: '60%' }
        }}>
          <Typography variant="h5" sx={{
           fontFamily: 'Poppins',
           fontWeight: '600',
           mb        : 1
          }}>
           Let’s Heal & Help!
          </Typography>
          <Typography variant="body1" sx={{
           fontFamily: 'Poppins',
           fontSize  : '18px',
           fontWeight: '500',
           lineHeight: '1.5',
           mb        : 2
          }}>
           DSF Hospital project
          </Typography>
          <Typography variant="body1" sx={{
           fontFamily: 'Poppins',
           fontSize  : '15px',
           fontWeight: '400',
           lineHeight: '1.5'
          }}>
           Support the DSF Hospital project and help us heal and comfort other souls. Your donation will help bring quality healthcare closer to home.
          </Typography>
        </Box>
       </Box> */}
      </Carousel>
    </Box>

    <ThreeThumbnails />
    <StatSection />
    <BelovedSection />
    <CollaborationSection />
    <StoriesOfChange />
    <CaregiversSection />
    <ProjectsWithPurpose />
   </div>
  );
};

export default Homepage;