// src/Pricing.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import './Pricing.css';

const Pricing = () => {
  const navigate = useNavigate(); // Use useNavigate for routing

  const handleAllPricingClick = () => {
    navigate('/login'); // Navigate to Login page
  };

  const handleToken = async (token, amount) => {
    const response = await fetch('https://capstone-project-backend-aaq1.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, amount, email: 'customer@example.com' }), // Modify as necessary
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message); // Handle successful payment
    } else {
      alert(data.message); // Handle payment error
    }
  };

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Pricing Plan</h1>
        <h2>Affordable Pricing Plan For Your</h2>
        <p>Fit Palace Gym is equipped with the finest trainers...</p>
        <ul>
          <li>Cardio Exercise</li>
          <li>Weight Lifting</li>
          <li>Diet Plans</li>
          <li>Overall Results</li>
        </ul>
        <button onClick={handleAllPricingClick}>All Pricing</button>
      </div>
      <div className="pricing-plan">
        <div className="plan basic">
          <h3>Basic Plan</h3>
          <p>$30/Mo</p>
          <ul>
            <li>Personal Training</li>
            <li>Cardio Exercise</li>
            <li>Weight Lifting</li>
            <li>Diet Plans</li>
            <li>Overall Results</li>
          </ul>
          <StripeCheckout
            token={(token) => handleToken(token, 3000)} // amount in cents
            stripeKey="your_public_key" // replace with your Stripe publishable key
          >
            <button>Get Started</button>
          </StripeCheckout>
        </div>
        <div className="plan premium">
          <h3>Premium Plan</h3>
          <p>$90/Mo</p>
          <ul>
            <li>Personal Training</li>
            <li>Cardio Exercise</li>
            <li>Weight Lifting</li>
            <li>Diet Plans</li>
            <li>Overall Results</li>
          </ul>
          <StripeCheckout
            token={(token) => handleToken(token, 9000)} // amount in cents
            stripeKey="your_public_key" // replace with your Stripe publishable key
          >
            <button>Get Started</button>
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
