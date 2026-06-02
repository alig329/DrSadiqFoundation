import React from "react";
import { Box, Typography, Button } from "@mui/material";

const DonationPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        p: { xs: 3, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "16px",
          p: { xs: 3, md: 5 },
          boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{ fontFamily: "Poppins", fontWeight: "bold", mb: 2, textAlign: "center", color: "#027D40" }}
        >
          Donate Now
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Poppins", fontSize: "16px", textAlign: "center", mb: 4 }}
        >
          Support Dr. Sadiq Foundation’s mission to provide healthcare and hope to families in need.
        </Typography>

        {/* Bank Transfer Details */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "bold", mb: 2 }}>
            Bank Transfer Details
          </Typography>
          <Typography sx={{ mb: 1 }}>🏦 Bank Name: United Bank Limited (UBL)</Typography>
          <Typography sx={{ mb: 1 }}>📄 Account Title: DR. SADIQ FOUNDATION</Typography>
          <Typography sx={{ mb: 1 }}>💳 Account Number: 343065513</Typography>
          <Typography sx={{ mb: 1 }}>🌐 IBAN: PK23UNIL0109000343065513</Typography>
          <Typography sx={{ mb: 1 }}>🏢 Branch Code: 0202</Typography>
          <Typography sx={{ mb: 1 }}>📍 Branch Name: COMMERCIAL CTR RWP</Typography>
        </Box>

        {/* QR Code Section */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "bold", mb: 2 }}>
            Simply Scan to Pay
          </Typography>
          <img
            src="https://i.ibb.co/jZ80F7fV/QR-Code.jpg"
            alt="Donation QR Code"
            style={{ width: "100%", height: "100%" }}
          />
          <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "14px" }}>
            Scan to Donate and make a difference today.
          </Typography>
        </Box>

        {/* Impact Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "bold", mb: 2 }}>
            Your Impact in {new Date().getFullYear()}
          </Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "14px" }}>
            Despite global challenges, your support has empowered Dr. Sadiq Foundation to continue transforming lives and creating lasting impact.
          </Typography>
        </Box>

        {/* Donate In-Person */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "bold", mb: 2 }}>
            Donate In-Person
          </Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "14px" }}>
            33-C, Iran Road, Near Chandni Chowk, Satellite Town, Rawalpindi, Pakistan
          </Typography>
        </Box>

        {/* Contact Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "bold", mb: 2 }}>
            Contact Us
          </Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "14px", mb: 2 }}>
            For any questions or assistance with your donation, please contact or WhatsApp us:
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#25D366",
              color: "#fff",
              fontFamily: "Poppins",
              fontWeight: "bold",
              px: 3,
              py: 1,
              "&:hover": { backgroundColor: "#1ebe5d" },
            }}
            href="https://wa.me/923307000718"
            target="_blank"
          >
            Chat on WhatsApp: +92 330 700 0718
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DonationPage;
