import React from 'react';

const Feature = ({ feature }) => {

    const { icon, title, description, bg } = feature;
    console.log(bg)

    return (
        <>
            <div className="block py-[40px] px-[25px] bg-white border border-gray-200 rounded-lg shadow-lg text-center">
                <div className={`h-[130px] w-[130px] bg-[${bg}] rounded-[50px] flex items-center justify-center mx-auto`}>
                    <img src={icon} alt="" className='w-[40px]' />
                </div>
                <h2 className='text-[20px] font-semibold mt-7 mb-4'>{title}</h2>
                <p className='text-[14px]'>{description}</p>
            </div>
        </>
    );
};

export default Feature;