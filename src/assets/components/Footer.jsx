import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMap } from 'react-icons/fa';
const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3 className="text-2xl text-white">quick links</h3>
          <a href="#home" className="links">
            home
          </a>
          <a href="#about" className="links">
            about
          </a>
          <a href="#features" className="links">
            features
          </a>
          <a href="#pricing" className="links">
            pricing
          </a>
          <a href="#trainers" className="links">
            trainers
          </a>
          <a href="#appointment" className="links">
            appointment
          </a>
        </div>
        <div className="box">
          <h3 className="text-2xl text-white">opening hours</h3>
          <p className="text-lg text-gray-400">
            monday : <i> 7:00am - 10:30pm </i>
          </p>
          <p className="text-lg text-gray-400">
            tuesday : <i> 7:00am - 10:30pm </i>
          </p>
          <p className="text-lg text-gray-400">
            wednesday : <i> 7:00am - 10:30pm </i>
          </p>
          <p className="text-lg text-gray-400">
            friday : <i> 7:00am - 10:30pm </i>
          </p>
          <p className="text-lg text-gray-400">
            saturday : <i> 7:00am - 10:30pm </i>
          </p>
          <p className="text-lg text-gray-400">
            sunday : <i> closed </i>
          </p>
 </div>
        <div className="box">
          <h3 className="text-2xl text-white">opening hours</h3>
          <p className="text-lg text-gray-400">
            <i className="fas fa-phone"></i> +123-456-7890
          </p>
          <p className="text-lg text-gray-400">
            <i className="fas fa-phone"></i> +111-222-3333
          </p>
          <p className="text-lg text-gray-400">
            <i className="fas fa-envelope"></i> Masaischool@gmail.com
          </p>
          <p className="text-lg text-gray-400">
            <i className="fas fa-map"></i> Noida, india - 400104
          </p>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-pinterest"></a>
          </div>
        </div>
        <div className="box">
          <h3 className="text-2xl text-white">Newsletter</h3>
          <p className="text-lg text-gray-400">
            Subscribe for latest updates ❤️
          </p>
          <form>
            <input type="email" name="" className="email" placeholder="enter your email" />
            <input type="submit" value="subscribe" className="btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;