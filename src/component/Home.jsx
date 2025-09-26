import React from 'react';
import Navber from './Home/Navber';
import App from '../App';
import Banner from './Home/Banner';
import Footer from './Footer';
import LatestNews from './Home/LatestNews';
import Storylines from './Home/Storylines';
import Events from './Home/Events';
import NewsletterSubscription from './Home/NewsletterSubscription';
import Newsletter from './Home/NewsletterSubscription';
import Startups from './Home/Startups';
import RoadDisrupt from './Home/RoadDisrupt';
import AI from './Home/AI';
import Security from './Home/Security';
import APP from './Home/APP.JSX';
import Transportation from './Home/Transportation';
import Video from './Home/Video';
import Venture from './Home/Venture';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <App></App>
            <Banner></Banner>
            <LatestNews></LatestNews>
            <Storylines></Storylines>
            <Events></Events>
            <Newsletter></Newsletter>
            <RoadDisrupt></RoadDisrupt>
            <AI></AI>
            <Startups></Startups>
            <Video></Video>
            <Security></Security>
            <Venture></Venture>
            <APP></APP>
            <Transportation></Transportation>
            <Footer></Footer>
        </div>
    );
};

export default Home;