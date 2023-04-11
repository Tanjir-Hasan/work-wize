import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const Applied = () => {
    const allJobs = useLoaderData();

    const applied = JSON.parse(localStorage.getItem("jobs")) || [];

    const appliedID = applied.map(singleId => singleId.id);

    const matchedJobs = allJobs.filter(job => appliedID.includes(job.id));

    return (

        < div >
            <h1 className='text-3xl font-bold text-center flex justify-center items-center h-full mb-8 py-12 bg-gradient-to-r from-indigo-50 to-purple-50'>Applied Jobs</h1>
            {
                matchedJobs.map(job => <div key={job.id}>
                    <div className='border border-gray-300 rounded-lg w-3/4 p-4 overflow-hidden mx-auto mb-6'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <div>
                                    <img src={job.logo} alt="image" className='w-48 h-32 mr-6' />
                                </div>
                                <div>
                                    <h1 className='text-xl my-2'>{job.job_title}</h1>
                                    <p className=''>{job.company_name}</p>
                                    <div className='lg:flex gap-4 my-2'>
                                        <p className='text-purple-500 border-2 border-indigo-400 p-2 mb-1'>{job.job_status}</p>
                                        <p className='text-purple-500 border-2 border-indigo-400 p-2 mb-1'>{job.job_time}</p>
                                    </div>
                                    <div className='lg:flex gap-5'>
                                        <span className='flex mb-2'>
                                            <MapPinIcon className="h-6 w-6 text-zinc-500" />
                                            <p className='ml-2'>{job.location}</p>
                                        </span>
                                        <span className='flex'>
                                            <CurrencyDollarIcon className="h-6 w-6 text-zinc-500" />
                                            <p className='ml-2'>{job.salary}</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to={`/job/${job.id}`} className='text-white bg-gradient-to-r from-indigo-400 to-purple-500 mt-1 p-3 rounded-md'>View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div >
    );
};

export default Applied;