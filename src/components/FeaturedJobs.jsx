import React, { useEffect, useState } from 'react';
import FeaturedJob from './FeaturedJob';

const FeaturedJobs = () => {
    const [featureData, setFeatureData] = useState([]);

    const [numToShow, setNumToShow] = useState(4);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFeatureData(data))
    }, []);

    const toggleNumToShow = () => {
        setNumToShow(featureData.length)
    }

    return (
        <>
            <div className='text-center my-12'>
                <h1 className='text-5xl font-bold my-4'>Featured Jobs</h1>
                <p className='text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-3 max-w-5xl mx-auto px-3'>
                {featureData.slice(0, numToShow).map(data => (
                    <FeaturedJob key={data.id} data={data}></FeaturedJob>
                ))}
            </div>
            {numToShow < featureData.length && (
                <button onClick={toggleNumToShow} className='block mx-auto mt-8 bg-gradient-to-r from-indigo-400 to-purple-500 px-4 py-2 text-white rounded-md'>
                    See All Jobs
                </button>
            )}
        </>
    );
};

export default FeaturedJobs;
