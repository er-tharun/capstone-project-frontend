import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <h1 className="heading">
        <span className="text-green-400 text-3xl">gym features</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src="images/trainer-3.jpg" alt="" />
          </div>
          <div className="content">
            <img src="images/icon-1.png" alt="" />
            <h3 className="text-2xl text-white">body building</h3>
            <p className="text-lg text-gray-400">
              Experience a the workout with our modern.
            </p>
            <Link to="/features-page" className="btn">
              Read more
            </Link>
          </div>
        </div>
        <div className="box second">
          <div className="image">
            <img src="images/zym-girl.png" alt="" />
          </div>
          <div className="content">
            <img src="images/icon-2.png" alt="" />
            <h3 className="text-2xl text-white">gym for men</h3>
            <p className="text-lg text-gray-400">
              Transform your body with Fit Palace Gym's personalized diet
            </p>
            <Link to="/features-page" className="btn">
              Read more
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src="images/Gym 1.jpg" alt="" />
          </div>
          <div className="content">
            <img src="https://i.pinimg.com/originals/9f/73/1f/9f731fd074f727395aa9bdbd8c0809c5.jpg" alt="" />
            <h3 className="text-2xl text-white">Gym for women</h3>
            <p className="text-lg text-gray-400">
              Get expert guidance and achieve your goals with Fit Palace Gym's
            </p>
            <Link to="/features-page" className="btn">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;