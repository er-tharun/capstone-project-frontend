import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-container'>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                    <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About</Link></li> {/* Link updated to point to #aboutus */}
          <li><Link to="/gym-Features">Features</Link></li>
          <li><Link to="pricings">Pricing</Link></li>
          <li><Link to="/trainers">Trainers</Link></li>
          <li><Link to="/signup">Register Now</Link></li>
        </ul>
                </div>
                <div className="footer-column">
                    <h3>Opening Hours</h3>
                    <ul>
                        <li>Monday: <span>7:00am - 10:30pm</span></li>
                        <li>Tuesday: <span>7:00am - 10:30pm</span></li>
                        <li>Wednesday: <span>7:00am - 10:30pm</span></li>
                        <li>Friday: <span>7:00am - 10:30pm</span></li>
                        <li>Saturday: <span>7:00am - 10:30pm</span></li>
                        <li>Sunday: <span>Closed</span></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="tel:+91-55555-55555">+91-55555-55555</a></li>
                        <li><a href="+91-78787-87878">+91-78787-87878</a></li>
                        <li><a href="fitnessfit@Gmail.Com">fitnessfit@Gmail.Com</a></li>
                        <li>Chennai, India - 600020</li>
                    </ul>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
                <div className="footer-column">
                    <h3>Newsletter</h3>
                    <p>Subscribe For Latest Updates</p>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                </div>
        </footer>
    );
};

export default Footer;
