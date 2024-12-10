import React, { useState } from "react";
import { Box, Button, TextField, Typography, LinearProgress, Grid, MenuItem, Select, InputLabel, FormControl,} from "@mui/material";

const DonationForm = () => {
  const [amount, setAmount] = useState(10);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", field: "Education" });
  const [collected, setCollected] = useState(35); // Progress percentage
  const totalRaised = 14825.15; // Total raised
  const goal = 20000; // Goal amount

  const presetAmounts = [10, 25, 50, 100, 200, 250];

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, amount }); // to add API call logic here
  };
  console.log(setCollected);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "url('bg.png')",
        backgroundSize: "cover",
        padding: "50px",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "500px",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "16px",
          padding: "40px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Heading */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, textAlign: "left" }}>
          Donate Now
        </Typography>

        {/* Progress Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
            {collected}% collected
          </Typography>
          <LinearProgress
            variant="determinate"
            value={collected}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": { backgroundColor: "#f9a825" },
            }}/>
          <Typography
            variant="caption"
            sx={{ display: "block", mt: 1, color: "#4caf50", textAlign: "right" }}>
            ${totalRaised.toLocaleString()} of ${goal.toLocaleString()} raised
          </Typography>
        </Box>

        {/* Preset Amount Buttons */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          {presetAmounts.map((value, index) => (
            <Grid item xs={4} sm={2} key={index}>
              <Button
                variant={amount === value ? "contained" : "outlined"}
                onClick={() => handleAmountClick(value)}
                sx={{
                  width: "100%",
                  backgroundColor: amount === value ? "#f9a825" : "#fff",
                  color: amount === value ? "#fff" : "#000",
                  borderColor: "#f9a825",
                  "&:hover": {
                    backgroundColor: "#f9a825",
                    color: "#fff",
                  },
                }}>
                ${value}
              </Button>
            </Grid>
          ))}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Insert Custom Value"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
              sx={{ backgroundColor: "#f5f5f5" }}/>
          </Grid>
        </Grid>

        {/* Personal Information */}
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Personal Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required/>
          </Grid>
          <Grid item xs={12}>
          <InputLabel>Field of Donation</InputLabel>
            <FormControl fullWidth>
              
              <Select
                name="field"
                value={formData.field}
                onChange={handleChange}
                sx={{ backgroundColor: "#f5f5f5" }}>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Health">Health</MenuItem>
                <MenuItem value="Environment">Food</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Donation Total and Submit Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f9a825" }}>
            Donation Total: ${amount}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#f9a825",
              color: "#fff",
              padding: "10px 30px",
              "&:hover": {
                backgroundColor: "#e6891b",
              },
            }}>
            Donate Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DonationForm;