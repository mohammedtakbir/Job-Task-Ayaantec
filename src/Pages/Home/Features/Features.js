import React from 'react';
import Feature from './Feature';
import dollar from '../../../asset/icons/usd-square.svg';
import userPlus from '../../../asset/icons/user-add.svg';
import users from '../../../asset/icons/users.svg';
import dollar2 from '../../../asset/icons/usd-square.svg';

const Features = () => {

    const features = [
        {
            icon: dollar,
            bg: '#FF3A6E',
            title: 'Accounting',
            description: 'Accounting is the process of recording financial transactions pertaining to a business. The accounting process includes summarizing, analyzing, and reporting these transactions to oversight agencies, regulators, and tax collection entities'
        },
        {
            icon: userPlus,
            bg: '#6FD943',
            title: 'HRM',
            description: 'HRM software is used to manage employee payroll, recruitment, benefits, training, talent management, employee engagement, and employee attendance, HRMS software helps HR professionals manage the modern workforce'
        },
        {
            icon: users,
            bg: '#FFA21D',
            title: 'CRM',
            description: 'A CRM system helps businesses keep customer contact details up to date, track every customer interaction, and manage customer accounts. It is designed to help businesses improve customer relationships and also Customer Lifetime Value'
        },
        {
            icon: dollar2,
            bg: '#FF3A6E',
            title: 'POS',
            description: 'POS system is the spot where your customer makes the payment for goods or services that are offered by your company. POS systems are systems that enable the business transaction between the client and the company to be completed'
        },
    ]

    return (
        <section className='container mx-auto mt-[40px] px-5'>
            <div className='text-center mb-[50px]'>
                <h2 className='text-[28px] font-semibold mb-2'>Features</h2>
                <h3 className='text-[20px] font-semibold'>SME Business Solution System</h3>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                {
                    features.map((feature, i) =>
                        <Feature key={i} feature={feature} />
                    )
                }
            </div>
            <div className='flex justify-center mt-[45px]'>
                <button type="button" class="text-white bg-[#1A3080] hover:bg-[#1c2c6a] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2">Buy Now</button>
            </div>
        </section>
    );
};

export default Features;