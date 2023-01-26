import React from 'react';
import './banner.css';
import { FaGlobe, FaShoppingBag } from "react-icons/fa";

const Banner = () => {
    return (
        <section className='bg-[#0279B4] custom-skew relative'>
            <div className='container mx-auto md:pt-[70px] sm:pt-[50px] pt-[30px] md:pb-0 sm:pb-[50px] pb-[30px] px-5'>
                <div className='md:flex items-center gap-5'>
                    <div className='text-white md:w-[40%] w-full relative z-50'>
                        <h2 className='text-[42px] font-semibold mb-[12px]'>ATL-ERP</h2>
                        <h3 className='md:text-[25px] text-[20px] font-semibold leading-[33px] mb-[24px]'>Accounting System,Employee Management,HRM Management,Attendance,Leave Management,Project Management</h3>
                        <p className='text-[14px] mb-[24px]'>A software with which to expand your business</p>
                        <div className='flex gap-3 md:mb-0 mb-[30px]'>
                            <button className='flex items-center bg-white text-[#0279b4] hover:text-[#293240] duration-200 text-sm font-medium px-[19px] py-[9px] rounded-md'>
                                <FaGlobe className='inline mr-2 text-lg' />
                                Live Demo
                            </button>
                            <button className='flex items-center border bg-transparent border-white hover:text-[#293240] duration-200 px-[19px] py-[9px] rounded-md text-sm font-medium'>
                                <FaShoppingBag className='inline mr-2 text-lg' />
                                Buy Bow
                            </button>
                        </div>
                    </div>
                    <div className='md:w-[60%] w-full relative z-50'>
                        <img src="https://atlerp.xyz/landing/images/banner.png" className=' border-8 border-[#293240] rounded-[20px]' alt="" />
                    </div>
                </div>
            </div>
            <div className='relative 2xl:mt-[-155px] xl:mt-[-70px] lg:mt-[-50px] md:mt-[-20px] ml-[100px] md:block hidden'>
                <img src="https://atlerp.xyz/landing/images/banner.svg" alt="" />
            </div>
        </section>
    );
};

export default Banner;