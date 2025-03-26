import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Typography, Link, TextField, Button, IconButton, Modal } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn, YouTube, Phone, Email, LocationOn } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TikTokIcon from '@mui/icons-material/MusicNote'; // For TikTok icon (using a close alternative)

const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [modalInfo, setModalInfo] = useState({ open: false, message: "", success: false });

  // Function to handle subscription
  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://dsfbackend.vercel.app/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });
  
      const result = await res.json();
  
      if (res.ok) {
        setModalInfo({
          open: true,
          message: "Thank you for subscribing to Our Newsletter",
          success: true,
        });
        reset();
      } else {
        setModalInfo({
          open: true,
          message: result.error || "Failed to subscribe. Please try again.",
          success: false,
        });
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setModalInfo({
        open: true,
        message: "An error occurred while subscribing. Please try again later.",
        success: false,
      });
    }
  };
  

  // Function to close the modal
  const handleClose = () => {
    setModalInfo({ ...modalInfo, open: false });
  };


  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#027D40',
          color: "rgba(255, 255, 255, 0.8)",
          padding: { xs: 0, md: 0 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 4, md: 6 },
        }}>

        {/* Footer Main Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            mt: '20px',
            justifyContent: 'space-around',
            gap: { xs: 1, md: 2 },
          }}
        >
          {/* Logo, Mission, and Social Connects */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              flex: '1',
              gap: 1,
              marginLeft: '50px',
            }}
          >
            <img
              src="https://i.ibb.co/D3kpDSt/Logo-White.png"
              alt="Company Logo"
              style={{ width: '250px', height: '80px', objectFit: 'cover' }}
            />
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '22px',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Our foundation cares for those in need, empowers youth and women, and supports vulnerable communities.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Social Connects
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link
                href="https://www.facebook.com/drsadiqfoundationdsf/"
                target="_blank"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#3b5998' } // Facebook blue color on hover
                }}>
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/drsadiqfoundation/"
                target="_blank"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#E4405F' } // Instagram pink color on hover
                }}>
                <Instagram />
              </Link>
              <Link
                href="https://www.linkedin.com/company/drsadiqfoundation"
                target="_blank"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#0077B5' } // LinkedIn blue color on hover
                }}>
                <LinkedIn />
              </Link>
              <Link
                href="https://x.com/drsadiqfdn"
                target="_blank"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#1DB1F2' } // Twitter blue color on hover
                }}>
                <Twitter />
              </Link>
              <Link
                href="https://www.tiktok.com/@drsadiqfoundation"
                target="_blank"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#000000' } // TikTok blue color on hover
                }}>
                <TikTokIcon />
              </Link>
              <Link
                href="https://www.youtube.com/@DrSadiqFoundation"
                target="_blank"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#FF0000' } // YouTube red color on hover
                }}>
                <YouTube />
              </Link>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'center' },
              flex: 1,
              gap: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 'bold', }}
            >
              Quick Links
            </Typography>
            <Link href="/projects" color="inherit" sx={{ fontFamily: 'Poppins', fontSize: '16px', }}>
              Projects
            </Link>
            <Link href="/about" color="inherit" sx={{ fontFamily: 'Poppins', fontSize: '16px' }}>
              About
            </Link>
            <Link href="/faq" color="inherit" sx={{ fontFamily: 'Poppins', fontSize: '16px' }}>
              FAQ
            </Link>
            <Link href="/team" color="inherit" sx={{ fontFamily: 'Poppins', fontSize: '16px' }}>
              Our Team
            </Link>
            <Link href="/news" color="inherit" sx={{ fontFamily: 'Poppins', fontSize: '16px' }}>
              News
            </Link>
          </Box>

          {/* Contact Info */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              flex: 1,
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}
            >
              Contact Info
            </Typography>

            <Box sx={{ marginTop: "2px" }}>
              {/* Phone Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginBottom: "20px",
                }}
              >
                <Box>
                  <Phone sx={{
                    fontSize: 20,
                    color: "#fff"
                  }} />
                </Box>

                <Typography variant="body1">
                  <span>Call Us <br /></span>
                  <Link href="tel:051-111-500-505" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    051-111 500 505
                  </Link>
                  <br />
                  <Link href="tel:051-4927546" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    051-4927546
                  </Link>
                </Typography>
              </Box>

              {/* Email Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginBottom: "20px",
                }}
              >
                <Box>
                  <Email sx={{
                    fontSize: 20,
                    color: "#fff"
                  }} />
                </Box>
                <Typography variant="body1">
                  <span>Mail Us <br /></span>
                  <Link href="mailto:info@drsadiqfoundation.org" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    info@drsadiqfoundation.org
                  </Link>
                  <br />
                  <Link href="mailto:admin@drsf.org" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    admin@drsadiqfoundation.org
                  </Link>
                </Typography>
              </Box>

              {/* Location Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginBottom: "20px",
                }}
              >
                <Box>
                  <LocationOn sx={{
                    fontSize: 20,
                    color: "#fff"
                  }} />
                </Box>
                <Typography variant="body1">
                  <span>Visit Us <br /></span>
                  <Link
                    href="https://maps.app.goo.gl/RMzhi667iqcFU9sUA"
                    target="_blank"
                    sx={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    33-C, Iran Road, <br />
                    Near Chandni Chowk, <br />
                    Satellite Town, <br />
                    Rawalpindi, Pakistan
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>

           {/* Newsletter Subscription Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          mt: 4,
          mr: '30px'
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: '600' }}
        >
          Subscribe to Our Newsletter
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{
           display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
             gap: '10px',
              justifyContent: 'center',
               alignItems: 'center',
                marginTop: '10px',
                 marginBottom: '10px'
              }}>
            <TextField
              type="email"
              label="Email Address"
              variant="outlined"
              size="small"
              sx={{ backgroundColor: 'white', borderRadius: '5px' }}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address"
                }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <Button type="submit"
             variant="contained" 
             sx={{
               backgroundColor: "#FF9900",
                color: "#FFFFFF",
                 fontWeight: "bold"
                  }}>
              Subscribe
            </Button>
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
        

        {/* WhatsApp Button */}
        <Box sx={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          zIndex: 1000
        }} >
          <IconButton color="primary"
            href="https://wa.me/+923307000718" target="_blank"
            sx={{
              backgroundColor: 'whitesmoke',
              color: '#00ff55',
              boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.3)'
            }} >
            <WhatsAppIcon style={{
              fontSize: 40
            }} />
          </IconButton>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: 'center',
          height: '20px',
          width: '100%',
          background: '#FFD15C',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: '500' }}
        >
          Dr. Sadiq Foundation&copy; 2024 All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;