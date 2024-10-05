import React from 'react';
import { Link, useNavigate } from'react-router-dom';
import './Trainers.css';

const trainersData = [
    { name: "Karthik", img: "https://thumbs.dreamstime.com/b/young-african-american-male-personal-trainer-holding-clipboard-gym-47294261.jpg" },
    { name: "Deepika", img: "https://t3.ftcdn.net/jpg/06/35/17/52/360_F_635175286_Ve3RnNYKcHmWsHRNNhoWq4c38pLpZapu.jpg" },
    { name: "Arjun", img: "https://img.freepik.com/premium-photo/portrait-handsome-male-fitness-instructor-gym-healthy-lifestyle-sport-concept-background_948175-1778.jpg" },
    { name: "Dinesh", img: "https://venketfitness.com/assets/VEN06242-min-2048x1365-CZSgI9qf.jpg" },
];

const Trainers = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    

    const handleAppointmentClick = () => {
        navigate('/appointments');
    };
    return (
        <div className="trainers-container">
            <h1>FitnessFIT</h1>
            <h2>Expert Trainers</h2>
            <div className="trainer-cards">
                {trainersData.map((trainer, index) => (
                    <div className="card" key={index}>
                        <img src={trainer.img} alt={trainer.name} />
                        <div className="card-info">
                            <p className="expert">Expert Trainer</p>
                            <h2>{trainer.name}</h2>
                            <button className="book-button" onClick={handleAppointmentClick}>
                                Book Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trainers;
