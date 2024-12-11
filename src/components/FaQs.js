import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Phone, Email, AddCircle as AddCircleIcon } from '@mui/icons-material'; // Import Material UI icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const FAQs = [
    {
      question: "What is the mission of your organization?",
      answer:
        "Our mission is to uplift underprivileged communities in Pakistan by providing medical care, food assistance, and educational support to those in need. We aim to create a healthier, more educated, and self-reliant society.",
    },
    {
      question: "How can I donate to your organization?",
      answer:
        "You can donate online through our secure donation portal on our website. We accept various payment methods, including credit/debit cards, PayPal, and bank transfers.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, all donations made to our organization are tax-deductible as per the laws of Pakistan. You will receive a donation receipt for your records.",
    },
    {
      question: "How are my donations used?",
      answer:
        "Your donations are used to fund our hospital construction, provide food aid to poor families, and offer scholarships to deserving students. We ensure that every rupee is used efficiently to maximize impact.",
    },
    {
      question: "Can I choose which project my donation goes to?",
      answer:
        "Yes, you can specify which project you would like to support when you make your donation. Whether it’s our hospital project, food aid, or scholarships, your contribution will be directed accordingly.",
    },
    {
      question: "How can I trust that my donation is being used properly?",
      answer:
        "We are committed to transparency and accountability. We regularly update our donors with detailed reports on how funds are being utilized and the impact of our projects.",
    },
    {
      question: "Can I volunteer with your organization?",
      answer:
        "Absolutely! We welcome volunteers who are passionate about making a difference. You can sign up to volunteer through our website, and we will contact you with opportunities that match your interests and skills.",
    },
    {
      question: "Do you accept in-kind donations?",
      answer:
        "Yes, we do. In-kind donations such as medical supplies, food items, and educational materials are always appreciated. Please contact us for more information on how to make an in-kind donation.",
    },
    {
      question: "How do you ensure the safety and privacy of my personal information?",
      answer:
        "We take your privacy seriously and use the latest encryption technologies to secure your personal and financial information. We do not share your data with any third parties without your consent.",
    },
    {
      question: "How can I stay updated on your projects and progress?",
      answer:
        "You can subscribe to our newsletter to receive regular updates on our projects, events, and success stories. Follow us on social media and visit our website for the latest news and information.",
    },
  ];
  

const FAQScreen = () => {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => {
      setExpanded(expanded === panel ? null : panel);
    };
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
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '26px',
                textAlign: 'center',
                color: '#009368',
                marginTop: '50px'
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
          
        </Grid>
      </Grid>

      {/* Align Support and Volunteer sections in one row */}
      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: '50px' }}>
        <Grid item xs={12} md={6}>
          {/* Support Section */}
          <Paper sx={{ padding: '30px', backgroundColor: '#FFFFFF'}}>
            
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
              Politely & Professionally handling all queries!
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
              Our support team is available round the clock to take care of all your concerns and queries. You can rely on us to promptly handle all your information requests.
            </Typography>
           
           
            
      
        
        <Grid item xs={12} sm={8} md={8}>
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              padding: "1.5rem",
              borderRadius: "10px",
              textAlign: "left",
            }}
          >
            
            <Typography sx={{ marginTop: "0.5rem", fontWeight: 500 }}>
            <CheckCircleIcon color="primary" fontSize="small" />
              We help you with the choice of fund
            </Typography>

           
            <Typography sx={{ marginTop: "0.5rem", fontWeight: 500 }}>
            <CheckCircleIcon color="primary" fontSize="small" />
            Donor satisfaction is guaranteed
            </Typography>

            <Typography sx={{ marginTop: "0.5rem", fontWeight: 500 }}>
            <CheckCircleIcon color="primary" fontSize="small" />
            We are transparent in operations
            </Typography>
          </Box>
        </Grid>
        
        
      
    
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
              <Grid container alignItems="center" justifyContent="space-between">
                {/* Email Section */}
                <Email sx={{ color: '#ECA30C' }} />
                <Grid item xs={5}>
                  <Grid container alignItems="center">
                    
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '26px',
                        textAlign: 'left',
                        color: '#213430',
                        marginLeft: '10px',
                      }}
                    >
                      Email Address
                    </Typography>
                  </Grid>
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
                    chairman@drsf.org <br />
                    secretary@drsf.org
                  </Typography>
                </Grid>

                {/* Phone Section */}
                <Phone sx={{ color: '#ECA30C' }} />
                <Grid item xs={5}>
                  <Grid container alignItems="center">
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '26px',
                        textAlign: 'left',
                        color: '#213430',
                        marginLeft: '10px',
                      }}
                    >
                      Phone Number
                    </Typography>
                  </Grid>
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
          </Paper>
        </Grid>

        <Container maxWidth="xs" style={{ padding: "2rem 0", fontFamily: "Poppins, sans-serif" }}>
      {/* Header Section */}
     
      {/* FAQ Section */}
      {FAQs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={() => handleChange(`panel${index}`)}
          style={{
            marginBottom: "1rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <AccordionSummary
            expandIcon={<AddCircleIcon color="#FFFFFF" />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
            style={{ backgroundColor: "#ECA30C", padding: "0 1rem" }}
          >
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "600", color: "#FFFFFF" }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ padding: "1rem 1.5rem" }}>
            <Typography style={{ lineHeight: "1.6", color: "#6F7775" }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
      </Grid>
    </Box>
  );
};

export default FAQScreen;
