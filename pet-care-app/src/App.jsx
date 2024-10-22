import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PetProfile from './pages/PetProfile';
import Appointment from './pages/Appointment';
// import Activity from './pages/Activity';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet-profile" element={<PetProfile />} />
        <Route path="/appointments" element={<Appointment />} />
        {/* <Route path="/activity" element={<Activity />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
