import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import Navbar from '../Pages/Home/Shared/Navbar/Navbar';
import Support from '../Pages/Home/Shared/Support/Support';

const Main = () => {
    return (
        <>
            {/* <Support /> */}
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;