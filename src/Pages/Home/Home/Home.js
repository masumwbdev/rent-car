import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import TopNav from '../../Shared/TopNav/TopNav';
import Banner from '../Banner/Banner';
import BanSvg from '../BanSvg/BanSvg';
import PreBook from '../PreBook/PreBook';

const Home = () => {
    return (
        <div>
            <TopNav />
            <Navbar />
            <Banner />
            <BanSvg />
            <PreBook />
        </div>
    );
};

export default Home;