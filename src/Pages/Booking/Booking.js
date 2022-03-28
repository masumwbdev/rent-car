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
            <div className="width-control">
                <h4 className='mt-3 mb-3'>Service overview</h4>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <img src={booking.imgURL} alt="" />
                        <h5>{booking.carName}</h5>
                        <ul>
                            <li>
                                {booking.passengers} Passengers
                            </li>
                            <li>
                                {booking.largeSuitcases} Large suitcases, {booking.smallSuitcases} Small suitcases
                            </li>
                            <li>
                                {booking.transmission} Transmission
                            </li>
                            <li>
                                {booking.aircondition}
                            </li>
                            <li>
                                {booking.oil} km/liters
                            </li>
                            <li>
                                {booking.emmissions} CO2 emmissions
                            </li>
                            <li>
                                {booking.regularCost}$
                            </li>
                        </ul>
                        <h4>Car description</h4>
                        <p>{booking.description}</p>
                    </div>
                    <div className="col-sm-12 col-md-6">

                    </div>
                </div>
            </div>
            <TopFooter />
            <BottomFooter />
        </div>
    );
};

export default Booking;