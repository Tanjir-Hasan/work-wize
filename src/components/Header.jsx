import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [isOpen, setIsOpen] = useState();
    return (
        <nav className=' bg-gradient-to-r from-indigo-50 to-purple-50'>
            <div className='flex justify-between items-center relative mx-auto pt-6 pb-6 max-w-6xl'>
                <h3 className='text-3xl font-bold ml-6'>Work Wise</h3>
                <div className='hidden lg:block'>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/statistics">Statistics</ActiveLink>
                    <ActiveLink to="/applied">Applied Jobs</ActiveLink>
                    <ActiveLink to="/blog">Blog</ActiveLink>
                </div>
                <button className='text-white bg-gradient-to-r from-indigo-400 to-purple-500 mt-4 px-4 py-2 hidden lg:block rounded-md'>Start Applying</button>
            </div>
            <span className='md:hidden absolute top-6 right-6' onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen === true ?
                        (<BarsArrowUpIcon className='h-8 w-6 text-purple-600 rounded-sm' />)
                        : (<BarsArrowDownIcon className='h-8 w-6 text-purple-600 rounded-sm' />)
                }
            </span>
            {
                isOpen === true && (
                    <div className='flex flex-col w-full text-center lg:hidden'>
                        <Link to="/" className='my-1'>Home</Link>
                        <Link to="/statistics" className='my-1'>Statistics</Link>
                        <Link to="/applied" className='my-1'>Applied Jobs</Link>
                        <Link to="/blog" className='my-1'>Blog</Link>
                        <button className='text-white bg-gradient-to-r from-indigo-400 to-purple-500 mt-2 mb-8 p-3 rounded-md w-3/4 mx-auto'>Start Applying</button>
                    </div>
                )
            }
        </nav>

    );
};

export default Header;