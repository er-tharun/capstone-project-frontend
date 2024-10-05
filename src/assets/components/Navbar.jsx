import React from 'react';
import { Link } from 'react-router-dom';
 
import './Navbar.css'
function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-800 p-4">
      <div className="flex items-center">
        <Link to="/" className="text-lg font-bold text-white">
          RAPID FIT
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/trainer" className="text-lg text-white hover:text-gray-300 mx-4">
          Trainer
        </Link>
        <Link to="/user" className="text-lg text-white hover:text-gray-300 mx-4">
          User
        </Link>
        <Link to="/booking" className="text-lg text-white hover:text-gray-300 mx-4">
          Booking
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;