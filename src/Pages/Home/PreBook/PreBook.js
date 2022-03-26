import React from 'react';
import './PreBook.css'

const PreBook = () => {
    return (
        <div className='mb-5'>
            <div className='width-control pre-book'>
                <h1 className='text-center text-light pt-3 pb-3'>Pre Book</h1>
                <form className='row width-control'>
                    <input className='col-sm-6 col-md-4 col-lg-2' type="text" placeholder='model' />
                    <input className='col-sm-6 col-md-4 col-lg-2' type="text" placeholder='pick up location' />
                    <input className='col-sm-6 col-md-4 col-lg-2' type="text" placeholder='pick up date' />
                    <input className='col-sm-6 col-md-4 col-lg-2' type="text" placeholder='drop off location' />
                    <input className='col-sm-6 col-md-4 col-lg-2' type="drop of date" placeholder='drop of location' />
                    <input className='submit-btn hvr-ripple-out col-sm-6 col-md-4 col-lg-2' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default PreBook;