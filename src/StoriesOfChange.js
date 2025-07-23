import React, { useEffect } from "react";
import { Box, Typography, Tooltip, Grid } from "@mui/material";
import { animate } from "@motionone/dom";

const StoriesOfChange = () => {
  const stories = [
    {
      image: "https://i.ibb.co/0pbwr3Rh/sc4.png",
      description: "DSF provides scholarships to students in public sector universities across Pakistan, including KPK, Punjab, Sindh, and...",
      link: "/scholarships",
    },
    {
      image: "https://i.ibb.co/35sjB2CM/sc2.webp",
      description: "Transforming lives through impactful welfare projects and initiatives focused on education, health, and skill development.",
      link: "/foodprojects",
    },
    {
      image: "https://i.ibb.co/XPcpF6J/sc1.jpg",
      description: "DSF has been providing free medical care to underprivileged communities across Pakistan through its healthcare initiatives.",
      link: "/hospital",
    },
    {
      image: "https://i.ibb.co/wNSpLWPp/sc3.webp",
      description: "Making a meaningful impact in the community by supporting underprivileged families and individuals",
      link: "/medicalcamps",
    },
  ];

  useEffect(() => {
      if (animate) {
        // Apply rotation animation to all image boxes
        document.querySelectorAll(".animated-card").forEach((element) => {
          animate(element, { rotate: 360 }, { duration: 3, delay: 0 });
        });
      } else {
        console.error("Motion library is not loaded.");
      }
    }, []);

  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px 0",
        textAlign: "center",
        paddingBottom: "50px",
        backgroundColor: "#F1F1F1",
      }}
    >
      {/* Title Section */}
      <Typography
  variant="h1"
  sx={{
    fontFamily: "Poppins",
    fontSize: { xs: "32px", md: "48px" },
    fontWeight: "600",
    lineHeight: "58px",
    color: "rgba(0, 0, 0, 0.7)",
    marginBottom: "20px",
  }}
>
  Dr. Sadiq Foundation at a Glance
</Typography>

      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: "300",
          lineHeight: "1.5",
          color: "rgba(0, 0, 0, 0.7)",
          margin: "0 auto 30px",
          maxWidth: "800px",
        }}
      >
        Discover how Dr. Sadiq Foundation is making a lasting impact by transforming lives and empowering communities through our dedicated efforts and initiatives.
      </Typography>

      {/* Stories Grid */}
      <Grid container spacing={2}>
        {stories.map((story, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Tooltip title="Read More" arrow>
              <Box
                className="animated-card" // Added class for Motion animation
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                    
                  },
                }}
                onClick={() => (window.location.href = story.link)}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={story.image}
                  alt="Story"
                  sx={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "12px",
                  }}
                />
                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "500",
                    textAlign: "center",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {story.description}
                </Typography>
              </Box>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StoriesOfChange;
