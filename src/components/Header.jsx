import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo"><span>Fitness</span>
      
      <span className="fit">FIT</span></div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About</Link></li>
          <li><Link to="/gym-features">Features</Link></li>
          <li><Link to="pricings">Pricing</Link></li>
          <li><Link to="/trainers">Trainers</Link></li>
          <li><Link to="/login">Register Now</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
