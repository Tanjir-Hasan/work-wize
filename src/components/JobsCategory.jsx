import React, { useEffect, useState } from 'react';
import JobCategory from './JobCategory';

const JobsCategory = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('topdata.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            {
                jobs.map(job => <JobCategory key={job.id} job={job} />)
            }
        </div>
    );
};

export default JobsCategory;
