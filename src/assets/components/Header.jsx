import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-3xl font-bold">
          <span className="text-green-400">RAPID</span>FIT
        </a>
        <div id="menu-btn" className="fas fa-bars text-3xl cursor-pointer"></div>
        <nav className="navbar">
          <a href="#home" className="px-4 py-2 text-lg">
            home
          </a>
          <a href="#about" className="px-4 py-2 text-lg">
            about
          </a>
          <a href="#features" className="px-4 py-2 text-lg">
            features
          </a>
          <a href="#pricing" className="px-4 py-2 text-lg">
            pricing
          </a>
          <a href="./trainer.html" className="px-4 py-2 text-lg">
            trainers
          </a>
          <a href="./Login.html" className="px-4 py-2 text-lg">
            Register Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;