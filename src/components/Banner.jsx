import React from 'react';
import JobsCategory from './JobsCategory';
import FeaturedJob from './FeaturedJob';
import FeaturedJobs from './FeaturedJobs';
import Footer from './Footer';

const Banner = () => {
    return (
        <>
            <div className=' bg-gradient-to-r from-indigo-50 to-purple-50'>
                <div className='lg:flex justify-between items-center mx-auto w-10/12'>
                    <div className='lg:w-3/6'>
                        <h1 className='text-4xl font-bold'>Find Your Next
                            <br />
                            <span className='text-violet-400'>Career Move</span></h1>
                        <p className='text-zinc-500 my-4'>Welcome to Work Wise, the job site that helps you find your next career move. At Work Wise, we're dedicated to connecting job seekers with top employers from around the world. We believe that finding the right job should be easy, efficient, and stress-free, and we've designed our platform to make that a reality.</p>
                        <button className='text-white bg-gradient-to-r from-indigo-400 to-purple-500 mt-4 p-3 rounded-md'>Get Started</button>
                    </div>
                    <img src="banner.png" alt="banner-img" className='h-96' />
                </div>
            </div>
            <JobsCategory></JobsCategory>
            <FeaturedJobs></FeaturedJobs>
            <Footer></Footer>
        </>
    );
};

export default Banner;