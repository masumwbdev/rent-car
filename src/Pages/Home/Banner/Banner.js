import React from 'react';
import './Banner.css';
import imgOne from '../../../images/banner/car3.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div data-aos="fade-up"
                    data-aos-duration="2000" className="top-content text-center">
                <h6>Book a car now</h6>
                <h1 className=''>Free Test Drive!</h1>
            </div>
            <div className="width-control row">
                <div className="col-sm-12 col-md-6">
                    <img data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="2000" className='img-fluid' src={imgOne} alt="" />
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className="col-sm-12 col-md-6 text-center magda-touring">
                    <h1 className='magda"'>Magda Touring</h1>
                    <h2>32$/Day</h2>
                    <Link to="/services"><button className="hvr-sweep-to-right hvr-ripple-out">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;