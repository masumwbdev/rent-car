import React from 'react';
import './TopFooter.css'

const TopFooter = () => {
    return (
        <div className='top-footer'>
            <div className="width-control row">
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta debitis, quibusdam nulla consectetur dolor porro quam quae est odio vel laborum repellat.</p>
                    <div>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-yahoo"></i>
                        <i class="fab fa-twitter"></i>
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
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Pickup and delivery</a><br />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                <h4>Additional links</h4>
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Pickup and delivery</a><br />
                    <a href="#">Pickup and delivery</a><br />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">

                </div>
            </div>
        </div>
    );
};

export default TopFooter;