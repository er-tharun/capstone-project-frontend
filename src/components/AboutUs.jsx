import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <h3>About Us</h3>
      <h1>Every Day Is A Chance To Become Better</h1>
      <img src={'https://static.vecteezy.com/system/resources/thumbnails/022/995/026/small_2x/interior-of-a-modern-gym-with-fitness-equipment-generative-ai-photo.jpg'} alt="About Us" className="about-image" /> {/* Add the image here */}
      <p>
        Give Your Workout More Variety Than Ever With Our Accessories, From Warmup To Cooldown. 
        Increase Your Body's Capacities Every Day, From Stability To Mobility, From Power To Speed.
      </p>
      <ul className="benefits">
        <li>✔ Body And Mind <span>Commercial Treadmill Series.</span></li>
        <li>✔ Healthy Life <span>Commercial Elliptical Series.</span></li>
        <li>✔ Strategies <span>Commercial Cyclic Series.</span></li>
        <li>✔ Workout <span>Special Performance.</span></li>
      </ul>
      <Link to="/about" className="read-more">Read More</Link>
    </div>
  );
};

export default AboutUs;
