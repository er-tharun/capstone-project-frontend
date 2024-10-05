import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <span className="text-green-400 text-2xl">Join us now</span>
      <h3 className="text-3xl text-white">Get upto 50% discount</h3>
      <p className="text-lg text-gray-400">
        Don't just take our word for it - read what our clients have to say!
      </p>
      <a href="#" className="btn">
        Get discount
      </a>
    </section>
  );
};

export default Banner;