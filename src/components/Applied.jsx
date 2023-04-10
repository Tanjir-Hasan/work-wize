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
            <div className='relative'>
                <img src="../../public/images/grunge_detailed_dusty_overlay_texture_2804.jpg" alt="" className='w-full h-48 object-cover opacity-50 mb-20' />
                <h1 className='text-3xl font-bold text-center absolute inset-0 flex justify-center items-center h-full'>Applied Jobs</h1>
            </div>

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