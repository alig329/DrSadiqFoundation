import React from 'react';
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
  

   return (
    <Box
      sx={{
       height            : '65vh',
       backgroundImage   : 'url("https://i.ibb.co/bRLB5SDL/banner2.webp")',
       backgroundSize    : 'cover',
       backgroundPosition: 'center',
       display           : 'flex',
       justifyContent    : 'center',
       alignItems        : 'center',
       color             : '#fff',
       textAlign         : 'center',
      }}
    >
      
      
    </Box>
   );
  };

  
  const ThreeThumbnails = () => {
   const images = [
    {
      src        : "https://i.ibb.co/qYvGYH2R/thnail2.jpg",
      alt        : "WE SEE!",
      description: "We build strong communities by understanding and addressing their future needs. Our support goes beyond financial aid; we actively provide guidance and counseling to everyone, regardless of their background or status....",
    },
    {
      src        : "https://i.ibb.co/PzG0DtGS/QMR2.webp",
      alt        : "WE CARE!",
      description: "We care for those in need, empowering youth and women through education and health awareness. We support vulnerable communities, including widows and orphans, and create joyful moments, such as dignified weddings for orphaned girls.",
    },
    {
      src        : "https://i.ibb.co/NdmcXNG0/bbh3.jpg",
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
           animation   : `${slideUp} 1s ${index * 0.3}s ease-in-out forwards`,
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
        </Grid>
      ))
      }
      </Grid>
    </Container>);
  };
 
  return (
   <div>
    {/* Hero Section */}
    <header sx={{
      position      : 'relative',
      justifyContent: 'center',
      alignItems    : 'center',
    }} className="hero-section">
      <Carousel
       navButtonsProps={{
        style: {
          opacity: 0.4,
        },
       }}
       indicatorContainerProps={{
        style: {
          display: 'none',
        },
       }}
      >
        
       <Box sx = {{ height: '65vh', position: 'relative' }}>
        {/* Image Section */}
        <Box
          component = "img"
          src       = "https://i.ibb.co/93sMtqyS/banner.webp"
          alt       = "Dr. Sadiq Founation's Banner "
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
           width         : { xs: '35%', md: '35%', lg: '35%', xl: '35%' },
           height        : '100%',
           display       : 'flex',
           flexDirection : 'column',
           justifyContent: 'left',
           p             : { xs: 2, md: 2, lg: 2, xl: 2 },
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
            lineHeight: '2',
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
            fontWeight    : '600',
           }}
          >
           Join Us in this kind act
          </a>
        </Box>
       </Box>



       {/* Second Carousel Item */}
       <SecondCarouselItem />

       
      </Carousel>
    </header>

<Container 
  maxWidth="md" 
  sx={{ 
    my: 6, 
    py: 5, 
    textAlign: 'center', 
    backgroundColor: '#FFF', 
    borderRadius: 4,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)', 
    fontFamily: 'Poppins, sans-serif',
  }}
>
  <Typography 
    variant="h1" 
    gutterBottom 
    sx={{ 
      fontWeight: 700, 
      color: 'rgb(3, 87, 3)',
      fontSize: { xs: '24px', md: '46px' },
      lineHeight: 1.2,
    }}
  >
    Making a Difference Every Day
  </Typography>
  
  <Typography 
    variant="body1" 
    sx={{ 
      fontSize: '18px', 
      fontWeight: 400, 
      color: '#444', 
      lineHeight: 1.8,
      maxWidth: '80%',
      margin: '0 auto',
    }}
  >
    Dr. Sadiq Foundation has impacted thousands of lives across Pakistan through education,
    medical aid, empowerment, and food programs. <br />
    <strong>We invite you to be a part of this transformative journey.</strong>
  </Typography>
</Container>

<section>
    <ThreeThumbnails />
    <StatSection />
    <BelovedSection />
    <CollaborationSection />
    <StoriesOfChange />
    <CaregiversSection />
    <ProjectsWithPurpose />
</section>
    
   </div>
  );
};

export default Homepage;
