import React from "react";
import { Box, Typography, Tooltip, Grid } from "@mui/material";

const StoriesOfChange = () => {
  const stories = [
    {
      image: "/sc4.jpg",
      description: "DSF has offered scholarships to public sector universities of Pakistan, spread over KPK, Punjab, Sindh and...",
      link: "/scholarships",
    },
    {
      image: "/sc2.jpg",
      description: "Transforming lives through various welfare projects and initiatives focused on education, health, and skill development.",
      link: "/foodprojects",
    },
    {
      image: "/sc1.jpg",
      description: "DSF has been providing free medical care to the underprivileged communities of Pakistan through its...",
      link: "/hospital",
    },
    {
      image: "/sc3.jpg",
      description: "Making a meaningful difference in the community by supporting underprivileged families and individuals.",
      link: "/medicalcamps",
    },
  ];

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
        sx={{
          fontFamily: "Poppins",
          fontSize: { xs: "18px", md: "34px" },
          fontWeight: "700",
          lineHeight: "30px",
          color: "rgba(0, 0, 0, 0.7)",
          marginBottom: "20px",
        }}
      >
        Stories of Change
      </Typography>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: "500",
          lineHeight: "1.5",
          color: "rgba(0, 0, 0, 0.7)",
          margin: "0 auto 30px",
          maxWidth: "800px",
        }}
      >
        Read here how Dr. Sadiq Foundation is transforming lives and making a meaningful difference in the community.
      </Typography>

      {/* Stories Grid */}
      <Grid container spacing={2}>
        {stories.map((story, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Tooltip title="Read More" arrow>
              <Box
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
