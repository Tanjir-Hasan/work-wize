import React from 'react';

const Banner = () => {
    return (
        <div className='lg:flex justify-between items-center mx-auto w-10/12'>
            <div className='w-3/6'>
                <h1 className='text-4xl font-bold'>Find Your Next 
                <br />
                <span className='text-violet-400'>Career Move</span></h1>
                <p className='text-zinc-500 my-4'>Welcome to Work Wise, the job site that helps you find your next career move. At Work Wise, we're dedicated to connecting job seekers with top employers from around the world. We believe that finding the right job should be easy, efficient, and stress-free, and we've designed our platform to make that a reality.</p>
                <button className=' text-white bg-violet-500 px-3 py-2 rounded-md'>Get Started</button>
            </div>          
            <img src="../../public/images/banner.png" alt="banner-img" className='h-96' />
        </div>
    );
};

export default Banner;