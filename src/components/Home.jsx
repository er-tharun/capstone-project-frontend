// Home.jsx
import React from 'react';
import './Home.css'; 
import { Link, useNavigate } from'react-router-dom';
import GymFeatures from './GymFeatures';


const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle Get Discount button click
  const handleGetDiscountClick = () => {
    navigate('/login'); // Navigate to the Login page
  };

  // Define function for All Pricing button
  //const handleAllPricingClick = () => {
   //// navigate('/pricing'); // Navigate to the Pricing page
 

  return (
    <div className="home">
     
      {/* Hero Section */}
      <section className="hero">
      <div className="hero-image"></div>
        <div className="hero-content">
          <h2>Be Strong, Be Fit</h2>
          <h1>Make Yourself Stronger<br/>Than Your Excuses.</h1>
          <button className="cta-button" onClick={handleGetDiscountClick}>Get Started</button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="about-us-content">
          <h3>About Us</h3>
          <h1>Every Day Is A Chance To Become Better</h1>
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
        <div className="about-us-image">
          <img
            src={'https://static.vecteezy.com/system/resources/thumbnails/022/995/026/small_2x/interior-of-a-modern-gym-with-fitness-equipment-generative-ai-photo.jpg'}
            alt="About Us"
          />
        </div>
      </section>

      <GymFeatures />

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
          <button onClick={handleGetDiscountClick}>All Pricing</button>
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
            <button onClick={handleGetDiscountClick}>Get Start</button>
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
            <button onClick={handleGetDiscountClick}>Get Start</button>
          </div>
        </div>
      </div>

      <div className="hero-section">
        <h2>Join Us Now</h2>
        <h1>GET UPTO 50% DISCOUNT</h1>
        <p>Don't Just Take Our Word For It - Read What Our Clients Have To Say!</p>
        <button className="get-discount" onClick={handleGetDiscountClick}>Get Discount</button>
      </div>
      

      <section className="testimonials">
        <h2>Testimonials</h2>
        <h3>What Our Clients Say</h3>
        <p>
          One Of The Best Gym's I Have Ever Joined. Excellent Space, Equipment And Service. Special
          Shout Out To Karthik Sir (Personal Trainer, Gold Medallist) For His Unique And Dynamic
          Workouts.
        </p>
        
      </section>

      <section className="client-reviews">
        <div className="review">
          <p>This gym is amazing with super facilities, top equipment, and a great environment. Good service.</p>
          <div className="review-author">
            <img src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="Smitha" />
            <div>
              <h4>Smitha</h4>
              
            </div>
          </div>
        </div>

        <div className="review">
          <p>One of the best gyms I have ever joined. Excellent space, equipment, and service.</p>
          <div className="review-author">
            <img src="https://media.istockphoto.com/id/508956644/photo/pretty-colombian-woman.jpg?s=612x612&w=0&k=20&c=jEwTCMKSpjYsaSfiFIlifYneUpczureQFl8o543_ZjE=" alt="Ankita" />
            <div>
              <h4>Ankitha</h4>
              
            </div>
          </div>
        </div>

        <div className="review">
          <p>Amazing gym, great trainers, well-equipped gym.</p>
          <div className="review-author">
            <img src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=640&crop=smart&auto=webp&s=d87cecc44334f13e584bc273c5fd27d7318643c0" alt="Akash" />
            <div>
              <h4>Akash</h4>
            
            </div>
          </div>
        </div>

        <div className="review">
          <p>Karthik is a very good trainer, and Fit Palace is very spacious. If any personal trainer is required, please contact Karthik.</p>
          <div className="review-author">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/049/204/545/small/young-man-in-a-black-shirt-stands-confidently-in-an-urban-setting-during-the-afternoon-light-photo.jpeg" alt="Rithvik" />
            <div>
              <h4>Rithvik</h4>
              
            </div>
          </div>
        </div>
        <button>Read More</button>
      </section>
    </div>
  );
};

export default Home;
