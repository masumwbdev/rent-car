import React from 'react';
import BottomFooter from '../../Shared/Footer/BottomFooter/BottomFooter';
import TopFooter from '../../Shared/Footer/TopFooter/TopFooter';
import Navbar from '../../Shared/Navbar/Navbar';
import TopNav from '../../Shared/TopNav/TopNav';
import Banner from '../Banner/Banner';
import BanSvg from '../BanSvg/BanSvg';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import DisplayCar from '../DisplayCar/DisplayCar';
import HomeServices from '../HomeServices/HomeServices';
import PreBook from '../PreBook/PreBook';
import Reviews from '../Reviews/Reviews';
import ScrollSection from '../ScrollSection/ScrollSection';
import SwiperCarousel from '../SwiperCarousel/SwiperCarousel';

const Home = () => {
    return (
        <div>
            <TopNav />
            <Navbar />
            <Banner />
            <BanSvg />
            <PreBook />
            <DisplayCar />
            <HomeServices />
            <SwiperCarousel />
            <ScrollSection />
            <DiscountOffer />
            <Reviews />
            <TopFooter />
            <BottomFooter />
        </div>
    );
};

export default Home;