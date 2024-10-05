// src/App.jsx
import React from 'react';  
import { Routes, Route, useLocation } from 'react-router-dom'; // Use useLocation
import Header from './components/Header';  
import Home from './components/Home';  
import About from './components/About';  
import AboutUs from './components/AboutUs'; 
import Features from './components/Features';  
import Pricing from './components/Pricing';   
import Review from './components/Review';  
import Footer from './components/Footer';  
import Login from './components/Login';  
import Signup from './components/Signup';  
import Appointment from './components/Appointment';  
import Trainers from './components/Trainers';  
import GymFeatures from './components/GymFeatures'; 
import './index.css'; 

function App() {
    const location = useLocation(); // Get the current location

    return (
      <div className="App">
        {/* Conditionally render Header based on the current path */}
        {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/trainers' && <Header />}
        <Routes>  
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricings" element={<Pricing />} />
            <Route path="/review" element={<Review />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/appointments" element={<Appointment />} />
            <Route path="/gym-features" element={<GymFeatures />} />
        </Routes>
        {location.pathname !== '/login' && location.pathname !== '/signup' && <Footer />}
      </div>
    );
}

export default App;
