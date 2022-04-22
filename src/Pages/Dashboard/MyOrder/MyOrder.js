import React from 'react';
import './MyOrder.css'

const MyOrder = ({ myBook, mySetBooking }) => {
    const { regularCost, img, title } = myBook;
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
                const remaining = myBook.filter(book => book._id !== id);
                mySetBooking(remaining);
            }
        })
    }
    return (
        <div className='my-order width-control'>
            <div className='row'>
                <div className="col-lg-4">
                    <img src={img} alt="" />
                </div>
                <div className="col-lg-4">
                    <h5>{title}</h5>
                </div>
                <div className="col-lg-2">
                    <h5>{regularCost}</h5>
                </div>
                <div className="col-lg-2">
                    <button onClick={() => handleDlt(myBook._id)}>Delete</button>
                </div>

            </div>
        </div>
    );
};

export default MyOrder;