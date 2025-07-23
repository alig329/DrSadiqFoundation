// StatSection.js
import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import CountUp from "react-countup";

const StatSection = () => {
  const stats = [
    { number: 4852, subtitle: "Scholarships" },
    { number: 5200000, subtitle: "Beneficiaries" },
    { number: 939000000, subtitle: "Financial Assistance" },
    { number: 5153, subtitle: "Families Supported" },
  ];

  return (
    <Box
      sx={{
        width: "85%",
        color: "#588BC6",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px 0px 0px 0px",
        padding: "0px",
        gap: "10px",
        margin: "30px auto",
        marginTop: "20px",
        backdropFilter: "blur(10px)",
        border: "1px solid #21343014",
        boxShadow: "0px 10px 25px 0px #21343014",
        backgroundColor: "#F1F1F1",
      }}
    >
      {/* Stats Grid */}
      <Grid container spacing={1} sx={{ flexGrow: 1 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={5}
                  separator=","
                  style={{ color: "#588BC6" }}
                />
                {/* SVG Underline */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="5"
                  viewBox="0 0 60 4"
                  fill="none"
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <rect
                    x="60"
                    y="0.25"
                    width="3"
                    height="60"
                    rx="1.5"
                    transform="rotate(90 60 0.25)"
                    fill="#ECA30C"
                  />
                </svg>
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#213430",
                }}
              >
                {stat.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Achievements Button Section */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "310px" },
          height: { xs: "auto", md: "150px" },
          borderRadius: "0px 10px 10px 0px",
          backgroundColor: "#588BC6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "5px",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "20px",
            color: "#FFFFFF",
          }}
        >
          Achievements
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "20px",
            color: "#FFFFFF",
          }}
        >
          in Numbers
        </Typography>
        {/* Become a Member Button */}
        <Button
          sx={{
            position: "relative",
            backgroundColor: "transparent",
            color: "#FFFFFF",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "5px",
            display: "flex",
            alignItems: "left",
            justifyContent: "space-between",
            padding: "0px",
            textTransform: "none",
            "&:hover": {
              textDecoration: "underline", // Apply hover effect to text
            },
          }}
          onClick={() => (window.location.href = "member")}
        >
          Become a Member
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </Box>
    </Box>
  );
};

export default StatSection;
