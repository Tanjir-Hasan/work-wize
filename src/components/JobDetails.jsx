import { useLoaderData } from 'react-router-dom';
import { CurrencyDollarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'


const JobDetails = () => {
  const data = useLoaderData();

  const handleApply = (id) => {
    let stored = JSON.parse(localStorage.getItem("jobs")) || [];
    const existingIds = stored.map(item => item.id);
    if (!existingIds.includes(id)) {
      stored.push({ id: id });
      localStorage.setItem("jobs", JSON.stringify(stored));
    }
  }

  return (
    <>
      <div className='relative'>
        <img src="../../public/images/grunge_detailed_dusty_overlay_texture_2804.jpg" alt="" className='w-full h-48 object-cover opacity-50 mb-20' />
        <h1 className='text-3xl font-bold text-center absolute inset-0 flex justify-center items-center h-full'>Job Details</h1>
      </div>
      <div className='flex max-w-6xl mx-auto items-center'>
        <div className='w-3/4 px-16'>
          <p className='mb-2'><span className='font-bold'>Job Description:</span> {data.job_description}</p>
          <p className='mb-2'> <span className='font-bold'>Job Responsibility:</span> {data.job_responsibility}</p>
          <p ><span className='font-bold'>Educational Requirements:</span> </p>
          <p>{data.education_requirement}</p>
          <p className='mb-2'><span className='font-bold'>Experiences:</span> {data.experience}</p>
        </div>
        <div>
          <div className='flex flex-col p-10 bg-gradient-to-r from-blue-100 to-purple-100 bg-opacity-10'>
            <h3 className='text-xl font-bold'>Job Details:</h3>
            <hr className='border-1 border-violet-500 my-4' />
            <span className='inline-flex'><CurrencyDollarIcon className="h-6 w-6 text-blue-500" /> <p className='font-semibold ml-2'>Salary :</p> <p className='text-gray-500 ml-2'>{data.salary}</p></span>
            <span className='inline-flex'><CalendarDaysIcon className="h-6 w-6 text-blue-500" /> <p className='font-semibold ml-2'>Job Title :</p> <p className='text-gray-500 ml-2'>{data.job_title}</p> </span>
            <h3 className='text-xl font-bold mt-4'>Contact Information:</h3>
            <hr className='border-1 border-violet-500 my-4' />
            <span className='inline-flex'><PhoneIcon className="h-6 w-6 text-blue-500" /> <p className='font-semibold ml-2'>Phone:</p>  <p className='text-gray-500 ml-2'>{data.phone} </p></span>
            <span className='inline-flex'><EnvelopeIcon className="h-6 w-6 text-blue-500" /> <p className='font-semibold ml-2'>Email:</p>  <p className='text-gray-500 ml-2'>{data.email} </p></span>
            <span className='inline-flex'><MapPinIcon className="h-6 w-6 text-blue-500" /> <p className='font-semibold ml-2'>Address:</p>  <p className='text-gray-500 ml-2'>{data.location} </p></span>
          </div>
          <button className='text-white bg-gradient-to-r from-indigo-400 to-purple-500 mt-2 rounded-md mx-auto p-4 w-full' onClick={() => handleApply(data.id)}>Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
