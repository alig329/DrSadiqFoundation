import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DonationForm from './components/DonationForm';
import Home from './components/Home';
import History from './History';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Certificates from './components/Certificates';
import MembershipForm from './components/MembershipForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/member" element={<MembershipForm />} />
        <Route path="/donate" element={<DonationForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
