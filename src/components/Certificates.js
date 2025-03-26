import React, { useState } from "react";
import { Box, Typography, Link, Modal, Card, CardMedia, CardContent } from "@mui/material";
import { keyframes } from "@emotion/react";

// Define a fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Define a scale-up animation
const scaleUp = keyframes`
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
`;

// Define a parallax effect for the header
const parallax = keyframes`
  from {
    background-position: center top;
  }
  to {
    background-position: center bottom;
  }
`;

const certificates = [
  { name: "Punjab Healthcare Commission", imageUrl: "https://i.ibb.co/rGTWBzCg/phc.png" },
  { name: "Pakistan Care for Philanthropy", imageUrl: "https://i.ibb.co/n86sGvSY/pcp.jpg" },
  { name: "PCP Certification", imageUrl: "https://i.ibb.co/jkVLwGVJ/pcp1.png" },
];

const Certificates = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpen = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Header with Parallax Effect */}
      <Box
        sx={{
          backgroundColor: "#027D40",
          padding: "100px",
          color: "#fff",
          marginBottom: "2rem",
          backgroundImage: "url('hist4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: `${fadeIn} 1s ease-out, ${parallax} 10s infinite alternate`, 
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          CERTIFICATES
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "0.5rem" }}>
          At Dr. Sadiq Foundation, we are committed to excellence and transparency in all
          that we do. Our certifications and accreditations reflect our dedication to
          meeting the highest standards of quality, accountability, and effectiveness.
        </Typography>
      </Box>

      {/* Certificate Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          margin: "40px",
        }}
      >
        {certificates.map((cert, index) => (
          <Card
            key={index}
            sx={{
              width: "300px",
              animation: `${fadeIn} 0.5s ease-out ${index * 0.2}s`,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={cert.imageUrl}
              alt={cert.name}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#027D40" }}>
                {cert.name}
              </Typography>
              <Link
                href="/certificates"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpen(cert.imageUrl);
                }}
                underline="hover"
                sx={{
                  fontSize: "1rem",
                  color: "green",
                  fontWeight: "bold",
                  "&:hover": { textDecoration: "underline", color: "darkgreen" },
                }}
              >
                View Certificate
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Modal for Certificate Image */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "70%", md: "40%" },
            animation: `${scaleUp} 0.3s ease-out`,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            padding: "20px",
          }}
        >
          <img
            src={selectedImage}
            alt="Certificate"
            style={{ width: "80%", height: "auto", borderRadius: "8px" }}
          />
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "10px", color: "#027D40" }}
          >
            Click outside to close
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificates;