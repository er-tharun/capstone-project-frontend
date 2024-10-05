import React from 'react';
import Swiper from 'swiper';  
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './Home.css';
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="swiper home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide" style={{ backgroundImage: 'url(images/home-bg-2.jpg)' }}>
            <div className="content">
              <span className="text-green-400 text-2xl">be strong, be fit</span>
              <h3 className="text-5xl text-white">Make yourself stronger than your excuses.</h3>
              <a href="./Login.html" className="btn">
                get started
              </a>
            </div>
          </div>
          <div className="swiper-slide slide" style={{ backgroundImage: 'url(images/home-bg-1.jpg)' }}>
            <div className="content">
              <span className="text-green-400 text-2xl">be strong, be fit</span>
              <h3 className="text-5xl text-white">Make yourself stronger than your excuses.</h3>
              <a href="#" className="btn">
                get started
              </a>
            </div>
          </div>
          <div className="swiper-slide slide" style={{ backgroundImage: 'url(images/home-bg-3.jpg)' }}>
            <div className="content">
              <span className="text-green-400 text-2xl">be strong, be fit</span>
              <h3 className="text-5xl text-white">Make yourself stronger than your excuses.</h3>
              <a href="#" className="btn">
                get started
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Home;