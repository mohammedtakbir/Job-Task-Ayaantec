import React from 'react';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import Features from '../Features/Features';
import KeyFeatures from '../KeyFeatures/KeyFeatures';
import Package from '../Package/Package';

const Home = () => {
    return (
        <>
            <Banner />
            <Features />
            <KeyFeatures />
            <Package />
            <FAQ />
        </>
    );
};

export default Home;