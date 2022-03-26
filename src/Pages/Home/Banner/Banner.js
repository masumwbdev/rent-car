import React from 'react';
import './Banner.css';
import imgOne from '../../../images/banner/car3.png';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="top-content text-center">
                <h6>Book a car now</h6>
                <h1>Free Test Drive!</h1>
            </div>
            <div className="width-control row">
                <div className="col-sm-12 col-md-6">
                    <img className='img-fluid' src={imgOne} alt="" />
                </div>
                <div className="col-sm-12 col-md-6 text-center magda-touring">
                    <h1 className='magda'>Magda Touring</h1>
                    <h2>32$/Day</h2>
                    <button className="hvr-bounce-to-right">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;