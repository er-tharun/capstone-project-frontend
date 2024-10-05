import React from 'react';
import './MidSection.css';
function MidSection() {
  return (
    <div className="mid-image flex justify-center items-center h-screen">
      <div className="mid-image-content w-1/2">
        <h1 className="head-about text-5xl font-bold">Get your fitness face on.</h1>
        <p className="para-about text-lg">Fit Palace Gym is equipped with finest trainers as the foundation and most spacious training areas for weight lifting to functional, Hygienic washroom, cafeteria, and dedicated space for dance and zumba class.</p>
      </div>
      <div className="mid-image w-1/2">
        <img src="./images/fitness.png" alt="mid-image" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default MidSection;