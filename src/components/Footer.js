import React from 'react';
import { Box, Typography, Link, TextField, Button, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn, YouTube, Phone, Mail, LocationOn } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TikTokIcon from '@mui/icons-material/MusicNote'; // For TikTok icon (using a close alternative)

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#027D40',
          color: '#FFFFFF',
          padding: { xs: 0, md: 0 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Footer Main Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            mt: '20px',
            justifyContent: 'space-around',
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Logo, Mission, and Social Connects */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              flex: '1',
              gap: 2,
              marginLeft: '30px'
            }}
          >
            <img
              src="/LogoWhite.png"
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
                fontWeight: '500',
              }}
            >
              Social Connects
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#3b5998' } // Facebook blue color on hover
                }}>
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#E4405F' } // Instagram pink color on hover
                }}>
                <Instagram />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#0077B5' } // LinkedIn blue color on hover
                }}>
                <LinkedIn />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#1DB1F2' } // Twitter blue color on hover
                }}>
                <Twitter />
              </Link>
              <Link
                href="https://www.tiktok.com"
                target="_blank"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#000000' } // TikTok blue color on hover
                }}>
                <TikTokIcon />
              </Link>
              <Link
                href="https://www.youtube.com"
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
              flex: '1',
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: '500' }}
            >
              Quick Links
            </Typography>
            <Link href="/projects" color="inherit" sx={{ fontFamily: 'Poppins', fontSize: '16px' }}>
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
              flex: '1',
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: '500' }}
            >
              Contact Info
            </Typography>

            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}><Phone sx={{ fontSize: '14px', marginRight: '10px' }} />Call Us</Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>051-111 500 505</Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>051-4927546</Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', mt: 2 }}><Mail sx={{ fontSize: '14px', marginRight: '10px' }} />Mail Us</Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>
              chairman@drsf.org
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>
              secretary@drsf.org
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', mt: 2 }}><LocationOn sx={{ fontSize: '14px', marginRight: '10px' }} />Visit Us</Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>
              33-C, Satellite Town, Iran Road, Chandni Chowk, Rawalpindi.
            </Typography>
          </Box>
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
            <Box
              sx={{
                display: 'flex',
                mt: 2,
                gap: 1,
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
              }}
            >
              <TextField
                sx={{
                  flex: 1,
                  borderRadius: '5px 0 0 0',
                  backgroundColor: '#027D40',
                  borderColor: 'white',
                }}
                placeholder="Enter your email"
                variant="outlined"
              />
              <Button
                sx={{
                  height: '60.31px',
                  backgroundColor: '#ECA30C',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '0 24px',
                  letterSpacing: '0.8814226388931274px',
                  '&:hover': { backgroundColor: '#cc8a09' },
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>

        <Box sx={{ 
          position: 'relative', 
          bottom: '20px', 
          left: '20px', 
          zIndex: 1,  
          }} > 
          <IconButton color="primary" href="https://wa.me/+923055119550" target="_blank" sx={{ backgroundColor: 'whitesmoke', color: '#00ff55', boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.3)' }} > <WhatsAppIcon style={{ fontSize: 40 }} /> </IconButton> </Box>

      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: 'center',
          height: '50px',
          width: '100%',
          background: '#FFD15C',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: '500' }}
        >
          Dr. Sadiq Foundation&copy; 2024 All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
