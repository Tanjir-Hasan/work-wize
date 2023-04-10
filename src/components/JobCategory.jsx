import React from 'react';
import { useParams } from 'react-router-dom';

const JobCategory = () => {
    const {job} = useParams()
    console.log(job)
    return (
        <div>
            {job.length}
        </div>
    );
};

export default JobCategory;
