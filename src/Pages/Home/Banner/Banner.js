import React from 'react';
import './Banner.css';
import imgOne from '../../../images/banner/car3.png';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="top-content text-center">
                <h6>Book a car now</h6>
                <h1 className='animate__animated animate__bounce'>Free Test Drive!</h1>
            </div>
            <div className="width-control row">
                <div className="col-sm-12 col-md-6">
                    <img className='img-fluid animate__animated animate__backInUp' src={imgOne} alt="" />
                </div>
                <div className="col-sm-12 col-md-6 text-center magda-touring">
                    <h1 className='magda animate__animated animate__pulse'>Magda Touring</h1>
                    <h2>32$/Day</h2>
                    <button className="hvr-sweep-to-right hvr-ripple-out">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;