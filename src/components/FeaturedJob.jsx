import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const FeaturedJob = ({ data }) => {
    const { id, logo, job_title, company_name, job_status, job_time, location, salary } = data;

    return (
        <div className='border border-gray-300 w-full p-8 rounded-lg overflow-hidden'>
            <img src={logo} alt="" className="w-36 h-16" />
            <h1 className='text-xl my-2'>{job_title}</h1>
            <p className=''>{company_name}</p>
            <div className='lg:flex gap-4 my-2'>
                <p className='text-purple-500 border-2 border-indigo-400 p-2 mb-1'>{job_status}</p>
                <p className='text-purple-500 border-2 border-indigo-400 p-2 mb-1'>{job_time}</p>
            </div>
            <div className='lg:flex gap-5 mb-5'>
                <span className='flex mb-2'>
                    <MapPinIcon className="h-6 w-6 text-zinc-500" />
                    <p className='ml-2'>{location}</p>
                </span>
                <span className='flex'>
                    <CurrencyDollarIcon className="h-6 w-6 text-zinc-500" />
                    <p className='ml-2'>{salary}</p>
                </span>
            </div>
            <Link to="" className='text-white bg-gradient-to-r from-indigo-400 to-purple-500 mt-1 p-3 rounded-md'>View Details</Link>
        </div>
    );
};

export default FeaturedJob;
