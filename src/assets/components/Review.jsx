import React from 'react';
import Swiper from 'swiper';
import './Review.css';
const Review = () => {
  return (
    <section className="review">
      <div className="information">
        <span className="text-green-400 text-2xl">Testimonials</span>
        <h3 className="text-3xl text-white">what our clients says</h3>
        <p className="text-lg text-gray-400">
          One of the best Gym's I have ever joined. Excellent space, equipment and service. Special shout out to David
          Sir (Personal Trainer, Gold Medallist ) for his unique and dynamic workouts
        </p>
        <a href="#" className="btn">
          read more
        </a>
      </div>
      <div className="swiper review-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide">
            <p className="text-lg text-gray-400">
              This gym is amazing with super facility, top equipment and great environment. Good service .
            </p>
            <div className="user">
              <img src="images/pic-1.png" alt="" />
              <div className="info">
                <h3 className="text-2xl text-white">Vishnu</h3>
                
              </div>
              <i className="fas fa-quote-left"></i>
            </div>
          </div>
          <div className="swiper-slide slide">
            <p className="text-lg text-gray-400">
              One of the best Gym's I have ever joined. Excellent space, equipment and service.
            </p>
            <div className="user">
              <img src="images/pic-2.png" alt="" />
              <div className="info">
                <h3 className="text-2xl text-white">Karthik</h3>
                
              </div>
              <i className="fas fa-quote-left"></i>
            </div>
          </div>
          <div className="swiper-slide slide">
            <p className="text-lg text-gray-400">
              Amazing gym great trainers well equipped gym.
            </p>
            <div className="user">
              <img src="images/pic-3.png" alt="" />
              <div className="info">
                <h3 className="text-2xl text-white">Jessi</h3>
              </div>
              <i className="fas fa-quote-left"></i>
            </div>
          </div>
          <div className="swiper-slide slide">
            <p className="text-lg text-gray-400">
              David is very good trainer and fit palace is very spaces..
              If any personal trainer required please contact david
            </p>
            <div className="user">
              <img src="images/pic-4.png" alt="" />
              <div className="info">
                <h3 className="text-2xl text-white">sam</h3>
                
              </div>
              <i className="fas fa-quote-left"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;