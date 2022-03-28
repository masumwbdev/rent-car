import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import BottomFooter from '../Shared/Footer/BottomFooter/BottomFooter';
import TopFooter from '../Shared/Footer/TopFooter/TopFooter';
import Navbar from '../Shared/Navbar/Navbar';
import TopNav from '../Shared/TopNav/TopNav';

const Booking = () => {
    const [booking, setBooking] = useState({});
    console.log(booking)
    const { bookingId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${bookingId}`)
        .then(res => res.json())
        .then(data => setBooking(data))
    } , [])
    return (
        <div>
            <TopNav />
            <Navbar />
            <h1>This is booking</h1>
            <h1>Booking id {booking._id}</h1>
            <h1>{booking.carName}</h1>
            <img src={booking.imgURL} alt="" />
            <TopFooter />
            <BottomFooter />
        </div>
    );
};

export default Booking;