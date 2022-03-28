import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';
import './HomeServices.css'

const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setHomeServices(data.slice(0, 8)))
    }, [])

    return (
        <div className="home-services-container">
            <div class="row mt-5 mb-5 width-control g-3">
                {
                    homeServices.map(homeService => <HomeService
                        homeService={homeService}
                    >
                    </HomeService>)
                }
            </div>
        </div>
    );
};

export default HomeServices;