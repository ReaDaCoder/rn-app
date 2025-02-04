import { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ restaurantId }) => {
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post(
        `https://restaurant-app-backend-sandy.vercel.app/${restaurantId}/bookings`,
        { day, hour, guest: guests },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Booking successful!');
    } catch (error) {
      console.error(error.response?.data || error.message);
      setMessage('Error making the booking');
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <input
        type="date"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        required
      />
      <input
        type="time"
        value={hour}
        onChange={(e) => setHour(e.target.value)}
        required
      />
      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />
      <button type="submit">Book</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default BookingForm;
