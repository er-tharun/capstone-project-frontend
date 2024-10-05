import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GymFeatures.css'; // Assume you have a CSS file for styling

const GymFeatures = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle Read More button click
  const handleReadMore = () => {
    navigate('/features'); // Navigate to Features page
  };
  return (
    <div className="gym-features">
      <h2>Gym Features</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <img src="https://img.freepik.com/fotos-gratis/homem-jovem-fitness-em-estudio_7502-5008.jpg
" alt="Gym for Men" />
          <h3>Gym For Men</h3>
          <p>Transform Your Body With Fit Palace Gym's Personalized Diet</p>
          <button onClick={handleReadMore}>Read More</button>
        </div>
        <div className="feature-card">
          <img src="https://t4.ftcdn.net/jpg/01/89/74/15/360_F_189741513_VVidINOxRfACG5H3kypVufaGMbFjBq7X.jpg
" alt="Body Building" />
          <h3>Body Building</h3>
          <p>Experience A The Workout With Our Modern Equipment</p>
          <button onClick={handleReadMore}>Read More</button>
        </div>
        <div className="feature-card">
          <img src="https://img.freepik.com/premium-photo/fitness-girl-training-with-dumbbells-gym_1212634-13489.jpg" alt="Gym for Women" />
          <h3>Gym For Women</h3>
          <p>Get Expert Guidance And Achieve Your Goals With Fit Palace Gym's</p>
          <button onClick={handleReadMore}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default GymFeatures;

