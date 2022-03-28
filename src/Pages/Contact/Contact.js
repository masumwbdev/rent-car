import React from 'react';
import BottomFooter from '../Shared/Footer/BottomFooter/BottomFooter';
import TopFooter from '../Shared/Footer/TopFooter/TopFooter';
import Navbar from '../Shared/Navbar/Navbar';
import TopNav from '../Shared/TopNav/TopNav';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <TopNav />
            <Navbar />
            <div className="contact-container">
                <div className="width-control">
                    <h1 className='text-light'>Contact Us</h1>
                </div>
            </div>
            <div className="width-control row mt-4">
                <div className="col-sm-12 col-md-6 contact-addr">
                    <h2>HOW TO FIND US</h2>
                    <div>
                        <i class="fas fa-map-marker-alt mt-3"></i><span>39 N.K. Street, New York</span>
                    </div>
                    <div>
                        <i class="fas fa-phone-alt mt-3"></i><span>+1457927003</span>
                    </div>
                    <div>
                        <i class="far fa-envelope mt-3"></i><span>rentcr@nk.com</span>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 contact-form">
                    <h1>Leave a message</h1>
                    <form>
                        <input type="text" placeholder='Enter your name' /><br />
                        <input type="text" placeholder='Enter your email' /><br />
                        <input type="text" placeholder='Enter your number' /><br />
                        <textarea placeholder='Your message' cols="30" rows="7"></textarea><br />
                        <button className='hvr-pop contact-submit-btn' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <TopFooter />
            <BottomFooter />
        </div>
    );
};

export default Contact;