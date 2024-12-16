import React from "react";
import { Box, Typography, Button, Grid } from '@mui/material';

const StoriesOfChange = () => {
    const stories = [
      {
        image: "/sc3.jpg",
        description:
          "DSF has offered 120 scholarships per annum to 11 public sector universities of Pakistan, spread over KPK...",
        buttonText: "Read More",
        link: "/scholarships"
      },
      {
        image: "/sc2.jpg",
        description:
          "Transforming lives through various welfare projects and initiatives focused on education, health, and skill development.",
        buttonText: "Read More",
        link: "/foodprojects"
      },
      {
        image: "/sc1.jpg",
        description:
          "Making a meaningful difference in the community by supporting underprivileged families and individuals.",
        buttonText: "Read More",
        link: "/hospital"
      },
    ];
  
    return (
      <Box
        sx={{
          width: "100%",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "32px", md: "54px" },
            fontWeight: "700",
            lineHeight: "60px",
            color: "#000000",
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
            color: "#000000",
            margin: "0 auto 40px",
            maxWidth: "800px",
          }}
        >
          Read here how Dr. Sadiq Foundation is transforming lives and making a
          meaningful difference in the community.
        </Typography>
        <Grid container spacing={4}>
          {stories.map((story, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Box
                sx={{
                  width: "100%",
                  height: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <img
                  src={story.image}
                  alt="Story"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "1.6",
                  textAlign: "center",
                  color: "#1E2022",
                  marginBottom: "16px",
                }}
              >
                {story.description}
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    padding: "8px 16px",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#FFFFFF",
                    backgroundColor: "#588BC6",
                    "&:hover": {
                      backgroundColor: "#457BA1",
                    },
                  }}
                  onClick={() => window.location.href = story.link}
                >
                  {story.buttonText}
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  export default StoriesOfChange;