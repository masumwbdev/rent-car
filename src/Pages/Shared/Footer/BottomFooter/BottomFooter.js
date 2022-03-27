import React from 'react';
import './BottomFooter.css'

const BottomFooter = () => {
    return (
        <div className='bottom-footer'>
            <div className="width-control d-lg-flex justify-content-between">
                <div>
                    <span>Etalon by KeyDesign. All rights reserved.</span>
                </div>
                <div className='d-lg-flex'>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms and condition</a>
                </div>
            </div>
        </div>
    );
};

export default BottomFooter;