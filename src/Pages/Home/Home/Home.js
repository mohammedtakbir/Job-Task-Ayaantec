import React from 'react';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import Features from '../Features/Features';
import Package from '../Package/Package';

const Home = () => {
    return (
        <>
            <Banner />
            <Features />
            <Package />
            <FAQ />
        </>
    );
};

export default Home;