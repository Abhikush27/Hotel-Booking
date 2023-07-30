import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/bookings').then(response => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length > 0 ? (
        bookings.map(booking => (
          <div key={booking._id}>
            Check-In: {booking.checkIn} - Check-Out: {booking.checkOut}
          </div>
        ))
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
}

export default MyBookings;
