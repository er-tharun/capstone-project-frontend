import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './BookingPage.css';
const baseUrl = 'http://localhost:5000';
function BookingPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getAllBookingData();
  }, []);

  const getAllBookingData = async () => {
    try {
      const res = await axios.get(`${baseurl}/booking`);
      const data = await res.json();
      setBookings(data.bookingData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-3xl text-center">All Bookings</h1>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th>Trainer Id</th>
            <th>User Id</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time Slot</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.trainerId}</td>
              <td>{booking.userId}</td>
              <td>{booking.userEmail}</td>
              <td>{booking.bookingDate}</td>
              <td>{booking.bookingSlot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingPage;