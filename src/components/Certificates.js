import React, { useState } from "react";
import { Box, Typography, Link, Modal } from "@mui/material";

const certificates = [
  { name: "Punjab Healthcare Commission", imageUrl: "phc.png" },
  { name: "Pakistan Care for Philanthropy", imageUrl: "pcp.png" },
  { name: "PCP Certification", imageUrl: "pcp1.png" },
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
    <Box sx={{ padding: "2rem", textAlign: "center", backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "#027D40",
          padding: '100px',
          color: "#fff",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          CERTIFICATES
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "0.5rem"  }}>
          At Dr. Sadiq Foundation, we are committed to excellence and transparency in all
          that we do. Our certifications and accreditations reflect our dedication to
          meeting the highest standards of quality, accountability, and effectiveness.
        </Typography>
      </Box>

      {/* Certificate Links */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem",
        margin: '40px'
       }}>
        {certificates.map((cert, index) => (
          <Link
            key={index}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleOpen(cert.imageUrl);
            }}
            underline="hover"
            sx={{
              fontSize: "1.5rem",
              color: "green",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline", color: "darkgreen" },
            }}
          >
            {cert.name}
          </Link>
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
            width: "35%",
            outline: "none",
          }}
        >
          <img
            src={selectedImage}
            alt="Certificate"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificates;
