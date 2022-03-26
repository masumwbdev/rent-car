import React from 'react';
import './TopNav.css'

const TopNav = () => {
    return (
        <div className="top-nav-color">
            <div className='width-control'>
                <div className="top-nav d-lg-flex justify-content-between">
                    <div className="top-nav-contact">
                        <i class="fas fa-map-marker-alt"></i><span>39 N.K. Street, New York</span>
                        <i class="fas fa-phone-alt"></i><span>+1457927003</span>
                        <i class="far fa-envelope"></i><span>rentcr@nk.com</span>
                    </div>
                    <div className="top-nav-icons">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-yahoo"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-pinterest-p"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;