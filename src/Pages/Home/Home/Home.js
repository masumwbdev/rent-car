import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import TopNav from '../../Shared/TopNav/TopNav';
import Banner from '../Banner/Banner';
import BanSvg from '../BanSvg/BanSvg';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import DisplayCar from '../DisplayCar/DisplayCar';
import PreBook from '../PreBook/PreBook';

const Home = () => {
    return (
        <div>
            <TopNav />
            <Navbar />
            <Banner />
            <BanSvg />
            <PreBook />
            <DisplayCar />
            <DiscountOffer />
        </div>
    );
};

export default Home;