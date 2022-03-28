import React from 'react';
import { Link } from 'react-router-dom';
import './ScrollSection.css'

const ScrollSection = () => {
    return (
        <div className='scroll-container'>
            <div className="width-control">
                <div className='text-center'>
                    <h1>RENT A CAR NOW!</h1>
                    <p className='mt-4 mb-4'>Competitive car rental pricing on a wide variety of quality vehicles. Get started now!</p>
                    <Link className='contact-btn' to="/contact"><button className='hvr-sweep-to-bottom hvr-ripple-out'>Contact Us</button></Link>
                    <Link className='service-btn' to="/services"><button className="hvr-sweep-to-right hvr-ripple-out">See All Cars</button></Link>
                </div>
                <div>
                    <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
                        <div class="col scroll-card-one">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Are You looking for a car?</h5>
                                    <p class="card-text">Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col scroll-card-two">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Do you want to sell a car?</h5>
                                    <p class="card-text">What’s your car worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule your appointment today!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollSection;