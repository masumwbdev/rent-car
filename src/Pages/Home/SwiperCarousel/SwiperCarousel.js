import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import './SwiperCarousel.css';
import sOne from '../../../images/swiper/swiper1.jpg';
import sTwo from '../../../images/swiper/swiper2.jpg';
import sThree from '../../../images/swiper/swiper3.jpg';
import sFour from '../../../images/swiper/swiper4.jpg';
import sFive from '../../../images/swiper/swiper5.jpg';
import sSix from '../../../images/swiper/swiper6.jpg';
import { Link } from 'react-router-dom';

const SwiperCarousel = () => {
    return (
        <div className='swiper-container'>
            <div className="width-control">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className="row align-items-center swiper-carousel">
                            <div className="col-sm-12 col-md-6">
                                <img className='img-fluid' src={sOne} alt="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h3>Find the perfect car <span>to unwind for the weekend</span></h3>
                                <p>From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.</p>
                                <Link to="/services">
                                    <button className='hvr-wobble-top'>Browse Car</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row align-items-center swiper-carousel">
                            <div className="col-sm-12 col-md-6">
                                <img className='img-fluid' src={sTwo} alt="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h3>Find the perfect car <span>to upgrade your vacation plans</span></h3>
                                <p>Skip the rental car counter and find the perfect car to complement your vacation vibe.</p>
                                <Link to="/services">
                                    <button className='hvr-wobble-top'>Browse Car</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row align-items-center swiper-carousel">
                            <div className="col-sm-12 col-md-6">
                                <img className='img-fluid' src={sThree} alt="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h3>Find the perfect car <span>for scenic corners & curves</span></h3>
                                <p>Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.</p>
                                <Link to="/services">
                                    <button className='hvr-wobble-top'>Browse Car</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row align-items-center swiper-carousel">
                            <div className="col-sm-12 col-md-6">
                                <img className='img-fluid' src={sFour} alt="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h3>Find the perfect car <span>to try before you buy</span></h3>
                                <p>Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.</p>
                                <Link to="/services">
                                    <button className='hvr-wobble-top'>Browse Car</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row align-items-center swiper-carousel">
                            <div className="col-sm-12 col-md-6">
                                <img className='img-fluid' src={sFive} alt="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h3>Find the perfect car <span>to make errand day easier</span></h3>
                                <p>Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.</p>
                                <Link to="/services">
                                    <button className='hvr-wobble-top'>Browse Car</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row align-items-center swiper-carousel">
                            <div className="col-sm-12 col-md-6">
                                <img className='img-fluid' src={sSix} alt="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h3>Find the perfect car <span>to conquer the great outdoors</span></h3>
                                <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                                <Link to="/services"><button className='hvr-wobble-top'>Browse Car</button></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperCarousel;