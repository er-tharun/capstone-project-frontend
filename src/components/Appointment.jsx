import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
    const [date, setDate] = useState('');
    const [slot, setSlot] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const appointmentData = { date, slot };

        try {
            const response = await fetch('https://capstone-project-backend-aaq1.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointmentData),
            });

            if (response.ok) {
                setMessage('Your booking is confirmed!');
            } else {
                setMessage('Failed to send email.');
            }
        } catch (error) {
            setMessage('Error sending email.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="appointment-container">
            <h1>FitnessFIT</h1>
            <h2>All Appointments</h2>
            <form className="appointment-form" onSubmit={handleSubmit}>
                <input 
                    type="date" 
                    placeholder="Mm/Dd/Yyyy" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <select 
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                >
                    <option value="">--Please Choose A Slot Option--</option>
                    <option value="6am-8am">6 AM to 8 AM</option>
                    <option value="8am-11am">8 AM to 11 AM</option>
                    <option value="11am-1pm">11 AM to 1 PM</option>
                    <option value="1pm-3pm">1 PM to 3 PM</option>
                    <option value="3pm-5pm">3 PM to 5 PM</option>
                    <option value="5pm-7pm">5 PM to 7 PM</option>
                    <option value="7pm-9pm">7 PM to 9 PM</option>
                </select>
                <button type="submit" className="book-button">Book An Appointment</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Appointment;
