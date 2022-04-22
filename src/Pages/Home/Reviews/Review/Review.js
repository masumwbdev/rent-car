import React from 'react';
import user from '../../../../images/user.png'

const Review = ({ review }) => {
    const { name, rating, description } = review;
    return (
        <div>
            <div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <div className='row'>
                                <div className='col-sm-12 col-md-6'>
                                    <img className='w-50' src={user} alt="" />
                                </div>
                                <div className='col-sm-12 col-md-6'>
                                    <h5 class="card-title">{name}</h5>
                                    <span>{rating}</span> <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <p class="card-text mt-3">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;