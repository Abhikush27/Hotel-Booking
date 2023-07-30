import React, { useState } from 'react';
import axios from 'axios';

function Booking({ place }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [Guests, setGuests] = useState(1);
  const [phone, setPhone] = useState('');

  const BookIt = async () => {
    try {
      const response = await axios.post('/bookings', {
        checkIn,
        checkOut,
        Guests,
        phone,
        place: place.id,
      });
      console.log('Booking response:', response.data); // Log the response from the server
    } catch (error) {
      console.error('Error occurred during booking:', error);
    }
  };

  return (
    <div className='booking'>
      <h3>
        <label>Check in:</label>
        <input type='date' value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        <br />
        <label>Check out:</label>
        <input type='date' value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
        <br />
        <label>Number Of Guests </label>
        <input type='number' value={Guests} onChange={(e) => setGuests(e.target.value)} />
        <br />
        <label>Phone Number</label>
        <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br />
        <button onClick={BookIt}>Book Now</button>
      </h3>
    </div>
  );
}

export default Booking;
