import React from 'react';

const JobCategory = ({job}) => {
    return (
        <div className='bg-gradient-to-r from-blue-50 to-purple-50 w-56 p-6 rounded-xl mb-2'>
            <img src={job.img} className='h-16 p-2' alt="" />
            <h1 className='ml-2'>{job.name}</h1>
            <p className='text-gray-400 ml-2'>{job.positions}</p>
        </div>
    );
};

export default JobCategory;
