import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className="not-found">
            <i class="fa-solid fa-face-sad-tear not-found-icon"></i>
            <h3 className='mt-4'>Opps!! Page not found</h3>
            <Link to="/"><button>Back Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;