import React from 'react';
import Navber from './Home/Navber';
import App from '../App';
import Banner from './Home/Banner';
import Footer from './Footer';
import LatestNews from './Home/LatestNews';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <App></App>
            <Banner></Banner>
            <LatestNews></LatestNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;