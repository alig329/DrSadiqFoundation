import React from 'react';
import {
  Box,
  Typography,
  Button
} from '@mui/material';
import StatSection from './StatSection';

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
        height: '100%',
        opacity: 1,
        position: 'relative',
        paddingTop: '20px',
      }}> <Typography sx={{
        fontFamily: 'Poppins',
        fontSize: '60px',
        fontWeight: 500,
        textAlign: 'center',
        color: '#FFFFFF',
      }} > Empowering Humanity with Compassion and Care </Typography> 
      </Box> 
      
      {/* Foundation Text Section */}
      
       <Box sx={{
        width: '95%',
        height: '100%',
        opacity: 1,
        position: 'relative',
        paddingTop: '40px',
      }}> <Typography sx={{
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '34px',
        textAlign: 'center',
        color: '#FFFFFF',
      }} > 
            Dr. Sadiq Foundation (DSF) dedicatedly serves humanity with kindness,
            empathy,
            and has a deep commitment to making a positive impact. Our journey began in 2010,
            when our Founding Trustee and Chairman,
            the late Dr. Muhammad Sadiq Rahmatullah Aleh (1950-2020),
            established our organization under the Trust Act. 
            </Typography> 
            </Box> 

            <StatSection/>
            
            {/* Leadership Section */} 
            
            <Box sx={{
              width: '100%',
              height: '75px',
              opacity: 1,
              position: 'relative',
            }}> <Typography sx={{
              fontFamily: 'Poppins',
              fontSize: '40px',
              fontWeight: 300,
              lineHeight: '75px',
              textAlign: 'center',
              color: '#FFFFFF',
            }} > Our Leadership Today 
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
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '35px',
              textAlign: 'center',
              color: '#FFFFFF',
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
  padding: '0px'
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
    display: 'flex',
    alignItems: 'left',
    padding: '100px',
    display: 'flex',
    flexDirection: 'column',
    padding: '80px'
  }}> 
    <Typography sx={{
      fontFamily: 'Poppins',
      fontSize: '30px',
      fontWeight: 500,
      lineHeight: '35px',
      textAlign: 'left',
      color: '#FFFFFF',
      marginBottom: '30px'
    }}> 
      Salman Sadiq,
      </Typography>

    <Typography sx={{
      fontFamily: 'Poppins',
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: '35px',
      textAlign: 'left',
      color: '#FFFFFF',
    }}> 
       Chief Executive of Sadiq Group, leads a range of companies, including Sadiq Poultry, Jaguar Construction, and SB Pharma. Known for his strategic insights and collaborative leadership, he excels in driving organizational improvements across sales, HR, finance, and R&D. With a background in poultry sciences from the USA, he manages one of Pakistan's most efficient poultry businesses. Beyond his corporate role, he is dedicated to community upliftment through the Dr. Sadiq Foundation, supporting public healthcare, education, and vocational training for sustainable development.
    </Typography> 
  </Box> 
</Box>


             

               
            
            {/* Heart of our Story Section */} 
            
            <Box sx={{
              width: '100%',
              height: '334px',
              opacity: 1,
              position: 'relative',
            }}> <Typography sx={{
              fontFamily: 'Poppins',
              fontSize: '60px',
              fontWeight: 600,
              lineHeight: '75px',
              textAlign: 'center',
              color: '#000000',
            }} >
               Heart of our story 
               
               </Typography>
                </Box> 
            
            {/* Journey Text Section */} 
            
            <Box sx={{
              width: '100%',
              height: '234px',
              opacity: 1,
              position: 'relative',
            }}> <Typography sx={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '54px',
              textAlign: 'center',
              color: '#000000',
            }} > Our journey began in 2010. Since then,
            we have been working tirelessly to serve humanity with compassion and care. We are proud of our achievements,
            but we know that there is still much work to be done. We invite you to join us on this journey,
            as we strive to make a positive impact in the lives of others. Dr. Sadiq Foundation believes that every individual deserves to be treated with kindness and respect. We look forward to continuing our mission to make a difference in the world. </Typography> </Box> 
            
            
             </Box>

      {/* Footer/Call to Action Section */}
      <Box sx={{
        width: '100%',

        height: '231px',

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

          }}
        >
          The Driving Force Behind our Vision
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


    </div>
  );
};

export default About;
