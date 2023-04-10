import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Applied = () => {
    const allJobs = useLoaderData();
    console.log(allJobs)

    const applied = JSON.parse(localStorage.getItem("jobs")) || [];
    const appliedID = applied.map(singleId => singleId.id);


    const matchedJobs = allJobs.filter(job => appliedID.includes(job.id));
    console.log(matchedJobs)
    return (

        < div >
            <h1 className='text-3xl font-bold text-center'>Applied Jobs</h1>
            {
                matchedJobs.map(job => <div key={job.id}>
                    <div>
                        <div>
                            <img src={job.logo} alt="" />
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>)
            }
        </div >
    );
};

export default Applied;