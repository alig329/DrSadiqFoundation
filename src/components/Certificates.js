import React, { useState } from "react";
import { Box, Typography, Link, Modal, Card, CardMedia, CardContent } from "@mui/material";
import { keyframes } from "@emotion/react";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(0.95); }
  to { transform: scale(1); }
`;

const parallax = keyframes`
  from { background-position: center top; }
  to { background-position: center bottom; }
`;

// Certificates data
const certificates = [
  { name: "Punjab Healthcare Commission", imageUrl: "https://i.ibb.co/pjZfLJnX/phc.webp" },
  { name: "Pakistan Centre for Philanthropy", imageUrl: "https://i.ibb.co/PssXQJbN/pcp.webp" },
  { name: "PCP Certification", imageUrl: "https://i.ibb.co/pjHf0dMW/pcp1.webp" },
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
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "#027D40",
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
          textAlign: "center",
          color: "#fff",
          backgroundImage: "url('hist4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: `${fadeIn} 1s ease-out, ${parallax} 12s infinite alternate`,
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontFamily: "Poppins", fontWeight: "bold", mb: 2 }}
        >
          CERTIFICATES
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Poppins", fontSize: "16px", maxWidth: "800px", mx: "auto" }}
        >
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
          p: { xs: 3, md: 6 },
        }}
      >
        {certificates.map((cert, index) => (
          <Card
            key={index}
            sx={{
              width: "300px",
              animation: `${fadeIn} 0.6s ease-out ${index * 0.2}s`,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
              },
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={cert.imageUrl}
              alt={cert.name}
              sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Poppins", fontWeight: "bold", color: "#027D40", mb: 1 }}
              >
                {cert.name}
              </Typography>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpen(cert.imageUrl);
                }}
                underline="hover"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#027D40",
                  "&:hover": { color: "darkgreen" },
                }}
              >
                View Certificate
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "70%", md: "30%" },
            animation: `${scaleUp} 0.3s ease-out`,
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
            p: 3,
            textAlign: "center",
          }}
        >
          <img
            src={selectedImage}
            alt="Certificate"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
          <Typography
            variant="body2"
            sx={{ mt: 2, fontFamily: "Poppins", color: "#027D40" }}
          >
            Click outside to close
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificates;
