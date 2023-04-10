import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import JobCategory from './JobCategory';

const JobsCategory = () => {
    // const jobs = useLoaderData()
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('categoryData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <>
            <div className='text-center my-12'>
                <h1 className='text-5xl font-bold my-4'>Job Category List</h1>
                <p className='text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid lg:grid-cols-4 justify-items-center max-w-5xl mx-auto'>
                {
                    jobs.map(job => <JobCategory key={job.id} job={job}></JobCategory>)
                }
            </div>
        </>
    );
};

export default JobsCategory;