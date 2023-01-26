import React from 'react';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import './kewFeatures.modules.css';

const KeyFeatures = () => {

    const [feature, setFeature] = useState('Customer');
    const handleGetFeature = (feature) => {
        setFeature(feature);
    }

    return (
        <section className='relative'>
            <div className='bg-[#0279B4] custom-skew md:py-[150px] py-[100px] mt-[50px]'>
                <div className='text-center text-white px-5'>
                    <h2 className='md:text-[35px] text-[28px] font-semibold'>Home Key Features</h2>
                    <p className='text-[20px]'>New integrations and features added everyday</p>
                </div>
                <div className='flex justify-center mt-10 sm:gap-5 gap-2 px-5'>
                    <button
                        onClick={(e) => handleGetFeature(e.target.innerText)}
                        className={`border rounded-lg border-white px-[19px] py-[9px] 
                    text-sm font-medium text-white ${feature === 'Customer' && 'text-black bg-white'}`}
                    >
                        Customer
                    </button>
                    <button
                        onClick={(e) => handleGetFeature(e.target.innerText)}
                        className={`border rounded-lg border-white px-[19px] py-[9px] 
                text-sm font-medium text-white ${feature === 'Invoice' && 'text-black bg-white'}`}
                    >
                        Invoice
                    </button>
                    <button
                        onClick={(e) => handleGetFeature(e.target.innerText)}
                        className={`border rounded-lg border-white px-[19px] py-[9px] 
                text-sm font-medium text-white ${feature === 'Reporting' && 'text-black bg-white'}`}
                    >
                        Reporting
                    </button>
                </div>
                <div className='container mx-auto px-5'>
                    {
                        feature === 'Customer' &&
                        <>
                            <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 mt-14 items-center'>
                                <div className=''>
                                    <img src="https://atlerp.xyz/landing/images/report.png" className='w-full' alt="" />
                                </div>
                                <div>
                                    <h2 className='font-semibold mb-6 text-white md:text-4xl text-3xl'>Office Management</h2>
                                    <h3 className='text-white md:text-[28px] text-[20px] md:leading-[40px] leading-[30px] font-semibold mb-6'>All In One Business Solution With Account, HRM, Lead Management & CRM</h3>
                                    <button
                                        type="button"
                                        class="text-white bg-[#1A3080] hover:bg-[#1c2c6a] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2"
                                    >
                                        <FaShoppingCart className='inline mr-2 text-xl' />
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </>
                    }
                    {
                        feature === 'Invoice' &&
                        <>
                            <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 mt-14 items-center'>
                                <div className=''>
                                    <img src="https://atlerp.xyz/landing/images/overview.png" className='w-full' alt="" />
                                </div>
                                <div>
                                    <h2 className='font-semibold mb-6 text-white md:text-4xl text-3xl'>Invoice Management</h2>
                                    <h3 className='text-white md:text-[28px] text-[20px] md:leading-[40px] leading-[30px] font-semibold mb-6'>All In One Business Solution With Account, HRM, Lead Management & CRM</h3>
                                    <button
                                        type="button"
                                        class="text-white bg-[#1A3080] hover:bg-[#1c2c6a] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2"
                                    >
                                        <FaShoppingCart className='inline mr-2 text-xl' />
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </>
                    }
                    {
                        feature === 'Reporting' &&
                        <>
                            <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 mt-14 items-center'>
                                <div className=''>
                                    <img src="https://atlerp.xyz/landing/images/hrm.png" className='w-full' alt="" />
                                </div>
                                <div>
                                    <h2 className='font-semibold mb-6 text-white md:text-4xl text-3xl'>Comprehensive Report</h2>
                                    <h3 className='text-white md:text-[28px] text-[20px] md:leading-[40px] leading-[30px] font-semibold mb-6'>All In One Business ERP With Project, Account, HRM, CRM</h3>
                                    <button
                                        type="button"
                                        class="text-white bg-[#1A3080] hover:bg-[#1c2c6a] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2"
                                    >
                                        <FaShoppingCart className='inline mr-2 text-xl' />
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;