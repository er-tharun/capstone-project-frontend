// src/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use for navigation

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to Signup page
  };

  //https://capstone-project-backend-aaq1.onrender.com
  const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    if (response.ok) {
      alert(data.message);  // Handle successful login (e.g., store token, redirect, etc.)
    } else {
      alert(data.message);  // Handle error
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Forgot password?</p>
        <button onClick={handleLogin}>Login</button>
        <p>
          Not a member? <span onClick={handleSignupClick}>Signup now</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
