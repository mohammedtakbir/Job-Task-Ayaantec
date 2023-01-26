import React from 'react';
import PackageCart from './PackageCart';

const Package = () => {

    const packages = [
        'Admin Dashboard',
        'Accounting',
        'HRM',
        'Project System',
        'CRM System',
        'User Management',
        'Product system',
        'POS System',
        'Support System',
        'Zoom Meeting',
        'Messenger',
        'System setup'
    ]

    return (
        <section className='mt-10'>
            <div className='text-center mb-[50px]'>
                <h2 className='text-[28px] font-semibold mb-2'>Complete Package</h2>
                <h3 className='text-[20px] font-semibold'>Every Single Module you Want Are Available</h3>
            </div>
            <div className='container mx-auto mb-[-20%] px-5'>
                <img src="https://atlerp.xyz/landing/images/module_img.png" alt="" />
            </div>
            <div className='bg-[#E2E2E2] pt-[25%] pb-[30px]'>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 container mx-auto pt-[30px] px-5'>
                    {
                        packages.map((p, i) => <PackageCart key={i} p={p} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Package;