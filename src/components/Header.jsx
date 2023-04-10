import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [isOpen, setIsOpen] = useState();
    return (
        <nav>
            <div className='flex justify-between items-center relative mx-auto my-6 max-w-6xl'>
                <h3 className='text-2xl font-bold'>Work Wise</h3>
                <div className='hidden lg:block'>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/statistics">Statistics</ActiveLink>
                    <ActiveLink to="/applied">Applied Jobs</ActiveLink>
                    <ActiveLink to="/blog">Blog</ActiveLink>
                </div>
                <button className=' text-white bg-violet-500 px-3 py-2 rounded-md hidden lg:block'>Start Applying</button>
            </div>
            <span className='md:hidden absolute top-6 right-6' onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen === true ?
                        (<BarsArrowUpIcon className='h-8 w-6 bg-violet-500' />)
                        : (<BarsArrowDownIcon className='h-8 w-6 bg-violet-500' />)
                }
            </span>
            {
                isOpen === true && (
                    <div className='flex flex-col w-full text-center lg:hidden'>
                        <Link to="/" className='my-1'>Home</Link>
                        <Link to="/statistics" className='my-1'>Statistics</Link>
                        <Link to="/applied" className='my-1'>Applied Jobs</Link>
                        <Link to="/blog" className='my-1'>Blog</Link>
                        <button className='text-white bg-violet-400 py-1 mx-5 my-1 rounded-lg'>Start Applying</button>
                    </div>
                )
            }
        </nav>

    );
};

export default Header;