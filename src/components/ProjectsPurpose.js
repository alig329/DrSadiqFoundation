import React, { useEffect, useRef } from "react";
import { Box, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';

const projects = [
  {
    title: "Health & Wellness",
    description: "We operate two dispensaries in the Chakri Region, providing healthcare services to people in the region and surrounding areas.",
    image: "QMR.png",
  },
  {
    title: "Education Support",
    description: "Every year, we offer scholarships to students in 11 public universities across KPK, Punjab, and Sindh. The universities manage the selection process.",
    image: "QMR2.png",
  },
  {
    title: "Community Help",
    description: "Our food-distribution project began in February 2010. Today, we have 21 employees working together to make it a success. We provide three meals a day to patients.",
    image: "QMR3.png",
  },
  {
    title: "Social Empowerment",
    description: "We support women's empowerment by offering vocational education in rural areas of Rawalpindi district. We partner with local institutions to promote economic sustainability.",
    image: "QMR4.png",
  }
];

const ProjectsWithPurpose = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      const current = scrollRef.current;
      if (current) {
        current.scrollLeft += current.offsetWidth;
        if (current.scrollLeft >= current.scrollWidth - current.offsetWidth) {
          current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 5000); // Adjust the interval as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        padding: "40px 0px",
        background: "#588BC6",
        color: "#FFFFFF",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography
            sx={{
              width: "100%",
              fontFamily: "Poppins",
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: "500",
              lineHeight: "46px",
              textAlign: "left",
              padding: "100px 0px 0px 20px",
            }}
          >
            Projects with a Purpose!
          </Typography>
          <Typography
            sx={{
              width: "100%",
              fontFamily: "Poppins",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: "100",
              lineHeight: "39px",
              textAlign: "left",
              marginTop: "20px",
              padding: "0px 0px 0px 20px",
            }}
          >
            Our Foundation has a history of supporting those in need with kindness and care. We are making a positive difference, one compassionate project at a time.
          </Typography>
          <Button
            sx={{
              width: "150px",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: "500",
              color: "#FFFFFF",
              backgroundColor: "#ECA30C",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#FCA90D" },
              textAlign: "center",
              animationDuration: "0ms",
              margin: "20px 0px 0px 10px"
            }}
            onClick={() => window.location.href = "donate"}
          >
            Donate Now
          </Button>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            ref={scrollRef}
            sx={{
              overflowX: "hidden",
              scrollSnapType: "x mandatory",
              display: "flex",
              background: "#497CB7",
              padding: "20px"
            }}
          >
            {projects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 100%",
                  scrollSnapAlign: "center",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  margin: "20px 10px",
                  padding: "16px",
                  boxSizing: "border-box",
                }}
              >
                {isSmallScreen ? (
                  <>
                    <Box
                      sx={{
                        flex: "1",
                        background: `url(${project.image}) no-repeat center center`,
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                        maxHeight: { xs: "200px", md: "300px" },
                        maxWidth: { xs: "100%", md: "50%" },
                        borderRadius: "20px",
                        marginBottom: "16px",
                      }}
                    />
                    <Box sx={{ flex: "1", textAlign: "left" }}>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "24px", md: "34px" },
                          fontWeight: "300",
                          lineHeight: "60px",
                          marginBottom: "10px",
                          color: "#FFFFFF",
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "14px", md: "18px" },
                          fontWeight: "500",
                          lineHeight: "39px",
                          color: "#FFFFFF",
                        }}
                      >
                        {project.description}
                      </Typography>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box sx={{ flex: "1", textAlign: "left", marginRight: { md: "16px" } }}>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "24px", md: "48px" },
                          fontWeight: "500",
                          lineHeight: "44px",
                          marginBottom: "10px",
                          marginTop:'40px',
                          color: "#FFFFFF",
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "14px", md: "18px" },
                          fontWeight: "500",
                          lineHeight: "39px",
                          color: "#FFFFFF",
                        }}
                      >
                        {project.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        flex: "1",
                        background: `url(${project.image}) no-repeat center center`,
                        backgroundSize: "cover",
                        height: { xs: "200px", md: "300px" },
                        width: "100%",
                        borderRadius: "20px",
                      }}
                    />
                  </>
                )}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsWithPurpose;