import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { Phone, Email } from '@mui/icons-material'; // Import Material UI icons

const FAQS = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#027D40',
          width: '100%',
          height: 'auto',
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Frequently Asked Questions Title */}
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '60px',
            fontWeight: 600,
            lineHeight: '66px',
            textAlign: 'center',
            color: '#FFFFFF',
            marginBottom: '30px',
          }}
        >
          Frequently Asked Questions
        </Typography>
      </Box>

      {/* FAQ Section */}
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          {/* Help Section */}
          <Paper sx={{ padding: '30px', backgroundColor: '#FFFFFF', boxShadow: 3 }}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '26px',
                textAlign: 'center',
                color: '#009368',
              }}
            >
              Need Help?
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: '40px',
                fontWeight: 600,
                lineHeight: '46px',
                textAlign: 'center',
                color: '#213430',
              }}
            >
              Answers to All Your Questions
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '26px',
                textAlign: 'center',
                color: '#6F7775',
                marginTop: '10px',
              }}
            >
              Handling your concerns and queries is one of our main focuses
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Align Support and Volunteer sections in one row */}
      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: '50px' }}>
        <Grid item xs={12} md={6}>
          {/* Support Section */}
          <Paper sx={{ padding: '30px', backgroundColor: '#FFFFFF', boxShadow: 3 }}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: '40px',
                fontWeight: 600,
                lineHeight: '37px',
                textAlign: 'left',
                color: '#213430',
              }}
            >
              Support
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '26px',
                textAlign: 'left',
                color: '#6F7775',
                marginTop: '10px',
              }}
            >
              If you need any help from us or are looking for some information, feel free to reach out anytime.
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: '26px',
                textAlign: 'left',
                color: '#213430',
                marginTop: '20px',
              }}
            >
              <Grid container alignItems="center">
                {/* Email Icon on the Left and Text Next to It */}
                
                <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: '26px',
                textAlign: 'left',
                color: '#213430',
                marginTop: '20px',
              }}
            >
              <Grid container alignItems="center">
                {/* Phone Icon on the Left and Text Next to It */}
                <Grid item xs={2}>
                  <Phone sx={{ color: '#213430' }} />
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontSize: '20px',
                      fontWeight: 600,
                      lineHeight: '26px',
                      textAlign: 'left',
                      color: '#213430',
                    }}
                  >
                    Phone Number
                  </Typography>
                  {/* Vertically stacked phone numbers */}
                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontSize: '15px',
                      fontWeight: 400,
                      lineHeight: '20px',
                      textAlign: 'left',
                      color: '#6F7775',
                    }}
                  >
                    051-111 500 505 <br />
                    051-4927546
                  </Typography>
                </Grid>
              </Grid>
            </Typography>
                
              </Grid>
              
            </Typography>

            
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Active FAQ Panel - How much time do I need to volunteer? */}
          <Paper
            sx={{
              padding: '30px',
              backgroundColor: '#ECA30C',
              borderRadius: '10px 0 0 0',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: '26px',
                textAlign: 'left',
                color: '#FFFFFF',
              }}
            >
              How much time do I need to volunteer?
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '27px',
                textAlign: 'left',
                color: '#6F7775',
                marginTop: '10px',
              }}
            >
              That depends on you mainly! Whether you want to volunteer for an hour, day, or a week, just let us know in the volunteer form. With us, you will have a hearty experience. For more information, get in touch today.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQS;