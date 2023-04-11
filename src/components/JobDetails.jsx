import { useLoaderData } from 'react-router-dom';
import { CurrencyDollarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
  const data = useLoaderData();

  const handleApply = (id) => {
    let stored = JSON.parse(localStorage.getItem("jobs")) || [];
    const existingIds = stored.map(item => item.id);
    if (!existingIds.includes(id)) {
      stored.push({ id: id });
      localStorage.setItem("jobs", JSON.stringify(stored));
    };
    toast.success('Application submitted successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <>
      <ToastContainer />
      <h1 className='text-3xl font-bold text-center flex justify-center items-center h-full mb-8 py-12 bg-gradient-to-r from-indigo-50 to-purple-50'>Job Details</h1>
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
            <span className='inline-flex'><CurrencyDollarIcon className="h-6 w-6 text-blue-500" /> <p className='font-semibold ml-2'>Salary :</p></span>
            <p className='text-center text-gray-500 ml-2'>{data.salary}</p>
            <span className='inline-flex'><CalendarDaysIcon className="h-6 w-6 text-blue-500" /> <p className='font-semibold ml-2'>Job Title :</p></span>
            <p className='text-center text-gray-500 ml-2'>{data.job_title}</p>
            <h3 className='text-xl font-bold mt-4'>Contact Information:</h3>
            <hr className='border-1 border-violet-500 my-4' />
            <span className='inline-flex'><PhoneIcon className="h-6 w-6 text-blue-500" /> <p className='font-semibold ml-2'>Phone :</p>  <p className='text-gray-500 ml-2'>{data.phone} </p></span>
            <span className='inline-flex'><EnvelopeIcon className="h-6 w-6 text-blue-500" /> <p className='font-semibold ml-2'>Email :</p></span>
            <p className='text-center text-gray-500 ml-2'>{data.email} </p>
            <span className='inline-flex'><MapPinIcon className="h-6 w-6 text-blue-500" /> <p className='font-semibold ml-2'>Address:</p> </span>
            <p className='text-center text-gray-500 ml-2'>{data.location} </p>
          </div>
          <button className='text-white bg-gradient-to-r from-indigo-400 to-purple-500 mt-2 rounded-md mx-auto p-4 w-full' onClick={() => handleApply(data.id)}>Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
