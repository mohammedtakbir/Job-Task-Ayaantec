import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <section className='bg-[#1C2444] py-3'>
            <nav className='container mx-auto flex justify-between items-center relative'>
                <div className="logo ml-2">
                    <img src="https://atlerp.xyz/storage/uploads/logo/logo-light.png" className='lg:h-[50px] h-[40px]' alt="" />
                </div>
                <ul className={`lg:pt-0 pt-5 duration-200 text-white lg:flex lg:static absolute z-[100] bg-[#1C2444] lg:w-auto w-full ${open ? 'top-[52px]' : 'top-[-320px]'}`}>
                    <li className='mx-4 text-sm lg:text-left text-center'>
                        <Link to='/' className='hover:text-[#29abe2] duration-100'>Home</Link>
                    </li>
                    <li className='mx-4 text-sm lg:text-left text-center lg:my-0 my-4'>
                        <Link to='/' className='hover:text-[#29abe2] duration-100'>Features</Link>
                    </li>
                    <li className='mx-4 text-sm lg:text-left text-center lg:my-0 my-4'>
                        <Link to='/' className='hover:text-[#29abe2] duration-100'>Layouts</Link>
                    </li>
                    <li className='mx-4 text-sm lg:text-left text-center lg:my-0 my-4'>
                        <Link to='/' className='hover:text-[#29abe2] duration-100'>Client Review</Link>
                    </li>
                    <li className='mx-4 text-sm lg:text-left text-center lg:my-0 my-4'>
                        <Link to='/' className='hover:text-[#29abe2] duration-100'>Pricing</Link>
                    </li>
                    <li className='mx-4 text-sm lg:text-left text-center lg:my-0 my-4'>
                        <Link to='/' className='hover:text-[#29abe2] duration-100'>FAQ</Link>
                    </li>
                    <li className='mx-4 text-sm lg:text-left text-center lg:my-0 my-4'>
                        <Link to='/' className='hover:text-[#29abe2] duration-100'>Contact Us</Link>
                    </li>
                </ul>
                <div className={`text-white duration-200 lg:text-left text-center lg:pb-0 pb-5 text-sm lg:flex lg:static absolute z-[100] lg:w-auto w-full bg-[#1C2444] ${open ? 'top-[320px]' : 'top-[-320px]'}`}>
                    <button className='mr-3'><FaRegUser className='inline' /> Login</button>
                    <button><FaRegUser className='inline' /> Register</button>
                </div>
                <div className='text-white text-3xl cursor-pointer lg:hidden mr-2' onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <HiXMark />
                            :
                            <HiBars3 />
                    }
                </div>
            </nav>
        </section>
    );
};

export default Navbar;