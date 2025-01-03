import React from "react";
import { Box, Typography, Grid } from '@mui/material';
import { keyframes } from '@mui/system';

const slideDownInteractive = keyframes`
  0% {
    transform: translateY(-50%) scale(0.8);
    opacity: 0;
  }
  50% {
    transform: translateY(10%) scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const CollaborationSection = () => (
  <Box
    sx={{
      width: "96.5%",
      padding: { xs: 2, sm: 3 },
      alignItems: "center",
      margin: '0 auto',
      textAlign: "center",
      backgroundColor: "#F1F1F1",
    }} >
    <Typography variant="h4"
      sx={{
        fontFamily: "Poppins",
        fontWeight: "500",
        textAlign: "center",
        color: "#000000",
        marginBottom: { xs: 2, sm: 3 },
        fontSize: { xs: "20px", sm: "28px", md: "36px" },
      }} >
      Collaboration for Sustainable Progress
    </Typography>
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {["/5arid.png", "/khaybar.png", "/gomal.png", "/alkhid.png", "/psh.png", "/nsu.png"].map((src, index) => (
        <Grid item xs={6} sm={4} md={2} key={index}>
          <Box
            component="img"
            src={src}
            alt={`badge-${index}`}
            sx={{
              maxWidth: "100%",
              height: "auto",
              padding: { xs: 1, sm: 2 },
              animation: `${slideDownInteractive} 2s ${index * 0.5}s ease-in-out forwards`, // Applying the interactive animation
            }}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default CollaborationSection;
