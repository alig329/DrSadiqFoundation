import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const projects = [
  {
    title: "Health & Wellness",
    description: "We operate two dispensaries in the Chakri Region, providing healthcare services to people in the region and surrounding areas.",
    image: "sc1.jpg",
  },
  {
    title: "Education Support",
    description: "Every year, we offer scholarships to students in 11 public universities across KPK, Punjab, and Sindh. The universities manage the selection process.",
    image: "thnail1.jpg",
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
  },
];
const ProjectsWithPurpose = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Change card every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleScrollForward = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handleScrollBack = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        width: "97%",
        background: "#588BC6",
        color: "#FFFFFF",
        overflow: "hidden",
        padding: "30px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "24px", md: "34px" },
              fontWeight: "500",
              lineHeight: "44px",
              textAlign: "justify",
              padding: "60px 20px 0px 20px",
              color: "rgba(255, 255, 255, 0.8)", // Mild and transparent color
            }}
          >
            Projects with a Purpose!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: "300",
              lineHeight: "30px",
              textAlign: "left",
              marginTop: "10px",
              padding: "0px 20px",
              color: "rgba(255, 255, 255, 0.7)", // Mild and transparent color
            }}
          >
            Our Foundation has a long-standing commitment to supporting those in need with compassion and care. We are creating a positive impact, one meaningful project at a time.
          </Typography>
          <Button
            sx={{
              width: "140px",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "700",
              color: "#333",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              margin: "20px 0px 0px 20px",
              "&:hover": { backgroundColor: "#F1F1F1" },
            }}
            onClick={() => (window.location.href = "donate")}
          >
            Donate Now
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              padding: "20px",
              overflowX: "scroll",
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
              position: "relative",
            }}
          >
            {projects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  display: activeIndex === index ? "block" : "none",
                  flex: "80%", 
                  scrollSnapAlign: "center",
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    background: `url(${project.image}) center center / 100% 100% no-repeat`,
                    width: "100%",
                    height: "250px",
                  }}
                />
                <Box sx={{ padding: "16px", textAlign: "left" }}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "20px", md: "24px" },
                      fontWeight: "600",
                      lineHeight: "30px",
                      marginBottom: "8px",
                      color: "rgba(51, 51, 51, 0.8)", // Mild and transparent color
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "14px", md: "16px" },
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "rgba(85, 85, 85, 0.7)", // Mild and transparent color
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Button
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left : "10px",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                      backgroundColor: "#CCD5",
                      "&:hover": { backgroundColor: "#CCCCCC" },
                    }}
                    onClick={handleScrollBack}
                  >
                    {"<"}
                  </Button>
                  <Button
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                      backgroundColor: "#CCD5",
                      "&:hover": { backgroundColor: "#CCCCCC" },
                    }}
                    onClick={handleScrollForward}
                  >
                    {">"}
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsWithPurpose;