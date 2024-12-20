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
        margin: '20px'
      }}>
      {/* Left Section - Form */}
      <Box
        sx={{
          width: "70%",
          padding: "40px",
          backgroundColor: "#fff",
          borderRadius: "8px 0 0 8px",
          marginBottom: '10px',
          display: 'flex',
          flexDirection: 'row'
        }}>
        

        <Grid container spacing={2}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#027D40",
            marginBottom: "20px",
          }}>
          BECOME A MEMBER TODAY!
        </Typography>
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
          <Button
          variant="contained"
          sx={{
            backgroundColor: "#ECA30C",
            color: "#fff",
            marginTop: "10px",
            padding: "1px",
            fontSize: "12px",
            borderRadius: '10px',
            "&:hover": {
              backgroundColor: "#cc8a09",
            },
          }}>
          Submit
        </Button>
        </Grid>

        
        {/* Right Section - Image */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "0 8px 8px 0",
          overflow: "hidden",
          padding: '20px'
        }}>
        <img
          src="member.png"
          alt="Membership"
          style={{
            width: "500px",
            height: "600px",
            objectFit: "cover",
          }}/>
      </Box>
      </Box>

      
    </Box>
  );
};

export default MembershipForm;