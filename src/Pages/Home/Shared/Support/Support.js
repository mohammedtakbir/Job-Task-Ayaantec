import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

const Support = () => {
    return (
        <section className='bg-[#252E3A] py-[5px]'>
            <div className='container mx-auto'>
                <div className='flex justify-between text-sm text-white'>
                    <p><FaPhoneAlt className='inline mr-1' /> Support +8801836314043</p>
                    <p>Language</p>
                </div>
            </div>
        </section>
    );
};

export default Support;