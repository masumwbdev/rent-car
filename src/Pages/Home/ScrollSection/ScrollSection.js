import React from 'react';
import { Link } from 'react-router-dom';
import './ScrollSection.css'

const ScrollSection = () => {
    return (
        <div className='scroll-container text-center'>
            <h1>RENT A CAR NOW!</h1>
            <p className='mt-4 mb-4'>Competitive car rental pricing on a wide variety of quality vehicles. Get started now!</p>
            <Link className='contact-btn' to="/contact"><button className='hvr-sweep-to-bottom hvr-ripple-out'>Contact Us</button></Link>
            <Link className='service-btn' to="/services"><button className="hvr-sweep-to-right hvr-ripple-out">See All Cars</button></Link>
        </div>
    );
};

export default ScrollSection;