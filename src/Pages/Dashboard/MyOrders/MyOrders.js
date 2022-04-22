import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth'
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [myBooking, mySetBooking] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/bookings?email=${user.email}`
        fetch(url, {

        })
            .then(res => res.json())
            .then(data => mySetBooking(data));
    }, [user.email])
    return (
        <div>
            {
                myBooking.map(myBook => <MyOrder
                    myBook={myBook}
                ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;