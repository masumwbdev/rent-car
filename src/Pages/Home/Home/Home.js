import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import TopNav from '../../Shared/TopNav/TopNav';

const Home = () => {
    return (
        <div>
            <TopNav />
            <Navbar />
            <h1>This is home</h1>
        </div>
    );
};

export default Home;