import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import BottomFooter from '../Shared/Footer/BottomFooter/BottomFooter';
import TopFooter from '../Shared/Footer/TopFooter/TopFooter';
import Navbar from '../Shared/Navbar/Navbar';
import TopNav from '../Shared/TopNav/TopNav';
import axios from 'axios';
import './Booking.css'
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const [booking, setBooking] = useState({});
    const { user } = useAuth();
    console.log(booking)
    const { bookingId } = useParams();
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${bookingId}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    const onSubmit = data => {
        axios.post('http://localhost:5000/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('booking added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <TopNav />
            <Navbar />
            <div className="width-control">
                <div className="row">
                    <div className="col-sm-12 col-md-6 service-list-item">
                    <h4 className='mt-5 mb-4'>Service overview</h4>
                        <img src={booking.imgURL} alt="" />
                        <h5 className='mt-4'>{booking.carName}</h5>
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
                        <p className='service-description'>{booking.description}</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h4 className='text-center ms-5 mt-5 mb-4'>Book your car!</h4>
                        <form className="mb-5 booking-form" onSubmit={handleSubmit(onSubmit)}>

                            <input className='input-name' {...register("name", { required: true, maxLength: 1000 })} defaultValue={user?.displayName} /> <br />
                            <input className='input-email' {...register("email", { required: true, maxLength: 1000 })} defaultValue={user?.email} /> <br />
                            <input {...register("title", { required: true, maxLength: 1000 })} defaultValue={booking.carName} /> <br />
                            <input {...register("img", { required: true, maxLength: 1000 })} defaultValue={booking.imgURL} /> <br />
                            <input {...register("number", { required: true, maxLength: 1000 })} placeholder='Contact number *' /> <br />
                            <input {...register("location", { required: true, maxLength: 100 })} placeholder="City name *" /> <br />
                            <input className="submit" type="submit" value="Book confirm" />
                        </form>
                    </div>
                </div>
            </div>
            <TopFooter />
            <BottomFooter />
        </div>
    );
};

export default Booking;