import React from 'react';
import './BottomFooter.css'

const BottomFooter = () => {
    return (
        <div className='bottom-footer'>
            <div className="width-control">
                <div>
                    <span>Etalon by KeyDesign. All rights reserved.</span>
                </div>
                <div>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms and condition</a>
                </div>
            </div>
        </div>
    );
};

export default BottomFooter;