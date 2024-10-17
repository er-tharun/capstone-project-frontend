// src/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the Login page
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Update the URL to point to the correct signup endpoint
      //https://capstone-project-backend-aaq1.onrender.com
      const response = await fetch('http://localhost:5000/api/signup', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Successful signup
        navigate('/login'); // Optionally redirect to login
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error('Error during signup:', error); // Log error for debugging
      alert('An error occurred. Please try again.'); // User-friendly message
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
          <p>
            Have an account? <span onClick={handleLoginClick} style={{ cursor: 'pointer', color: '#adff2f' }}>Login now</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
