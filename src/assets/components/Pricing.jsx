import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';
const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="information">
        <span className="text-green-400 text-2xl">pricing plan</span>
        <h3 className="text-4xl text-white">affordable pricing plan for your</h3>
        <p className="text-lg text-gray-400">
          Fit Palace Gym is equipped with finest trainers as the foundation and most spacious training areas for weight
          lifting to functional, Hygienic washroom, cafeteria, and dedicated space for dance and zumba class.
        </p>
        <p className="text-lg text-gray-400">
          <i className="fas fa-check"></i> cardio exercise
        </p>
        <p className="text-lg text-gray-400">
          <i className="fas fa-check"></i> weight lifting
        </p>
        <p className="text-lg text-gray-400">
          <i className="fas fa-check"></i> diet plans
        </p>
        <p className="text-lg text-gray-400">
          <i className="fas fa-check"></i> overall results
        </p>
        <Link to="/login" className="btn">
          all pricing
        </Link>
      </div>
      <div className="plan basic">
        <h3 className="text-2xl text-white">basic plan</h3>
        <div className="price">
          <span className="text-green-400">$</span>
          <span className="text-5xl text-white">30</span>
          <span className="text-lg text-gray-400">/mo</span>
        </div>
        <div className="list">
          <p className="text-lg text-gray-400">
            <i className="fas fa-check"></i> personal training
          </p>
          <p className="text-lg text-gray-400">
            <i className="fas fa-check"></i> cardio exercise
          </p>
          <p className="text-lg text-gray-400">
            <i className="fas fa-check"></i> weight lifting
          </p>
          <p className="text-lg text-gray-400">
            <i className="fas fa-check"></i> diet plans
          </p>
          <p className="text-lg text-gray-400">
            <i className="fas fa-check"></i> overall results
          </p>
        </div>
        <Link to="/login" className="btn">
          get started
        </Link>
      </div>
      <div className="plan">
        <h3 className="text-2xl text-white">premium plan</h3>
        <div className="price">
          <span className="text-green-400">$</span>
          <span className="text-5xl text-white">90</span>
          <span className="text-lg text-gray-400">/mo</span>
        </div>
        <div className="list">
          <p className="text-lg text-gray-400">
            <i className="fas fa-check"></i> personal training
          </p>
          <p className="text-lg text-gray-400">
            <i className="fas fa-check"></i> cardio exercise
          </p>
          <p className=" text-lg text-gray-400">
            <i className="fas fa-check"></i> weight lifting
          </p>
          <p className="text-lg text-gray-400">
            <i className="fas fa-check"></i> diet plans
          </p>
          <p className="text-lg text-gray-400">
            <i className="fas fa-check"></i> overall results
          </p>
        </div>
        <Link to="/login" className="btn">
          get started
        </Link>
      </div>
    </section>
  );
};

export default Pricing;