import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DonationForm from './components/DonationForm';
import Home from './components/Home';
import History from './History';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/donate" element={<DonationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
