import React from 'react';
import AppDownload from '../AppDownload/AppDownload';
import Cover from '../Cover/Cover';
import Services from '../Services/Services';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div id="home">
            <Cover></Cover>
            <AppDownload/>
            <Services/>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;