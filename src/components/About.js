import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import StatSection from './StatSection';
import ChangeMakersSection from './ChangeMakers';

const About = () => {
  return (
    <div>

      {/* Background Section */}

      <Box sx={{
        backgroundColor: '#027D40',
        width: '100%',
        padding: { xs: '2px', md: '20px' },
        margin: { xs: '2px', md: '10px' }
      }}>

        {/* Title Section: Empowering Humanity */}

        <Box
          sx={{
            width: "100%",
            position: "relative",
            pt: { xs: 2, md: 6 },
            px: { xs: 1, md: 'auto' },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "20px", sm: "28px", md: "40px", lg: "52px" },
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#FFFFFF",
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            EMPOWERING HUMANITY WITH COMPASSION AND CARE
          </Typography>
        </Box>


        {/* Foundation Text Section */}

        <Box sx={{ width: "100%", position: "relative", opacity: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              fontWeight: 400,
              lineHeight: 1.8,
              textAlign: "center",
              color: "#FFFFFF",
              px: { xs: 2, md: 8 },
              py: { xs: 2, md: 4 },
              maxWidth: "900px",
              mx: "auto",
              mb: { xs: 4, md: 8 },
            }}
          >
            Dr. Sadiq Foundation (DSF) dedicatedly serves humanity with kindness, empathy, and has a deep commitment to making a positive impact. Our journey began in 2010, when our Founding Trustee and Chairman, the late Dr. Muhammad Sadiq Rahmatullah Aleh (1950-2020), established our organization under the Trust Act.
          </Typography>
        </Box>


        <StatSection />

        {/* Leadership Section */}

        <Box sx={{ width: "100%", position: "relative", mt: { xs: 4, md: 5 } }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "22px", sm: "28px", md: "40px" },
              fontWeight: 700,
              lineHeight: 0.5,
              textAlign: "center",
              color: "#FFFFFF",
              px: { xs: 1, md: 2 },
              py: { xs: 1, md: 2 },
            }}
          >
            OUR LEADERSHIP TODAY
          </Typography>
        </Box>

        <Box sx={{ width: "100%", position: "relative" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              fontWeight: 500,
              lineHeight: 1.8,
              textAlign: "center",
              color: "#FFFFFF",
              px: { xs: 1, md: 5 },
              py: { xs: 1, md: 2 },
              maxWidth: "800px",
              mx: "auto",
              mb: { xs: 2, md: 4 },
            }}
          >
            Together, our leadership team is passionate about creating a better world
            for all. Most importantly, we are proud to have been serving humanity for
            over a decade.
          </Typography>
        </Box>

        {/* CEO section */}

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "30px 0 0 0",
            mt: { xs: 6, md: 12 },
            gap: { xs: 4, md: 0 },
            overflow: "hidden",
          }}
        >
          {/* Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: { xs: 2, md: 6 },
            }}
          >
            <img
              src="https://i.ibb.co/DPm4mrv1/ceo.png"
              alt="Salmaan Sadiq"
              style={{
                width: "100%",
                maxHeight: "500px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </Box>

          {/* Text */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 3, md: 6 },
              py: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "20px", md: "28px" },
                fontWeight: 600,
                color: "#FFFFFF",
                mb: 2,
              }}
            >
              Salmaan Sadiq
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 400,
                lineHeight: 1.8,
                textAlign: "justify",
                color: "#FFFFFF",
              }}
            >
              Chief Executive of Sadiq Group,
              leads a range of companies,
              including Sadiq Poultry,
              Jaguar Construction,
              and SB Pharma. Known for his strategic insights and collaborative leadership,
              he excels in driving organizational improvements across sales,
              HR,
              finance,
              and R&D. With a background in poultry sciences from the USA,
              he manages one of Pakistan's most efficient poultry businesses. Beyond his corporate role,
              he is dedicated to community upliftment through the Dr. Sadiq Foundation,
              supporting public healthcare,
              education,
              and vocational training for sustainable development.
            </Typography>
          </Box>
        </Box>
      </Box>


      {/* Footer/Call to Action Section */}
      <Box sx={{ width: "100%", position: "relative", py: { xs: 4, md: 6 } }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "20px", sm: "26px", md: "34px" },
            fontWeight: 700,
            lineHeight: 1.3,
            textAlign: "center",
            color: "#000000",
            mb: { xs: 3, md: 5 },
            px: { xs: 2, md: 6 },
          }}
        >
          THE DRIVING FORCE BEHIND OUR VISION
        </Typography>
      </Box>

      {/* Logo Section */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 3, md: 6 },
          px: { xs: 2, md: 4 },
          mb: { xs: 6, md: 10 },
        }}
      >
        {/* Example Logo Block */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <img
            src="https://i.ibb.co/B2mFfpKz/sppl.png"
            alt="Sadiq Poultry"
            style={{
              width: "120px",
              height: "auto",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
          <Button
            sx={{
              px: 2,
              py: 1,
              fontFamily: "Poppins",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#588BC6",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#457BA1" },
            }}
            component="a"
            href="https://sadiqpoultry.com"
            target="_blank"
          >
            Visit Website
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <img
            src="https://i.ibb.co/s99DRjHt/sbph.png" alt="SB Pharma"
            style={{
              width: "120px",
              height: "auto",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
          <Button
            sx={{
              px: 2,
              py: 1,
              fontFamily: "Poppins",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#588BC6",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#457BA1" },
            }}
            component="a"
            href="https://google.com"
            target="_blank"
          >
            Visit Website
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <img
            src="https://i.ibb.co/pv5vwpBB/jaguar.png" alt="Jaguar Developers"
            style={{
              width: "120px",
              height: "auto",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
          <Button
            sx={{
              px: 2,
              py: 1,
              fontFamily: "Poppins",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#588BC6",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#457BA1" },
            }}
            component="a"
            href="https://www.jaguardevelopers.com.pk"
            target="_blank"
          >
            Visit Website
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <img
            src="https://i.ibb.co/mCJNqWxT/sp.png" alt="Sadiq Poultry Private Limited"
            style={{
              width: "120px",
              height: "auto",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
          <Button
            sx={{
              px: 2,
              py: 1,
              fontFamily: "Poppins",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#588BC6",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#457BA1" },
            }}
            component="a"
            href="https://sadiqpoultry.com"
            target="_blank"
          >
            Visit Website
          </Button>
        </Box>
      </Box>

      {/* Positive impact section */}

      <Box
        sx={{
          backgroundColor: "#588BC6",
          padding: { xs: "20px", md: "40px" },
          marginBottom: { xs: "40px", md: "80px" },
        }}
      >
        {/* Section Heading */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "24px", sm: "30px", md: "40px" },
            fontWeight: "500",
            lineHeight: { xs: "40px", md: "80px" },
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: { xs: "20px", md: "40px" },
          }}
        >
          OUR POSITIVE IMPACT
        </Typography>

        {/* Section Description */}
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontWeight: "500",
            lineHeight: { xs: "24px", md: "32px" },
            color: "#FFFFFF",
            textAlign: "justify",
            padding: { xs: "0px 20px", md: "0px 150px" },
            marginBottom: { xs: "40px", md: "80px" },
          }}
        >
          As a Non-Profit Organization (NPO), we are driven by a desire to make a meaningful difference in the lives of others. Since our beginning, we have been working tirelessly to implement multiple welfare projects that benefit those in need. Some of our notable initiatives include:
        </Typography>

        {/* DSF-BBH Food Project */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: "20px", md: "40px" },
            marginBottom: { xs: "40px", md: "80px" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "20px", sm: "24px", md: "32px" },
                fontWeight: "500",
                lineHeight: { xs: "30px", md: "40px" },
                color: "#FFFFFF",
                marginBottom: { xs: "10px", md: "20px" },
              }}
            >
              DSF-BBH FOOD PROJECT
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                fontWeight: "500",
                lineHeight: { xs: "24px", md: "32px" },
                color: "#FFFFFF",
                textAlign: "justify",
              }}
            >
              We provide three meals a day to approximately 400 patients at Benazir Bhutto Hospital, ensuring that they receive the nourishment they need to recover and thrive.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.ibb.co/LzVgxyMV/bbh.webp"
              alt="Benazir Bhutto Hospital"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>

        {/* Free Dispensaries */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            alignItems: "center",
            gap: { xs: "20px", md: "40px" },
            marginBottom: { xs: "40px", md: "80px" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "20px", sm: "24px", md: "32px" },
                fontWeight: "500",
                lineHeight: { xs: "30px", md: "40px" },
                color: "#FFFFFF",
                marginBottom: { xs: "10px", md: "20px" },
              }}
            >
              FREE DISPENSARIES
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                fontWeight: "500",
                lineHeight: { xs: "24px", md: "32px" },
                color: "#FFFFFF",
                textAlign: "justify",
              }}
            >
              We operate two dispensaries, one in Dheri-Chakri and the other in Mial village, which offer free GP consultations and medicines to the general public. These dispensaries have benefited over 50,000 patients per annum, providing them with access to quality healthcare.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.ibb.co/93g8KQCk/Disp.webp"
              alt="DSF Dispensaries"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>

        {/* Vocational Education and Skill Development */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: "20px", md: "40px" },
            marginBottom: { xs: "40px", md: "80px" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "20px", sm: "24px", md: "32px" },
                fontWeight: "500",
                lineHeight: { xs: "30px", md: "40px" },
                color: "#FFFFFF",
                marginBottom: { xs: "10px", md: "20px" },
              }}
            >
              VOCATIONAL EDUCATION AND SKILL DEVELOPMENT
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                fontWeight: "500",
                lineHeight: { xs: "24px", md: "32px" },
                color: "#FFFFFF",
                textAlign: "justify",
              }}
            >
              We recognize the importance of empowering individuals with skills and knowledge to improve their socio-economic status. To this end, we patronize two Skill Development Centers in UC Sial Chakari and Chak Jalal Din, Rawalpindi, which provide training and education to those who need it most.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.ibb.co/kk3X9kF/voc.webp"
              alt="Vocational Training"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>

        {/* Education */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            alignItems: "center",
            gap: { xs: "20px", md: "40px" },
            marginBottom: { xs: "40px", md: "80px" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "20px", sm: "24px", md: "32px" },
                fontWeight: "500",
                lineHeight: { xs: "30px", md: "40px" },
                color: "#FFFFFF",
                marginBottom: { xs: "10px", md: "20px" },
              }}
            >
              EDUCATION
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                fontWeight: "500",
                lineHeight: { xs: "24px", md: "32px" },
                color: "#FFFFFF",
                textAlign: "justify",
              }}
            >
              Dr. Sadiq Foundation (DSF) is dedicated to empowering future generations through education. By providing scholarships to deserving students, we aim to unlock their potential and create opportunities for a brighter future. With a steadfast commitment to fostering equality and academic excellence, DSF envisions a world where education becomes a catalyst for positive change and sustainable growth.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.ibb.co/cKDJw2FV/edu.webp"
              alt="DSF Education Projects"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Heart of our Story Section */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          mt: { xs: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "22px", sm: "32px", md: "48px" },
            fontWeight: 700,
            lineHeight: 1.3,
            color: "#027D40",
          }}
        >
          HEART OF OUR STORY
        </Typography>
      </Box>

      {/* Journey Text Section */}
      <Box sx={{ width: "100%", position: "relative", mt: { xs: 3, md: 5 } }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontWeight: 400,
            lineHeight: 1.8,
            textAlign: "center",
            color: "#000000",
            maxWidth: "900px",
            mx: "auto",
            px: { xs: 2, md: 6 },
          }}
        >
          Our journey began in 2010. Since then, we have been working tirelessly to
          serve humanity with compassion and care. We are proud of our achievements,
          but we know that there is still much work to be done.
          <br />
          <Button
            variant="text"
            onClick={() => (window.location.href = "/donate")}
            sx={{
              mt: 2,
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 600,
              textDecoration: "underline",
              color: "#027D40",
              "&:hover": { color: "#025C30" },
            }}
          >
            We invite you to join us on this journey, as we strive to make a positive
            impact in the lives of others.
          </Button>
          <br />
          Dr. Sadiq Foundation believes that every individual deserves to be treated
          with kindness and respect. We look forward to continuing our mission to
          make a difference in the world.
        </Typography>
      </Box>


      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          mx: "auto",
          mt: { xs: 4, md: 8 },
          mb: { xs: 6, md: 10 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "12px",
                p: { xs: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#863773BF",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: 400,
                  textAlign: "center",
                  color: "#FFFFFF",
                  mb: 1,
                }}
              >
                OUR MISSION
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "22px", md: "28px" },
                  fontWeight: 600,
                  textAlign: "center",
                  color: "#FFFFFF",
                  mb: 2,
                }}
              >
                EMPOWERING LIVES
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 300,
                  lineHeight: 1.7,
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                To improve the quality of life for deprived and underprivileged individuals by promoting education and health awareness, especially among youth and women. To also support those affected by natural disasters, conflicts, and internal displacement.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "12px",
                p: { xs: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#009368",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: 400,
                  textAlign: "center",
                  color: "#FFFFFF",
                  mb: 1,
                }}
              >
                OUR VISION
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "22px", md: "28px" },
                  fontWeight: 600,
                  textAlign: "center",
                  color: "#FFFFFF",
                  mb: 2,
                }}
              >
                CARING COMMUNITY
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 300,
                  lineHeight: 1.7,
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                We envision a community where everyone has access to resources and support to thrive. This is the main reason we actively empower individuals to make a positive impact, providing holistic support, including counseling and guidance.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "12px",
                p: { xs: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#D6940DCC",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: 400,
                  textAlign: "center",
                  color: "#FFFFFF",
                  mb: 1,
                }}
              >
                OUR METHODOLOGY
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "22px", md: "28px" },
                  fontWeight: 600,
                  textAlign: "center",
                  color: "#FFFFFF",
                  mb: 2,
                }}
              >
                PERSONLIZED CARE
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 300,
                  lineHeight: 1.7,
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                We take a personalized approach to care, identifying those in need and providing assistance without seeking publicity or funds. Our "Spot Verification" system ensures a thorough assessment of each applicant's circumstances.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <ChangeMakersSection />
    </div>
  );
};

export default About;
