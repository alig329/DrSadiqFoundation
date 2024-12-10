import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CaregiversSection from '../CareGivers';
import StoriesOfChange from '../StoriesOfChange';
import CollaborationSection from './CollaborationSection';
import ProjectsWithPurpose from './ProjectsPurpose';
import BelovedSection from './BelovedSection';
import StatSection from './StatSection';

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
    const [isFadingIn, setIsFadingIn] = useState(true);

    useEffect(() => {
      
      const interval = setInterval(() => {
        setIsFadingIn(true); // Start with fade-in
        setTimeout(() => setIsFadingIn(false), 3000); // Then fade-out

        // Move to the next line or loop back to the start
        setTimeout(() => setCurrentLine((prev) => (prev + 1) % textLines.length), 3000);
      }, 4000);

      return () => clearInterval(interval);
    }, []);

    return (
      <Box
        sx={{
          height: '100vh',
        backgroundImage: 'url("/banner2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
            Compassion drives our Multiple Welfare Projects
          </Typography>
          <Typography
            key={currentLine}
            sx={{
              opacity: isFadingIn ? 1 : 0,
              transition: "opacity 1s 1s ease-in-out", // Smooth fade-in and fade-out
              mb: 1,
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
        src: "/thnail1.png",
        alt: "We Care",

        description:
          "We care for those in need, empowering youth and women through education and health awareness. We support vulnerable communities, including widows and orphans, and help create joyful moments, like dignified weddings for orphan girls.",
      },
      {
        src: "/thnail2.png",
        alt: "We See",

        description: "We build strong communities by understanding and meeting their future needs. Our support goes beyond just financial aid. We are actively providing guidance and counseling to everyone, regardless of their background or status.",
      },
      {
        src: "/thnail3.png",
        alt: "We Serve",

        description: "We run a unique program, driven by our team's creative approach and commitment to social needs. We discreetly identify and support those in need, using a thorough verification process to ensure help reaches those who deserve it most.",
      },
    ];

    const overlayStyles = [
      {
        backgroundColor: "rgb(49, 157, 167, 0.7)"

      },
      {
        backgroundColor: "rgb(214, 148, 13, 0.7)"

      },
      {
        backgroundColor: "rgb(134, 55, 115, 0.7)"
      },
    ];
    return (
      <Box
        sx={{

          backgroundColor: "#f9f9f9",
          display: "flex",
          justifyContent: "center",

        }} >
        <Grid container
          sx={{
            maxWidth: "100vw",

          }} >
          {images.map((image, index) =>
          (<
            Grid item
            xs={12} sm={6} md={4}
            key={index}>
            <Box sx={{
              position: "relative",
              width: "100%",
              height: "450px",
              overflow: "hidden",
              borderRadius: "1px",

            }} >
              {/* Image */}
              <Box component="img"
                src={image.src}
                alt={image.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1px",
                  transition: "transform 0.3s ease-in-out", "&:hover":
                    { transform: "scale(1.05)" },
                }} />
              {/* Overlay */}
              <Box sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                ...overlayStyles[index],
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: 2,
                textAlign: "center",
                borderRadius: "10px",
                opacity: 1,
                transition: "opacity 0.3s ease-in-out", "&:hover": { opacity: 0 },
              }} >
                <Typography variant="body2"
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: 3, mt: 5, ml: 5, mr: 5,

                  }} >
                  {image.description}
                </Typography>
                <Typography variant="h1"
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "48px",
                    fontWeight: "bold",
                    mb: 1,
                    textAlign: "center",

                  }} >
                  {image.alt === "We Care" && "WE CARE!"}
                  {image.alt === "We See" && "WE SEE!"}
                  {image.alt === "We Serve" && "WE SERVE!"}
                </Typography>
              </Box>
            </Box>
            {/* Big Text */}
            <Typography variant="h6"
              sx={{
                mt: 2,
                textAlign: "center",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                color: "#000000",
              }} >
              {image.title}
            </Typography>
          </Grid>

          )
          )}
        </Grid>
      </Box>);
  };

  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100%',
        }}
        className="hero-section"
      >
        <Carousel>
          {/* First Carousel Item */}
          <Box
            sx={{
              height: '100vh',
              backgroundImage: 'url("/banner.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '620px',
                height: '50px',
                top: '200px',
                left: '50px',
                fontWeight: 'bold',
                color: '#FFFFFF',
              }}
              className="hero-overlay"
            >
              <Typography variant="h3" className="hero-title">
                FOUNDATION FOR A BRIGHTER NATION
              </Typography>
              <Typography
                variant="body1"
                className="hero-subtitle"
                sx={{
                  width: '500px',
                  lineHeight: '80px'
                }}
              >
                Everyone deserves access to quality education, healthcare, and economic opportunities. At Dr. Sadiq Foundation, we
                make this possible with empathy, kindness, and understanding.
              </Typography>
              <a href="/new-screen" style={{ color: '#FFFFFF', textDecoration: 'underline', lineHeight: '80px' }}>Join Us in this kind act</a>
            </Box>
          </Box>

          {/* Second Carousel Item */}
          <SecondCarouselItem />

          {/* Third Carousel Item */}
          <Box
            sx={{
              height: '100vh',
              backgroundImage: 'url("/banner3.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: '#FFFFFF',
                width: '760px',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '48px',
                  fontWeight: '600',
                  lineHeight: '46px',
                  textDecorationSkipInk: 'none',
                }}
              >
                Let’s Heal & Help!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '33px',
                  textAlign: 'center',
                  textDecorationSkipInk: 'none',
                  color: '#FFFFFF',
                  mt: 2,
                }}
              >
                DSF Hospital project
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '33px',
                  textAlign: 'center',
                  textDecorationSkipInk: 'none',
                  color: '#FFFFFF',
                  mt: 1,
                }}
              >
                Support the DSF Hospital project and help us heal and comfort other souls. Your donation will help bring quality healthcare closer to home.
              </Typography>
            </Box>
          </Box>
        </Carousel>
      </Box>
    
    
      <ThreeThumbnails />
      <StatSection/>
      <BelovedSection/>
      <CollaborationSection/>
      <StoriesOfChange/>
      <CaregiversSection/>
      <ProjectsWithPurpose/>
    </div>
  );
};

export default Homepage;
