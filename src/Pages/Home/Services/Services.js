import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import TopNav from '../../Shared/TopNav/TopNav';
import BottomFooter from '../../Shared/Footer/BottomFooter/BottomFooter';
import TopFooter from '../../Shared/Footer/TopFooter/TopFooter';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <TopNav />
            <Navbar />
            <div class="row mt-5 mb-5 width-control g-3">
                {
                    services.map(service => <Service
                        service={service}
                    ></Service>)
                }
            </div>
            <TopFooter />
            <BottomFooter />
        </div>
    );
};

export default Services;