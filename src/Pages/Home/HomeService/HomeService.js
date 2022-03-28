import React from 'react';
import { Link } from 'react-router-dom';
import './HomeService.css'

const HomeService = ({ homeService }) => {
    const { _id, carName, imgURL, cost, regularCost, oil, transmission, passengers } = homeService;
    return (
        <div class="col-sm-12 col-md-6 col-lg-3 home-service">
            <div class="card h-100 border-0 p-2 hvr-underline-from-left">
                <img src={imgURL} class="card-img-top" alt="..." />
                <div class="card-body">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='serv-cost'>
                            <h6 class="card-title">{carName}</h6>
                            <del className='del-cost'>{regularCost}$</del>
                            <span>{cost}$</span>
                        </div>
                        <div>
                            <Link to={`/booking/${_id}`}><button className='hvr-sweep-to-right hvr-ripple-out'>
                                Book now
                            </button></Link>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between home-service-card-footer'>
                    <div>
                        <span>{oil} km/ltr <i class="fa-solid fa-cart-flatbed-suitcase me-3"></i> </span>
                        <span>{passengers} pasn <i class="fa-solid fa-people-robbery"></i> </span>
                    </div>
                    <div>
                        <span>{transmission} <i class="fa-solid fa-fan"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;