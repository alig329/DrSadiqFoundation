import React from "react";
import { Box, TextField, Typography, Button, Grid } from "@mui/material";

const MembershipForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#027D40",
      }}
    >
      {/* Left Section - Form */}
      <Box
        sx={{
          width: "50%",
          padding: "40px",
          backgroundColor: "#fff",
          borderRadius: "8px 0 0 8px",
          marginBottom: '10px'
        }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#006600",
            marginBottom: "20px",
          }}
        >
          BECOME A MEMBER TODAY!
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Gender" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Address" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="City" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Country" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Province/State" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Area of Interest" variant="outlined" />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#027D40",
            color: "#fff",
            marginTop: "20px",
            padding: "10px",
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#004d00",
            },
          }}
        >
          Submit
        </Button>
      </Box>

      {/* Right Section - Image */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          borderRadius: "0 8px 8px 0",
          overflow: "hidden",
        }}
      >
        <img
          src="member.png"
          alt="Membership"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default MembershipForm;