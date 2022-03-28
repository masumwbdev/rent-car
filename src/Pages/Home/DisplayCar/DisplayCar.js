import React from 'react';
import one from '../../../images/car/car1.png'
import two from '../../../images/car/car2.png'
import three from '../../../images/car/car3.png'
import './DisplayCar.css'

const DisplayCar = () => {
    return (
        <div className='display-car'>
            <div className="width-control row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div data-aos="fade-up" data-aos-duration="1500"
                        data-aos-anchor-placement="top-bottom" className="picup hvr-underline-from-left">
                        <i class="fas fa-truck-pickup"></i>
                        <h5>Pickup & delivery</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quae voluptatum soluta!</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000"
                        data-aos-anchor-placement="top-bottom" className="picup hvr-underline-from-left">
                        <i class="fas fa-gas-pump"></i>
                        <h5>Fuel plans</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quae voluptatum soluta!</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div data-aos="zoom-out" data-aos-duration="2000" class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={one} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={two} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={three} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div data-aos="fade-up" data-aos-duration="1500"
                        data-aos-anchor-placement="top-bottom" className="left-disp hvr-underline-from-left">
                        <i class="fas fa-user-injured"></i>
                        <h5>Personal Driver</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quae voluptatum soluta!</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000"
                        data-aos-anchor-placement="top-bottom" className="left-disp hvr-underline-from-left">
                        <i class="far fa-compass"></i>
                        <h5>Car Navigation</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quae voluptatum soluta!</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DisplayCar;