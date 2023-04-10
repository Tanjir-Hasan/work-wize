import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const data = useLoaderData()


  return (
    <>
    <h1 className='text-3xl font-bold text-center my-10'>Job Details</h1>
      <div className='flex max-w-6xl mx-auto'>
        <div className='w-2/4'>
          <p>Job Description: {data.job_description}</p>
          <p>Job Responsibility: {data.job_responsibility}</p>
          <p>Educational Requirements:</p>
          <p>{data.education_requirement}</p>
          <p>Experiences: {data.experience}</p>
        </div>
        <div>
          <h3>Job Details:</h3>
          <p>Salary : {data.salary}</p>
          <p>Job Title : {data.job_title}</p>
          <h3>Contact Information:</h3>
          <p>Phone: {data.phone}</p>
          <p>Email: {data.email}</p>
          <p>Address: {data.location}</p>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
