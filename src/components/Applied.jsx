import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const Applied = () => {
    const allJobs = useLoaderData();

    const applied = JSON.parse(localStorage.getItem("jobs")) || [];

    const appliedID = applied.map(singleId => singleId.id);

    const matchedJobs = allJobs.filter(job => appliedID.includes(job.id));

    const [filteredJobs, setFilteredJobs] = useState(matchedJobs);

    const handleFilter = (filterType) => {
        let filteredJobs;
      
        if (filterType == 'remote') {
          filteredJobs = matchedJobs.filter(job => job.job_type === 'Remote');
        } else if (filterType == 'on-site') {
          filteredJobs = matchedJobs.filter(job => job.job_type === 'On-site');
        } else {
          filteredJobs = matchedJobs;
        }
      
        setFilteredJobs(filteredJobs);
      }

    return (

        < div >
            <h1 className='text-3xl font-bold text-center flex justify-center items-center h-full mb-8 py-12 bg-gradient-to-r from-indigo-50 to-purple-50'>Applied Jobs</h1>

            {/* button */}

            <div className='flex justify-end gap-4 px-44 mb-8'>
                <button className='bg-gray-200 rounded-lg px-4 py-2' onClick={() => handleFilter('remote')}>Remote</button>
                <button className='bg-gray-200 rounded-lg px-4 py-2' onClick={() => handleFilter('on-site')}>On-site</button>
                
            </div>

            {/* button ends */}
            {
                filteredJobs.map(job => <div key={job.id}>
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