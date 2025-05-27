import React from 'react';
import { userBookingsDummyData } from '../assets/assets'; // adjust if needed
import Title from '../components/Title';

const formatDate = (isoDateStr) => {
  const date = new Date(isoDateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const MyBookings = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-15">
      {/* Title Component */}
      <Title
      className='mb-4'
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
      />

      {/* Headings Row */}
      <div className="hidden md:flex justify-between text-gray-500 font-medium text-sm border-b pb-2 mt-6 mb-4">
        <span>Hotel</span>
        <span>Date & Timings</span>
        <span>Payment</span>
      </div>

      {userBookingsDummyData.map((booking) => (
        <div
          key={booking._id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4 mb-6"
        >
          {/* Hotel Info */}
          <div className="flex gap-4 w-full md:w-1/2">
            <img
              src={booking.room.images[0]}
              alt={booking.room.name}
              className="w-32 h-24 object-cover rounded-md"
            />
            <div>
              <h2 className="font-semibold text-lg">
                {booking.hotel.name}{' '}
                <span className="text-sm text-gray-500">({booking.room.type})</span>
              </h2>
              <p className="text-gray-500 text-sm">{booking.hotel.location}</p>
              <p className="text-sm mt-1">Guests: {booking.guests}</p>
              <p className="text-sm font-medium mt-1">Total: ${booking.totalPrice}</p>
            </div>
          </div>

          {/* Date & Time */}
          <div className="w-full md:w-1/4 text-sm text-gray-600 flex justify-between md:block">
            <div className="mb-1">
              <span className="font-medium text-black">Check-In:</span>
              <span className="ml-1">{formatDate(booking.checkInDate)}</span>
            </div>
            <div>
              <span className="font-medium text-black">Check-Out:</span>
              <span className="ml-1">{formatDate(booking.checkOutDate)}</span>
            </div>
          </div>

          {/* Payment Status */}
          <div className="flex flex-col items-start md:items-end text-sm w-full md:w-auto">
            <span
              className={`font-medium flex items-center gap-1 ${
                booking.isPaid ? 'text-green-600' : 'text-red-500'
              }`}
            >
              ● {booking.isPaid ? 'Paid' : 'Unpaid'}
            </span>
            {!booking.isPaid && (
              <button className="mt-2 px-4 py-1 bg-gray-800 text-white rounded hover:bg-gray-700">
                Pay now
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
