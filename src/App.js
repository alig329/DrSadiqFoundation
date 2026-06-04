import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DonationForm from './components/DonationForm';
import Home from './components/Home';
import DsfHistory from './components/DsfHistory';
import About from './components/About';
import History from './History';
import ContactUs from './components/ContactUs';
import Certificates from './components/Certificates';
import MembershipForm from './components/MembershipForm';
import FAQScreen from './components/FaQs';
import SuccessStories from './components/SuccessStories';
import Projects from './components/Projects';
import Hospital from './Hospital';
import Scholarships from './components/Scholarships';
import Dispensaries from './components/Dispensaries';
import FoodProjects from './components/FoodProjects';
import Vocational from './components/Vocational';
import NewsPage from './components/NewsPage';
import OurTeam from './components/OurTeam';
import CaregiversSection from './CareGivers';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<DsfHistory />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stories" element={<SuccessStories />} />
        <Route path="/member" element={<MembershipForm />} />
        <Route path="/donate" element={<DonationForm />} />
        <Route path="/read" element={<History />} />
        <Route path="/volunteer" element={<MembershipForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQScreen />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/dispensaries" element={<Dispensaries />} />
        <Route path="/foodprojects" element={<FoodProjects />} />
        <Route path="/vocational" element={<Vocational />} />
        <Route path="/trustees" element={<CaregiversSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
