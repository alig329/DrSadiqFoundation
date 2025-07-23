import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { keyframes } from "@emotion/react";
import { animate } from "@motionone/dom";

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

const CollaborationSection = () => {
  useEffect(() => {
    if (animate) {
      // Apply rotation animation to all image boxes
      document.querySelectorAll(".animated-badge").forEach((element) => {
        animate(element, { rotate: 360 }, { duration: 2, delay: 1 });
      });
    } else {
      console.error("Motion library is not loaded.");
    }
  }, []);

  return (
    <Box
      sx={{
        width: "86.5%",
        padding: { xs: 2, sm: 3 },
        alignItems: "center",
        margin: "0 auto",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "600",
          textAlign: "center",
          color: "rgba(51, 51, 51, 0.8)",
          marginBottom: { xs: 2, sm: 3 },
          fontSize: { xs: "18px", sm: "24px", md: "28px" },
        }}
      >
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
        {[
          "https://i.ibb.co/wF3X2zTV/5arid.png",
          "https://i.ibb.co/WNpwZxyR/khaybar.webp",
          "https://i.ibb.co/cKTfdGPN/gomal.webp",
          "https://i.ibb.co/ZpNz69r0/alkhid.png",
          "https://i.ibb.co/cX6L86QQ/psh.webp",
          "https://i.ibb.co/99tm0ZVD/nsu.webp",
        ].map((src, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Box
              component="img"
              src={src}
              alt={`badge-${index}`}
              width={300}
              height={150}
              className="animated-badge"
              sx={{
                maxWidth: "100%",      // Makes image responsive
                height: "auto",        // Preserves aspect ratio
                padding: { xs: 1, sm: 2 },
                animation: `${slideDownInteractive} 2s ${index * 0.5}s ease-in-out forwards`,
              }}
            />

          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CollaborationSection;
