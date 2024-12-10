import React from 'react';
import {  Box, Typography, Button, Grid} from '@mui/material';
import StatSection from './StatSection';
import ChangeMakersSection from './ChangeMakers';

const About = () => {
  return (
    <div>

      {/* Background Section */}

      <Box sx={{
        backgroundColor: '#027D40',
        width: '100%',
        padding: '20px',
        margin: '10px'
      }}>

        {/* Title Section: Empowering Humanity */}

        <Box sx={{
          width: '100%',
          opacity: 1,
          position: 'relative',
          paddingTop: '20px',
        }}>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '48px',
            fontWeight: 500,
            textAlign: 'center',
            color: '#FFFFFF',
            padding: '20px 100px 10px 100px'
          }} >
            EMPOWERING HUMANITY WITH COMPASSION AND CARE
          </Typography>
        </Box>

        {/* Foundation Text Section */}

        <Box sx={{
          width: '100%',
          height: 'auto',
          opacity: 1,
          position: 'relative',

        }}>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: '34px',
            textAlign: 'center',
            color: '#FFFFFF',
            padding: '20px 50px 10px 50px',
            marginBottom: '80px'
          }} >
            Dr. Sadiq Foundation (DSF) dedicatedly serves humanity with kindness,

            empathy,

            and has a deep commitment to making a positive impact. Our journey began in 2010,

            when our Founding Trustee and Chairman,

            the late Dr. Muhammad Sadiq Rahmatullah Aleh (1950-2020),

            established our organization under the Trust Act.
          </Typography>
        </Box>

        <StatSection />

        {/* Leadership Section */}

        <Box sx={{
          width: '100%',

          height: '75px',

          opacity: 1,

          position: 'relative',

          marginTop: '80px'
        }}>
          <Typography sx={{
            fontFamily: 'Poppins',

            fontSize: '40px',

            fontWeight: 300,

            lineHeight: '75px',

            textAlign: 'center',

            color: '#FFFFFF',

            padding: '10px 50px 20px 50px',

          }} >
            OUR LEADERSHIP TODAY
          </Typography>
        </Box>
        <Box sx={{
          width: '100%',

          height: '54px',

          opacity: 1,

          position: 'relative',

        }}>

          <Typography sx={{
            fontFamily: 'Poppins',

            fontSize: '16px',

            fontWeight: 500,

            lineHeight: '35px',

            textAlign: 'center',

            color: '#FFFFFF',

            marginBottom: '80px',

            padding: '20px 180px 10px 180px',

          }} >

            Together,

            our leadership team is passionate about creating a better world for all. Most importantly,

            we are proud to have been serving humanity for over a decade.
          </Typography>
        </Box>


        {/* CEO Section */}

        <Box sx={{
          display: 'flex',

          alignItems: 'center',

          justifyContent: 'space-between',

          width: '100%',

          height: '500px',

          borderRadius: '30px 0px 0px 0px',

          opacity: 1,

          position: 'relative',

          flexDirection: 'row',

          padding: '0px',

          marginTop: '100px'
        }}>
          <Box sx={{
            width: '50%',

            height: '100%',

            display: 'flex',

            alignItems: 'center',

            justifyContent: 'center',

            padding: '80px'
          }}>
            <img
              src="/ceo.png"
              alt="Salman Sadiq"
              style={{
                width: '100%',

                height: '100%',

                objectFit: 'initial',

                borderRadius: '30px',

              }}
            />
          </Box>

          <Box sx={{
            width: '50%',

            height: '100%',

            padding: '100px',

            display: 'flex',

            justifyContent: 'center',

            flexDirection: 'column',


          }}>
            <Typography sx={{
              fontFamily: 'Poppins',

              fontSize: '20px',

              display: 'flex',

              alignItems: 'center',

              justifyContent: 'left',

              fontWeight: 500,

              lineHeight: '35px',

              textAlign: 'left',

              color: '#FFFFFF',

              marginBottom: '10px'
            }}>
              Salman Sadiq,

            </Typography>

            <Typography sx={{
              fontFamily: 'Poppins',

              fontSize: '16px',

              fontWeight: 300,

              lineHeight: '35px',

              display: 'flex',

              alignItems: 'center',

              justifyContent: 'center',

              textAlign: 'left',

              color: '#FFFFFF',

            }}>
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
      <Box sx={{
        width: '100%',
        opacity: 1,
        position: 'relative',
      }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '48px',
            fontWeight: 600,
            lineHeight: '75px',
            textAlign: 'center',
            color: '#000000',
            margin: '30px'
          }}>
          THE DRIVING FORCE BEHIND OUR VISION
        </Typography>
      </Box>

      {/* Logo Section */}
      <Box sx={{
        width: '100%',

        height: '250px',

        opacity: 1,

        position: 'relative',

        display: 'flex',

        alignItems: 'center',

        justifyContent: 'space-around',

        flexWrap: 'wrap',

      }}>
        <Box sx={{
          display: 'flex',

          flexDirection: 'column',

          alignItems: 'center',

          justifyContent: 'space-between',

          gap: '10px',

        }}> <img src="/sp.png" alt="SpLogo"
          style={{
            width: '176px',

            height: '150px',

            borderRadius: '20px 0px 0px 0px',

            opacity: 1,

          }} />
          <Button sx={{
            padding: "8px 16px",

            fontFamily: "Poppins",

            fontSize: "14px",

            fontWeight: "500",

            color: "#FFFFFF",

            backgroundColor: "#588BC6",

            "&:hover": {
              backgroundColor: "#457BA1",

            },

          }} component="a" href="https://www.google.com" target="_blank" >
            Visit Website
          </Button>
        </Box>
        <Box sx={{
          display: 'flex',

          flexDirection: 'column',

          alignItems: 'center',

          gap: '10px',

        }}> <img src="/sbph.png" alt="SBPH Logo" style={{
          width: '175px',

          height: '150px',

          opacity: 1,

        }} />
          <Button sx={{
            padding: "8px 16px",

            fontFamily: "Poppins",

            fontSize: "14px",

            fontWeight: "500",

            color: "#FFFFFF",

            backgroundColor: "#588BC6",

            "&:hover": {
              backgroundColor: "#457BA1",

            },

          }} component="a" href="https://www.google.com" target="_blank" > Visit Website
          </Button>
        </Box>
        <Box sx={{
          display: 'flex',

          flexDirection: 'column',

          alignItems: 'center',

          gap: '10px',

        }}> <img src="/jaguar.png" alt="JaguarLogo" style={{
          width: '175px',

          height: '150px',

          opacity: 1,

        }} /> <Button sx={{
          padding: "8px 16px",

          fontFamily: "Poppins",

          fontSize: "14px",

          fontWeight: "500",

          color: "#FFFFFF",

          backgroundColor: "#588BC6",

          "&:hover": {
            backgroundColor: "#457BA1",

          },

        }} component="a" href="https://www.jaguardevelopers.com.pk/" target="_blank" > Visit Website </Button> </Box> <Box sx={{
          display: 'flex',

          flexDirection: 'column',

          alignItems: 'center',

          gap: '10px',

        }}> <img src="/sppl.png" alt="SppLogo" style={{
          width: '185px',

          height: '150px',

          opacity: 1,

        }} />
          <Button sx={{
            padding: "8px 16px",

            fontFamily: "Poppins",

            fontSize: "14px",

            fontWeight: "500",

            color: "#FFFFFF",

            backgroundColor: "#588BC6",

            "&:hover": {
              backgroundColor: "#457BA1",

            },

          }} component="a" href="https://sadiqpoultry.com/" target="_blank" >
            Visit Website
          </Button>
        </Box>
      </Box>

      {/* Positive impact section */}

      <Box sx={{
        backgroundColor: '#588BC6',
        padding: '40px',
        alignItems: 'stretch',
        marginBottom: '80px'
      }}>
        <Typography variant="h2" sx={{
          fontFamily: 'Poppins',
          fontSize: {
            xs: '20px',
            sm: '30px',
            md: '40px'
          },
          fontWeight: '500',
          lineHeight: '80px',
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '0px'
        }}>
          OUR POSITIVE IMPACT
        </Typography>
        <Typography sx={{
          fontFamily: 'Poppins',
          fontSize: {
            xs: '14px',
            sm: '16px',
            md: '18px'
          },
          fontWeight: '500',
          lineHeight: {
            xs: '30px',
            md: '54px'
          },
          color: '#FFFFFF',
          textAlign: 'center',
          padding: '0px 150px 0px 150px',
          marginBottom: '80px'
        }}>
          As a Non-Profit Organization (NPO), we are driven by a desire to make a meaningful difference in the lives of others. Since our beginning, we have been working tirelessly to implement multiple welfare projects that benefit those in need. Some of our notable initiatives include:
        </Typography>

        {/* DSF-BBH*/}
        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          alignItems: 'stretch',
          marginBottom: '80px'
        }}>
          <Box sx={{
            flex: 1,
            mb: {
              xs: '20px',
              md: 0
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Typography variant="h2" sx={{
              fontFamily: 'Poppins',
              fontSize: {
                xs: '20px',
                sm: '30px',
                md: '40px'
              },
              fontWeight: '500',
              lineHeight: '80px',
              color: '#FFFFFF'
            }}>
              DSF-BBH FOOD PROJECT
            </Typography>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px'
              },
              fontWeight: '500',
              lineHeight: {
                xs: '30px',
                md: '54px'
              },
              color: '#FFFFFF',
              textAlign: 'left'
            }}>
              We provide three meals a day to approximately 400 patients at Benazir Bhutto Hospital, ensuring that they receive the nourishment they need to recover and thrive.
            </Typography>
          </Box>
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'stretch'
          }}>
            <img src='/bbh.png'
              alt="Benazir Bhutto Hospital"
              style={{
                width: '90%',
                height: '100%',
                objectFit: 'cover'
              }} />
          </Box>
        </Box>

        {/* Free Dispensaries */}
        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row-reverse'
          },
          alignItems: 'stretch',
          marginBottom: '80px'
        }}>
          <Box sx={{
            flex: 1,
            mb: {
              xs: '20px',
              md: 0
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Typography variant="h2" sx={{
              fontFamily: 'Poppins',
              fontSize: {
                xs: '20px',
                sm: '30px',
                md: '40px'
              },
              fontWeight: '500',
              lineHeight: '80px',
              color: '#FFFFFF'
            }}>
              FREE DISPENSARIES
            </Typography>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px'
              },
              fontWeight: '500',
              lineHeight: {
                xs: '30px',
                md: '54px'
              },
              color: '#FFFFFF',
              textAlign: 'left'
            }}>
              We operate two dispensaries, one in Dheri-Chakri and the other in Mial village, which offer free GP consultations and medicines to the general public. These dispensaries have benefited over 50,000 patients per annum, providing them with access to quality healthcare.
            </Typography>
          </Box>
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'stretch'
          }}>
            <img src='/Disp.png' alt="DSF Dispenceries"
              style={{
                width: '90%',
                height: '100%',
                objectFit: 'cover'
              }} />
          </Box>
        </Box>

        {/* Vocational Education and Skill Development */}
        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          alignItems: 'stretch',
          marginBottom: '80px'
        }}>
          <Box sx={{
            flex: 1,
            mb: {
              xs: '20px',
              md: 0
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Typography variant="h2" sx={{
              fontFamily: 'Poppins',
              fontSize: {
                xs: '20px',
                sm: '30px',
                md: '40px'
              },
              fontWeight: '500',
              lineHeight: '80px',
              color: '#FFFFFF'
            }}>
              VOCATIONAL EDUCATION AND SKILL DEVELOPMENT
            </Typography>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px'
              },
              fontWeight: '500',
              lineHeight: {
                xs: '30px',
                md: '54px'
              },
              color: '#FFFFFF',
              textAlign: 'left'
            }}>
              We recognize the importance of empowering individuals with skills and knowledge to improve their socio-economic status. To this end, we patronize two Skill Development Centers in UC Sial Chakari and Chak Jalal Din, Rawalpindi, which provide trining and education to those who need it most.
            </Typography>
          </Box>
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'stretch'
          }}>
            <img src='/voc.png' alt="Vocational Training" style={{
              width: '90%',
              height: '100%',
              objectFit: 'cover'
            }} />
          </Box>
        </Box>

        {/* Education */}
        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row-reverse'
          },
          alignItems: 'stretch',
          marginBottom: '80px'
        }}>
          <Box sx={{
            flex: 1,
            mb: {
              xs: '20px',
              md: 0
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Typography variant="h2" sx={{
              fontFamily: 'Poppins',
              fontSize: {
                xs: '20px',
                sm: '30px',
                md: '40px'
              },
              fontWeight: '500',
              lineHeight: '80px',
              color: '#FFFFFF'
            }}>
              EDUCATION
            </Typography>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px'
              },
              fontWeight: '500',
              lineHeight: {
                xs: '30px',
                md: '54px'
              },
              color: '#FFFFFF',
              textAlign: 'left'
            }}>
              Dr. Sadiq Foundation (DSF) is dedicated to empowering future generations through education. By providing scholarships to deserving students we aim to unlock their potential and create opportunities for a brighter future. With a steadfast commitment to fostering equality and academic excellence, DSF envisions a world where education becomes a catalyst for positive change and sustainable growth.
            </Typography>
          </Box>
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'stretch'
          }}>
            <img src='/edu.png' alt="DSF Education Projects" style={{
              width: '90%',
              height: '100%',
              objectFit: 'cover'
            }} />
          </Box>
        </Box>
      </Box>

      {/* Heart of our Story Section */}

      <Box sx={{
        width: '100%',

        height: '70px',

        opacity: 1,

        position: 'relative',

        marginTop: '80px'
      }}> <Typography sx={{
        fontFamily: 'Poppins',

        fontSize: '48px',

        fontWeight: 500,

        lineHeight: '75px',

        textAlign: 'center',

        color: '#027D40',

      }} >
          HEART OF OUR STORY

        </Typography>
      </Box>

      {/* Journey Text Section */}

      <Box sx={{
        width: '100%',


        opacity: 1,

        position: 'relative',

      }}> <Typography sx={{
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '34px',
        textAlign: 'center',
        color: '#000000',
      }}>
        Our journey began in 2010. Since then, we have been working tirelessly to serve humanity with compassion and care. We are proud of our achievements, but we know that there is still much work to be done. <br/>
        
        <span style={{
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '54px',
          textAlign: 'center',
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none',
          color: '#027D40',
          cursor: 'pointer'
        }} 
        onClick={() => window.location.href = '/donate'}>
          We invite you to join us on this journey, as we strive to make a positive impact in the lives of others.
        </span>
        
        <br/> Dr. Sadiq Foundation believes that every individual deserves to be treated with kindness and respect. We look forward to continuing our mission to make a difference in the world.
      </Typography>
       </Box>

          {/* Text Thumbnails */}
<Box sx={{
  backgroundColor: "#FFFFFF", 
  width: '90%',
  display: "flex", 
  justifyContent: "center", // Align the boxes horizontally
  alignItems: 'center',
  flexDirection: 'row',
  margin: '50px'
}}>
  <Grid container sx={{ 
    width: "100%",
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row', // Ensure the grid items are displayed in a row on larger screens
  }}>
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      {/* Box 1 - Our Mission */}
      <Box sx={{
        position: "relative",
        height: '100%',
        overflow: "hidden",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#863773BF",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}>
        <Typography variant="h2" sx={{
          width: "100%",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "300",
          lineHeight: "5px",
          textAlign: "center",
          color: "#FFFFFF",
          opacity: 1,
        }}>
          OUR MISSION
        </Typography>
        <Typography variant="h2" sx={{
          width: "100%",
          fontFamily: "Poppins",
          fontSize: "28px",
          fontWeight: "500",
          lineHeight: "75px",
          textAlign: "center",
          color: "#FFFFFF",
          opacity: 1,
        }}>
          EMPOWERING LIVES
        </Typography>
        <Typography variant="body1" sx={{
          width: "100%",
          fontFamily: "Poppins",
          fontSize: "16px",
          fontWeight: "300",
          lineHeight: "30.5px",
          textAlign: "center",
          color: "#FFFFFF",
          opacity: 1,
        }}>
          To improve the quality of life for deprived and underprivileged individuals by promoting education and health awareness, especially among youth and women. To also support those affected by natural disasters, conflicts, and internal displacement.
        </Typography>
      </Box>
    </Grid>

    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      {/* Box 2 - Our Vision */}
      <Box sx={{
        position: "relative",
        height: '100%',
        overflow: "hidden",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#009368",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}>
        <Typography variant="h2" sx={{
          width: "100%",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "300",
          lineHeight: "5px",
          textAlign: "center",
          color: "#FFFFFF",
          opacity: 1,
        }}>
          OUR VISION
        </Typography>
        <Typography variant="h2" sx={{
          width: "100%",
          fontFamily: "Poppins",
          fontSize: "28px",
          fontWeight: "500",
          lineHeight: "75px",
          textAlign: "center",
          color: "#FFFFFF",
          opacity: 1,
        }}>
          CARING COMMUNITY
        </Typography>
        <Typography variant="body1" sx={{
          width: "100%",
          fontFamily: "Poppins",
          fontSize: "16px",
          fontWeight: "300",
          lineHeight: "35px",
          textAlign: "center",
          color: "#FFFFFF",
          opacity: 1,
        }}>
          We envision a community where everyone has access to resources and support to thrive. This is the main reason we actively empower individuals to make a positive impact, providing holistic support, including counseling and guidance.
        </Typography>
      </Box>
    </Grid>

    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      {/* Box 3 - Our Methodology */}
      <Box sx={{
        position: "relative",
        height: '100%',
        overflow: "hidden",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#D6940DCC", // Background color for better contrast
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}>
        <Typography variant="h2" sx={{
          width: "100%",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "300",
          lineHeight: "5px",
          textAlign: "center",
          color: "#FFFFFF",
          opacity: 1,
        }}>
          OUR METHODOLOGY
        </Typography>
        <Typography variant="h2" sx={{
          width: "100%",
          fontFamily: "Poppins",
          fontSize: "28px",
          fontWeight: "500",
          lineHeight: "75px",
          textAlign: "center",
          color: "#FFFFFF",
          opacity: 1,
        }}>
          PERSONALIZED CARE
        </Typography>
        <Typography variant="body1" sx={{
          width: "100%",
          fontFamily: "Poppins",
          fontSize: "16px",
          fontWeight: "300",
          lineHeight: "35px",
          textAlign: "center",
          color: "#FFFFFF",
          opacity: 1,
        }}>
          We take a personalized approach to care, identifying those in need and providing assistance without seeking publicity or funds. Our "Spot Verification" system ensures a thorough assessment of each applicant's circumstances.
        </Typography>
      </Box>
    </Grid>
  </Grid>
</Box>
        <ChangeMakersSection/>
    </div>
  );
};

export default About;
