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
    const handleDlt = id => {
        console.log(
            'clicked'
        )
        const url = `http://localhost:5000/bookings/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted successfully');
                const remaining = myBooking.filter(book => book._id !== id);
                mySetBooking(remaining);
            }
        })
    }
    return (
        <div>
            {
                myBooking.map(myBook => <MyOrder
                    myBook={myBook}
                    handleDlt={handleDlt}
                ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;