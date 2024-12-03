import React from 'react';
import { Box, Typography } from '@mui/material';



const History = () => {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', padding: '40px', width: '100%' }}>
      {/* Title: Journey of Dr. Muhammad Sadiq */}
      <Typography variant="h1" sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', textAlign: 'center', color: '#000000', marginBottom: '40px', }}>
        The Journey of Dr. Muhammad Sadiq
      </Typography>

      {/* Early Life & Education Section */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'stretch', marginBottom: '40px' }}>
        <Box sx={{ flex: 1, mb: { xs: '20px', md: 0 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography variant="h2" sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', lineHeight: '60px', color: '#000000' }}>
            Early Life & Education
          </Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: 'bold', lineHeight: { xs: '30px', md: '54px' }, color: '#000000', textAlign: 'left' }}>
            Dr. Muhammad Sadiq was born on July 11, 1950, in Khanewal, Punjab, Pakistan, into a family of five children. His rural upbringing shaped his values of empathy, resilience, and dedication.
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', lineHeight: '60px', color: '#000000' }}>
            Primary & Secondary Education
          </Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: 'bold', lineHeight: { xs: '30px', md: '54px' }, color: '#000000', textAlign: 'left' }}>
            He attended Government High School in Nanakpur, Khanewal, completing his early schooling before moving on to Government Islamia High School, Khanewal, for his matriculation.
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', lineHeight: '60px', color: '#000000' }}>
            Academic Pursuits
          </Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: 'bold', lineHeight: { xs: '30px', md: '54px' }, color: '#000000', textAlign: 'left' }}>
          Driven by a passion for healthcare, Dr. Sadiq completed his F.Sc. at Emerson University, Multan, scoring 623 out of 900. Although he aspired to study medicine, narrowly missing the MBBS entrance by seven marks, he chose veterinary sciences instead. He graduated in 1974 with a Doctor of Veterinary Medicine (DVM) degree from the University of Agriculture, Faisalabad, embarking on a career that would define the poultry industry in Pakistan.
          </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'stretch' }}>
          <img src='/DrSahb2.png' alt="Dr. Muhammad Sadiq" style={{ width: '90%', height: '100%', objectFit: 'cover' }} />
        </Box>
      </Box>

      {/* Visionary Career in Poultry and Leadership */}
      <Box sx={{ backgroundColor: '#027D40', padding: '40px', marginBottom: '80px' }}>
        <Typography variant="h1" sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF', marginBottom: '40px' }}>
          Visionary Career in Poultry and Leadership
        </Typography>

        {/* Pioneering a Poultry Empire */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', marginBottom: '30px' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src='/hist1.png' alt="Pioneering Poultry Empire" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
          <Box sx={{ flex: 1, margin: '80px'}}>
            <Typography variant="h2" sx={{ fontFamily: 'Poppins', fontSize: '40px', fontWeight: 'bold', textAlign: 'left', color: '#FFFFFF', marginBottom: '30px' }}>
              Pioneering a Poultry Empire
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 'bold', lineHeight: '54px', textAlign: 'left', color: '#FFFFFF', marginBottom: '30px' }}>
              Dr. Sadiq established his first poultry farm in 1975, which became the foundation for Sadiq Poultry (Private) Limited, officially incorporated on September 17, 2004. As founder, chairman, and CEO of the Sadiq Group of Companies, headquartered in Rawalpindi, he transformed the business into an industry leader, currently employing over 5,700 people.
            </Typography>
          </Box>
        </Box>

        {/* Global Presence & Industry Influence */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', marginBottom: '30px' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" sx={{ fontFamily: 'Poppins', fontSize: '40px', fontWeight: 'bold', textAlign: 'left', color: '#FFFFFF', marginBottom: '20px' }}>
              Global Presence & Industry Influence
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 'bold', lineHeight: '54px', textAlign: 'left', color: '#FFFFFF', marginBottom: '30px' }}>
              Dr. Sadiq was known for his extensive travels and participation in international seminars, demonstrations, and exhibitions related to the poultry, feed milling, and pharmaceutical industries.
            </Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src='/hist2.png' alt="Global Presence" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
          </Box>
        </Box>

        {/* Recognized Industry Leader */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', marginBottom: '30px' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src='/hist3.png' alt="Recognized Leader" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
          </Box>
          <Box sx={{ flex: 1, margin: '80px' }}>
            <Typography variant="h2" sx={{ fontFamily: 'Poppins', fontSize: '40px', fontWeight: 'bold', textAlign: 'left', color: '#FFFFFF', marginBottom: '20px' }}>
              Recognized Industry Leader
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 'bold', lineHeight: '54px', textAlign: 'left', color: '#FFFFFF', marginBottom: '30px' }}>
              He served as the Central Chairman of the Pakistan Feeds Association and the President of the World’s Poultry Science Association (Pakistan Branch) for over 25 years.
            </Typography>
          </Box>
        </Box>

        {/* National & International Outreach */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', marginBottom: '30px' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" sx={{ fontFamily: 'Poppins', fontSize: '40px', fontWeight: 'bold', textAlign: 'left', color: '#FFFFFF', marginBottom: '20px' }}>
              National & International Outreach
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 'bold', lineHeight: '54px', textAlign: 'left', color: '#FFFFFF', marginBottom: '30px' }}>
              Dr. Sadiq’s commitment to industry education led him to establish poultry science clubs across 12 Pakistani universities, design an advanced feed mill in Nigeria, and play a key role in poultry industry regulations.
            </Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src='/hist4.png' alt="National Outreach" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default History;
