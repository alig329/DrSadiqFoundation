import React from "react";
import { Box, Typography, TextField, Button, Link, Grid } from "@mui/material";
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
                <Box
                    sx={{
                        backgroundColor: "#fff",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: 2,
                        width: { xs: "100%", md: "50%" },
                        animation: `${scaleUp} 1s ease-out`,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#000",
                            fontWeight: "bold"
                        }}
                        gutterBottom
                    >
                        Fill the Form Below
                    </Typography>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Your Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Your Email" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Your Phone" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Enter Subject" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Enter Your Message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button sx={{
                                    width: "100%",
                                    fontFamily: "Poppins",
                                    fontSize: "14px",
                                    fontWeight: "700",
                                    color: "#F1F1F1",
                                    backgroundColor: "#FF9900",
                                    borderRadius: "8px",
                                    "&:hover": { backgroundColor: "#E68A00" },
                                }}>
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
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