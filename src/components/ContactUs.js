import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link, Grid, Modal } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn, YouTube, Email, Phone, LocationOn } from "@mui/icons-material";
import TikTokIcon from '@mui/icons-material/MusicNote'; // For TikTok icon (using a close alternative)
import StoriesOfChange from "../StoriesOfChange";
import { keyframes } from "@emotion/react";

// Define animations
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

const scaleUp = keyframes`
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
`;

const ContactUs = () => {
     // State for the message form
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [modalInfo, setModalInfo] = useState({ open: false, message: "", success: false });

  // Handle changes to form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dsfbackend.vercel.app/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageForm)
      });
      if (res.ok) {
        setModalInfo({ open: true, message: "Message sent successfully!", success: true });
        setMessageForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        const errorData = await res.json();
        setModalInfo({ open: true, message: "Failed to send message: " + errorData.error, success: false });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setModalInfo({ open: true, message: "An error occurred while sending your message.", success: false });
    }
  };

  // Function to close the modal
  const handleClose = () => {
    setModalInfo({ ...modalInfo, open: false });
  };

    return (
        <Box sx={{
            padding: "20px",
            backgroundColor: "#f5f5f5"
        }}>
            {/* Header Section */}
            <Typography variant="h2" sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: { xs: '20px', sm: '30px', md: '40px' },
                fontWeight: 'bold',
                lineHeight: '60px',
                marginTop: '10px',
                color: '#000000',
                animation: `${fadeIn} 1s ease-out`,
            }}>
                JOIN THE <br />CONVERSATION
            </Typography>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                fontWeight: '500',
                lineHeight: { xs: '30px', md: '54px' },
                color: '#000000',
                textAlign: 'center',
                padding: '10px 100px',
                animation: `${fadeIn} 1.5s ease-out`,
            }}>
                At Dr. Sadiq Foundation,
                we believe that everyone has a story to tell and a voice that deserves to be heard. We want to hear from you,
                and we want to share our own stories and experiences with you.
            </Typography>

            {/* Contact Section */}
            <Box
                sx={{
                    backgroundColor: "#027D40",
                    color: "#fff",
                    padding: "100px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "50px",
                    animation: `${fadeIn} 2s ease-out`,
                }}>

                {/* Left Content */}
                <Box sx={{ animation: `${fadeIn} 2.5s ease-out` }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
                        Get in Touch
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        We're here to listen,
                        to support,
                        and to connect with you. Whether you
                        have a question,
                        a comment,
                        or just want to say hello,
                        we'd love to
                        hear from you.
                    </Typography>
                    <Box sx={{ marginTop: "20px" }}>
                        {/* Phone Section */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "20px",
                                "&:hover": { transform: "scale(1.02)", transition: "transform 0.3s ease" },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "50px",
                                    height: "50px",
                                    backgroundColor: "#ECA30C",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Phone sx={{ fontSize: 30, color: "#fff" }} />
                            </Box>
                            <Typography variant="body1">
                                <span style={{ fontWeight: 'bold' }}>Call Us <br /></span>
                                051-111 500 505 | 051-4927546
                            </Typography>
                        </Box>

                        {/* Email Section */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "20px",
                                "&:hover": { transform: "scale(1.02)", transition: "transform 0.3s ease" },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "50px",
                                    height: "50px",
                                    backgroundColor: "#ECA30C",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Email sx={{ fontSize: 30, color: "#fff" }} />
                            </Box>
                            <Typography variant="body1">
                                <span style={{ fontWeight: 'bold' }}>Mail Us <br /></span>
                                secretary@drsf.org | chairman@drsf.org
                            </Typography>
                        </Box>

                        {/* Location Section */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "20px",
                                "&:hover": { transform: "scale(1.02)", transition: "transform 0.3s ease" },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "50px",
                                    height: "50px",
                                    backgroundColor: "#ECA30C",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <LocationOn sx={{ fontSize: 30, color: "#fff" }} />
                            </Box>
                            <Typography variant="body1">
                                <span style={{ fontWeight: 'bold' }}>Visit Us <br /></span>
                                33-C,
                                Iran Road,
                                Near Chandni Chowk,
                                Satellite Town,
                                Rawalpindi,
                                Pakistan
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Right Content: Contact Form */}
        <Box sx={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: 2,
          width: { xs: "100%", md: "50%" },
          animation: `${scaleUp} 1s ease-out`,
        }}>
          <Typography variant="h5" sx={{ color: "#000", fontWeight: "bold" }} gutterBottom>
            Send Us A Message
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Your Name" 
                  variant="outlined" 
                  name="name"
                  value={messageForm.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Your Email" 
                  variant="outlined"
                  name="email"
                  value={messageForm.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Your Phone" 
                  variant="outlined" 
                  name="phone"
                  value={messageForm.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Enter Subject" 
                  variant="outlined"
                  name="subject"
                  value={messageForm.subject}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enter Your Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="message"
                  value={messageForm.message}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button 
                  type="submit"
                  sx={{
                    width: "100%",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#F1F1F1",
                    backgroundColor: "#027D40",
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "#029D70" },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
          
          {/* Success/Error Modal */}
      <Modal open={modalInfo.open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "50%", sm: "400px" },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 1,
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" color={modalInfo.success ? "green" : "red"}>
            {modalInfo.success ? "Success!" : "Error!"}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {modalInfo.message}
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 3, backgroundColor: modalInfo.success ? "#027D40" : "red", color: "#fff", "&:hover": { backgroundColor: modalInfo.success ? "#029D70" : "orange" } }}>
            Close
          </Button>
        </Box>
      </Modal>
        </Box>
      </Box>

            {/* Section 2: Stay Connected */}
            <Box sx={{
                backgroundColor: "#1565c0",
                color: "#fff",
                textAlign: "center",
                padding: "30px",
                animation: `${fadeIn} 2s ease-out`,
            }}>
                <Typography variant="h4" fontWeight='bold' gutterBottom>
                    STAY CONNECTED
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Join our community and stay up-to-date on the latest news,
                    stories,
                    and updates.
                </Typography>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "20px",
                }}>
                    <Box sx={{ display: 'flex', gap: 5 }}>
                        {[
                            { icon: <Facebook />, color: '#3b5998', href: "https://www.facebook.com/drsadiqfoundationdsf/" },
                            { icon: <Instagram />, color: '#E4405F', href: "https://www.instagram.com/drsadiqfoundation/" },
                            { icon: <LinkedIn />, color: '#0077B5', href: "https://www.linkedin.com/company/drsadiqfoundation" },
                            { icon: <Twitter />, color: '#1DB1F2', href: "https://x.com/drsadiqfdn" },
                            { icon: <TikTokIcon />, color: '#000000', href: "https://www.tiktok.com/@drsadiqfoundation" },
                            { icon: <YouTube />, color: '#FF0000', href: "https://www.youtube.com/@DrSadiqFoundation" },
                        ].map((social, index) => (
                            <Link
                                key={index}
                                href={social.href}
                                target="_blank"
                                sx={{
                                    color: 'white',
                                    '&:hover': { color: social.color },
                                    transition: "color 0.3s ease",
                                }}
                            >
                                {React.cloneElement(social.icon, { sx: { fontSize: { xs: 20, md: 60 } } })}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Section 3: Volunteer & Events */}
            <Box sx={{
                backgroundColor: "#027D40",
                color: "#fff",
                textAlign: "center",
                padding: "30px",
                animation: `${fadeIn} 2.5s ease-out`,
            }}>
                <Typography variant="h4" fontWeight='bold' gutterBottom>
                    VOLUNTEER WITH US
                </Typography>
                <Typography variant="body1" gutterBottom>
                    We're always looking for passionate and dedicated individuals to join our team. Whether you have a few hours a week or a few days a month,
                    we'd love to have you volunteer with us.
                </Typography>
                <a 
                href="/volunteer"
                style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "#FFD15C",
                    "&:hover": { color: "#F1F1F1", transition: "color 0.3s ease" },
                }}>
                    Fill The Form

                </a>
                <Box sx={{
                    marginTop: "30px",
                    backgroundColor: "#1565c0",
                    padding: "20px",
                    borderRadius: "8px",
                    animation: `${scaleUp} 1s ease-out`,
                }}>
                    <Typography variant="h4" fontWeight='bold' gutterBottom>
                        EVENTS
                    </Typography>
                    <Typography variant="body1">
                        Join us for our upcoming events,
                        including workshops,
                        seminars,
                        and fundraising campaigns.
                    </Typography>
                    <Typography variant="body1" sx={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        "&:hover": { color: "#FFD15C", transition: "color 0.3s ease" },
                    }}>
                        Event Calendar
                    </Typography>
                </Box>
            </Box>
            <StoriesOfChange />
        </Box>
    );
};

export default ContactUs;