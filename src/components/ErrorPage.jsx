import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/solid';
import Lottie from "lottie-react";
import sad from "../../public/10110-sad.json";

const ErrorPage = () => {
    const { error, status } = useRouteError();
    console.log(status)
    return (
        <div className='flex flex-col align-middle h-screen justify-center items-center my-auto'>
            <Lottie className='w-full h-48' animationData={sad} loop={true} />
            <h3 className='text-5xl font-extrabold text-yellow-600 my-4'>Error: {status}</h3>
            <p className='text-xl mb-4 text-center'>{error.message}</p>
            <Link to='/'>
                <button className='flex items-center gap-3 text-white bg-gradient-to-r from-indigo-400 to-purple-500 mt-2 rounded-md mx-auto p-4 w-full'>
                    Back to Home
                    <HomeIcon className="h-6 w-6 text-white-500" />
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;