import React, { useState } from 'react';
import axios from 'axios';
import './Appointment.css';

const baseUrl = 'http://localhost:5000';

const Appointment = () => {
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [name, setName] = useState(sessionStorage.getItem('name'));
  const [trainerId, setTrainerId] = useState(sessionStorage.getItem('trainerId'));

  const handleBookAppointment = async () => {
    if (!token) {
      alert('Please Login First to Book an Appointment!!');
      window.location.href = './Login.html';
    } else if (date === '' || slot === '') {
      alert('Please fill all the fields');
    } else {
      const obj = {
        trainerId,
        bookingDate: date,
        bookingSlot: slot,
      };
      try {
        const res = await axios.post(`${baseUrl}/booking/create`, obj, {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const out = await res.json();
        if (out.msg === 'This Slot is Not Available.') {
          alert('This Slot is Not Available.');
        } else if (out.msg === 'new booking created successfully') {
          alert(`Hii ${name} Your booking is confirmed on ${obj.bookingDate}`);
        } else {
          alert('Something went wrong!!');
        }
      } catch (error) {
        console.log('err', error);
        alert('Something went wrong!!!!');
      }
    }
  };

  return (
    <div className="input-part">
      <div id="main_body">
        <div>
          <input
            id="inputdate"
            type="date"
            placeholder="Select the appointment date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <select
            name="slot"
            id="slot-select"
            value={slot}
            onChange={(e) => setSlot(e.target.value)}
          >
            <option value="">--Please choose an slot option--</option>
            <option value="6-8">6 AM to 8 AM</option>
            <option value="9-11">9 AM to 11 AM</option>
            <option value="4-6">4 PM to 6 PM</option>
            <option value="7-9">7 PM to 9 PM</option>
          </select>
        </div>
        <div>
          <button id="book_appointment" onClick={handleBookAppointment}>
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;