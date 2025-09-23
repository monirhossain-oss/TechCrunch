import React from 'react';
import Navber from './Home/Navber';
import App from '../App';
import Banner from './Home/Banner';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <App></App>
            <Banner></Banner>
        </div>
    );
};

export default Home;