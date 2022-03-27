import React from 'react';
import './TopFooter.css'

const TopFooter = () => {
    return (
        <div className='top-footer'>
            <div className="width-control top-address row">
                <div className="col-sm-12 col-md-6 col-lg-4 d-lg-flex justify-content-center align-items-center">
                    <div>
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <span className='contact-way'>Address</span> <br />
                        <span>39 N.K. Street, New York</span>
                    </div>

                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 d-lg-flex justify-content-center align-items-center">
                    <div>
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <div>
                        <span className='contact-way'>Phone</span> <br />
                        <span>+1457927003</span>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 d-lg-flex justify-content-center align-items-center">
                    <div>
                        <i class="far fa-envelope"></i>
                    </div>
                    <div>
                        <span className='contact-way'>Email</span> <br />
                        <span>rentcr@nk.com</span>
                    </div>
                </div>
            </div>
            <div className="width-control row">
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <h4 className='footer-site-name'>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta debitis, quibusdam nulla consectetur dolor porro quam quae est odio vel laborum repellat.</p>
                    <div className='footer-all-icons'>
                        <i class="fab fa-facebook-f me-3"></i>
                        <i class="fab fa-yahoo me-3"></i>
                        <i class="fab fa-twitter me-3"></i>
                        <i class="fab fa-pinterest-p"></i>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <h4>Cars</h4>
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Pickup and delivery</a><br />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <h4>Services</h4>
                    <a href="#">Breakdown assistance</a><br />
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Personal driver</a><br />
                    <a href="#">Car navigation</a><br />
                    <a href="#">Fuel plans</a><br />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <h4>Additional links</h4>
                    <a href="#">About us</a><br />
                    <a href="#">Terms and conditions</a><br />
                    <a href="#">Privacy policy</a><br />
                    <a href="#">News</a><br />
                    <a href="#">Contact us</a><br />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">

                </div>
            </div>
        </div>
    );
};

export default TopFooter;