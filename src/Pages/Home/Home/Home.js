import React from 'react';
import BottomFooter from '../../Shared/Footer/BottomFooter/BottomFooter';
import TopFooter from '../../Shared/Footer/TopFooter/TopFooter';
import Navbar from '../../Shared/Navbar/Navbar';
import TopNav from '../../Shared/TopNav/TopNav';
import Banner from '../Banner/Banner';
import BanSvg from '../BanSvg/BanSvg';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import DisplayCar from '../DisplayCar/DisplayCar';
import PreBook from '../PreBook/PreBook';
import ScrollSection from '../ScrollSection/ScrollSection';

const Home = () => {
    return (
        <div>
            <TopNav />
            <Navbar />
            <Banner />
            <BanSvg />
            <PreBook />
            <DisplayCar />
            <ScrollSection />
            <DiscountOffer />
            <TopFooter />
            <BottomFooter />
        </div>
    );
};

export default Home;