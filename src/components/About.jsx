import React from 'react';

import './About.css';

const About = () => {
  return (
    <div className="container">
     
      <section className="strip">
        <div className="strip-img">
          <img 
            src="https://e0.pxfuel.com/wallpapers/66/231/desktop-wallpaper-aesthetic-body-aesthetic-bodybuilding.jpg" 
            alt="Fitness Models" 
          />
        </div>
        <div className="strip-text">
          <h1>Get Your Fitness Face On.</h1>
          <p>
            Fit Palace Gym Is Equipped With Finest Trainers As The Foundation And Most Spacious
            Training Areas For Weight Lifting To Functional, Hygienic Washroom, Cafeteria, And
            Dedicated Space For Dance And Zumba Class.
          </p>
          <p>
            Going to the gym helps to improve physical health. Regular exercise can reduce the risk 
            of chronic diseases and promote overall health. Secondly, it helps to improve mental 
            health by reducing stress and anxiety levels. Thirdly, it can help you to build a community 
            and make new friends with similar goals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
