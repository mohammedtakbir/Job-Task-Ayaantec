import React from 'react';
import './package.modules.css';
import { BsInfoCircle } from "react-icons/bs";

const PackageCart = ({ p }) => {

    return (
        <div className='custom-hover block py-[50px] px-[25px] bg-white rounded-xl shadow-lg text-center duration-200'>
            <div className='bg-[#87e9f8cb] w-[60px] h-[60px] rounded-full mx-auto flex items-center'>
                <BsInfoCircle className='mx-auto w-6 h-6 icon' />
            </div>
            <h2 className='text-[24px] font-semibold mt-2 h2'>{p}</h2>
        </div>
    );
};

export default PackageCart;