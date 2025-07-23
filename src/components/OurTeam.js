import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';

const teamMembers = [
        {
          name: "Salmaan Sadiq",
          role: "Chairman",
          description: "Salmaan Sadiq leads the foundation with a vision to create a brighter future for all.",
          image: "https://i.ibb.co/DPm4mrv1/ceo.png",
        },
        {
          name: "Dr. Abdul Qayyum",
          role: "Project Manager",
          description: "Dr. Abdul Qayyum oversees the operations ensuring everything runs smoothly.",
          image: "https://i.ibb.co/21q9t1bV/cmk1.webp",
        },
        {
          name: "Muahmmad Irfan",
          role: "Welfare Officer",
          description: "Muhammad Irfan manages the financial aspects of the foundation.",
          image: "https://i.ibb.co/VcKFP6bF/cmk2.webp",
        },
        {
          name: "Kamran Mirza",
          role: "IT Manager",
          description: "Kamran Mirza handles the technological infrastructure, ensuring the organization's IT systems are secure and efficient.",
          image: "https://i.ibb.co/DPnzH6gr/cmk5.png",
        },
        {
          name: "Muhammad Ali",
          role: "Admin Officer",
          description: "Muhammad Ali is responsible for managing administrative tasks and ensuring smooth office operations.",
          image: "https://i.ibb.co/HpdyV208/cmk7.webp",
        },
        
      ];
      

const OurTeam = () => {
  return (
    <Container sx={{ backgroundColor: "#f9f9f9", py: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "600",
          textAlign: "center",
          color: "rgba(51, 51, 51, 0.8)",
          mb: 4,
          fontSize: { xs: "24px", sm: "32px", md: "36px" },
        }}
      >
        Meet Our Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: index * 2 }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "300px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    objectFit: member.name === "Muhammad Ali" ? "contain" : "cover",
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "97%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#FFFFFF",
                    p: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "600" }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Poppins", fontWeight: "400" }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Poppins", fontWeight: "300", mt: 1 }}>
                    {member.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurTeam;
