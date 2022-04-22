import React from 'react';
import './MyOrder.css'

const MyOrder = ({ myBook, handleDlt }) => {
    const { regularCost, img, title } = myBook;
    
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