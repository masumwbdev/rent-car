import React from 'react';
import disOne from '../../../images/discar/disone.png'
import disTwo from '../../../images/discar/distwo.png'
import disThree from '../../../images/discar/disthree.png'
import {Link} from 'react-router-dom';
import './DiscountOffer.css'

const DiscountOffer = () => {
    return (
        <div className='discount-container'>
            <h1 data-aos="zoom-in" className='text-center'>Discount offers!</h1>
            <div class="row row-cols-1 row-cols-md-3 width-control g-4">
                <div class="col">
                    <div data-aos="zoom-in-up" data-aos-duration="2000" class="card h-100 discount">
                        <h5 className='mt-3'>Budget</h5>
                        <div className="text-center">
                            <img src={disThree} alt="" />
                        </div>
                        <br />
                        <span><del>$35</del></span>
                        <h1>$20/d</h1>
                        <p><i class="fa-solid fa-check"></i> Free vehicle delivery</p>
                        <p><i class="fa-solid fa-check"></i> Car navigation system</p>
                        <p><i class="fa-solid fa-check"></i> Standard fuel plan</p>
                        <p><i class="fa-solid fa-check"></i> Breakdown assistance</p>
                        <p><i class="fa-solid fa-check"></i> Full insurance</p>
                        <hr />
                        <Link to="/services"><button>Get Started</button></Link>
                    </div>
                </div>
                <div class="col">
                    <div data-aos="zoom-in-up" data-aos-duration="2000" class="card h-100 discount">
                    <h5 className='mt-3'>Business</h5>
                        <div className="text-center">
                            <img src={disTwo} alt="" />
                        </div>
                        <br />
                        <span><del>$40</del></span>
                        <h1>$30/d</h1>
                        <p><i class="fa-solid fa-check"></i> Free vehicle delivery</p>
                        <p><i class="fa-solid fa-check"></i> Car navigation system</p>
                        <p><i class="fa-solid fa-check"></i> Standard fuel plan</p>
                        <p><i class="fa-solid fa-check"></i> Breakdown assistance</p>
                        <p><i class="fa-solid fa-check"></i> Full insurance</p>
                        <hr />
                        <Link to="/services"><button>Get Started</button></Link>
                    </div>
                </div>
                <div class="col">
                    <div data-aos="zoom-in-up" data-aos-duration="2000" class="card h-100 discount discount-last">
                    <h5 className='mt-3'>Enterprice</h5>
                        <div className="text-center">
                            <img className='w-75' src={disOne} alt="" />
                        </div>
                        <br />
                        <span><del>$55</del></span>
                        <h1>$40/d</h1>
                        <p><i class="fa-solid fa-check"></i> Free vehicle delivery</p>
                        <p><i class="fa-solid fa-check"></i> Car navigation system</p>
                        <p><i class="fa-solid fa-check"></i> Standard fuel plan</p>
                        <p><i class="fa-solid fa-check"></i> Breakdown assistance</p>
                        <p><i class="fa-solid fa-check"></i> Full insurance</p>
                        <hr />
                        <Link to="/services"><button>Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountOffer;


