import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import FeaturedJob from './FeaturedJob';

const FeaturedJobs = () => {
    const [featureData, setFeatureData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFeatureData(data))
    }, []);

    return (
        <>
            <div className='text-center my-12'>
                <h1 className='text-5xl font-bold my-4'>Featured Jobs</h1>
                <p className='text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-3 max-w-5xl mx-auto px-3'>
                {featureData.map(data => (
                    <FeaturedJob key={data.id} data={data}></FeaturedJob>

                ))}
            </div>
        </>
    );
};

export default FeaturedJobs;
