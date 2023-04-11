import React from 'react';

const Footer = () => {
    return (
        <div className='text-gray-400 bg-black w-full mt-16 p-20'>
            <div className='grid lg:grid-cols-5 gap-5 '>
                <div>
                    <h3 className='text-slate-50 font-bold'>Work Wise</h3>
                    <p>We believe that finding the right job should be easy, efficient, and stress-free.</p>
                    <div className='flex gap-3 mt-2'>
                        <img src="../../public/images/facebook.png" className='h-10' alt="" />
                        <img src="../../public/images/twitter.png" alt="" className='h-10' />
                        <img src="../../public/images/youtube.png" alt="" className='h-10' />
                    </div>
                </div>
                <div>
                    <h3 className='text-slate-50 font-bold'>Company</h3>
                    <p>About us</p>
                    <p>Work</p>
                    <p>Latest news</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h3 className='text-slate-50 font-bold'>Product</h3>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div>
                    <h3 className='text-slate-50 font-bold'>Support</h3>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <hr className='my-6' />
            <div className='lg:flex justify-between text-gray-500'>
                <p>@2023 Work Wise. All Rights Reserved</p>
                <p>Powered by Work Wise</p>
            </div>
        </div>
    );
};

export default Footer;