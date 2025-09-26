import React from 'react';
import Navber from './Home/Navber';
import App from '../App';
import Banner from './Home/Banner';
import Footer from './Footer';
import LatestNews from './Home/LatestNews';
import Storylines from './Home/Storylines';
import Events from './Home/Events';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <App></App>
            <Banner></Banner>
            <LatestNews></LatestNews>
            <Storylines></Storylines>
            <Events></Events>
            <Footer></Footer>
        </div>
    );
};

export default Home;