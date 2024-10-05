import React from 'react';
import './About.css';
function About() {
  return (
    <div id="about-us" className="flex justify-center items-center h-screen">
      <div className="about-us-img w-1/2">
        <img src="https://i.pinimg.com/564x/a2/a4/f7/a2a4f71deb43456edc356f2e92d5ab4d.jpg" alt="gym" className="w-full h-full object-cover" />
      </div>
      <div className="about-heading w-1/2">
        <h3>ABOUT US</h3>
        <h4 className="text-lg">Making fitness fun and accessible for all</h4>
        <p className="text-lg">We believe in providing a welcoming, supportive and non-judgmental atmosphere that inspires our members to achieve their fitness goals. We offer a wide variety of state-of-the-art equipment and facilities, along with personalized training plans from our experienced trainers. At our gym, we aim to empower and elevate our members’ fitness experiences, helping them lead healthier, happier lives.</p>
        <ul>
          <li>State of the art facilities</li>
          <li>Supportive Environment</li>
          <li>Like-minded individuals</li>
          <li>Great fitness experience</li>
        </ul>
      </div>
    </div>
  );
}

export default About;