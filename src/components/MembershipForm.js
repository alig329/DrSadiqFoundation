import React, { useState } from "react";
import { Box, TextField, Typography, Button, Grid, MenuItem, Modal } from "@mui/material";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    city: "",
    country: "",
    province: "",
    interest: "",
    volunteerDescription: ""
  });

  const [modalInfo, setModalInfo] = useState({ open: false, message: "", success: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dsfbackend.vercel.app/api/memberships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setModalInfo({ open: true, message: "Membership form submitted successfully!", success: true });
        setFormData({ name: "", email: "", phone: "", gender: "", address: "", city: "", country: "", province: "", interest: "", volunteerDescription: "" });
      } else {
        const errorData = await response.json();
        setModalInfo({ open: true, message: errorData.error || "Failed to submit.", success: false });
      }
    } catch {
      setModalInfo({ open: true, message: "An error occurred. Please try again later.", success: false });
    }
  };

  const handleClose = () => setModalInfo({ ...modalInfo, open: false });

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#027D40", margin: "10px 0" }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: "70%", padding: "40px", margin: "20px", backgroundColor: "#fff", borderRadius: "8px 0 0 8px", display: "flex", flexDirection: "row" }}>
        <Grid container spacing={2}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#027D40", marginBottom: "20px" }}>
            BECOME A MEMBER TODAY!
          </Typography>
          {["name","email","phone","gender","address","city","country","province"].map((field, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <TextField fullWidth label={field === "province" ? "Province" : field.charAt(0).toUpperCase()+field.slice(1)} variant="outlined" name={field} value={formData[field]} onChange={handleChange} required />
            </Grid>
          ))}
          <Grid item xs={12}>
            <TextField select fullWidth label="Area of Interest" variant="outlined" name="interest" value={formData.interest} onChange={handleChange} required>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Cooking/Food">Cooking/Food</MenuItem>
              <MenuItem value="Vocational Training">Vocational Training</MenuItem>
              <MenuItem value="Health">Health</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
          {formData.interest === "Other" && (
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={4} label="Describe how do you want to volunteer with us..." variant="outlined" name="volunteerDescription" value={formData.volunteerDescription} onChange={handleChange} required />
            </Grid>
          )}
          <Grid item xs={12}>
            <Button type="submit" sx={{ width: "100%", fontFamily: "Poppins", fontSize: { xs: "12px", md: "18px" }, fontWeight: { xs: "300", md: "500" }, color: "#F1F1F1", backgroundColor: "#FF9900", borderRadius: "8px", "&:hover": { backgroundColor: "#E68A00" } }}>
              Submit
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ width: "100%", height: "100%", borderRadius: "0 8px 8px 0", overflow: "hidden", padding: "20px" }}>
          <img src="https://i.ibb.co/gMWP1Vh6/member.webp" alt="Membership" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <Modal open={modalInfo.open} onClose={handleClose}>
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: { xs: "50%", sm: "400px" }, bgcolor: "background.paper", boxShadow: 24, p: 2, borderRadius: "8px", textAlign: "center" }}>
              <Typography variant="h6" color={modalInfo.success ? "green" : "red"}>{modalInfo.success ? "Success!" : "Error!"}</Typography>
              <Typography sx={{ mt: 2 }}>{modalInfo.message}</Typography>
              <Button onClick={handleClose} sx={{ mt: 3, backgroundColor: modalInfo.success ? "#027D40" : "red", color: "#fff", "&:hover": { backgroundColor: modalInfo.success ? "#029D70" : "orange" } }}>
                Close
              </Button>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default MembershipForm;
