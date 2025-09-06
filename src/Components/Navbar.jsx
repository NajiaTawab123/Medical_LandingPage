import React, { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='flex justify-between items-center w-full h-20 px-6 lg:px-12'>
                <div>
                    <h1 className='text-2xl font-bold lg:ml-20'>
                        E-<span className='text-blue-500'>sheba</span>
                    </h1>
                </div>

                <div className='hidden md:flex'>
                    <ul className='flex gap-6 lg:gap-8 lg:ml-32 mr-8'>
                        <li className='relative inline-block text-blue-500 cursor-pointer
                            after:content-[""] after:absolute after:left-0 after:bottom-0 
                            after:w-0 after:h-[2px] after:bg-blue-500 
                            after:transition-all after:duration-300 
                            hover:after:w-full'>
                            <a href="">Home</a>
                        </li>
                        <li className='relative inline-block text-black cursor-pointer
                            after:content-[""] after:absolute after:left-0 after:bottom-0 
                            after:w-0 after:h-[2px] after:bg-blue-500 
                            after:transition-all after:duration-300 
                            hover:after:w-full'>
                            <a href="">About</a>
                        </li>
                        <li className='relative inline-block text-black cursor-pointer
                            after:content-[""] after:absolute after:left-0 after:bottom-0 
                            after:w-0 after:h-[2px] after:bg-blue-500 
                            after:transition-all after:duration-300 
                            hover:after:w-full'>
                            <a href="">Application</a>
                        </li>
                        <li className='relative inline-block text-black cursor-pointer
                            after:content-[""] after:absolute after:left-0 after:bottom-0 
                            after:w-0 after:h-[2px] after:bg-blue-500 
                            after:transition-all after:duration-300 
                            hover:after:w-full '>
                            <a href="">History</a>
                        </li>
                    </ul>
                </div>

                <div className='hidden md:flex gap-3 lg:gap-4 m-4 mr-16 relative z-20'>
                    <button className="text-[14px] lg:text-[15px] px-5 lg:px-7 py-2 rounded-[40px] border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
                        Login
                    </button>
                    <button className='text-[14px] lg:text-[15px] px-5 py-2 rounded-[40px] bg-blue-500 text-white border-2 border-transparent 
                    hover:bg-white hover:text-blue-500 hover:border-blue-500 transition'>
                        Sign up
                    </button>
                </div>

                <div className='md:hidden flex items-center'>
                    <button onClick={() => setOpen(!open)} className='text-blue-500'>
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {open && (
                <div className='md:hidden bg-white shadow-md px-6 py-4'>
                    <ul className='flex flex-col gap-4 items-center'>
                        <li><a href="" className='text-blue-500'>Home</a></li>
                        <li><a href="" className='text-black'>About</a></li>
                        <li><a href="" className='text-black'>Application</a></li>
                        <li><a href="" className='text-black'>History</a></li>
                    </ul>

                    <div className='flex flex-col gap-2 mt-4 items-center'>
                        <button className="
                            text-[13px] 
                            px-5 py-2
                            rounded-[40px] 
                            border-2 border-blue-500 
                            text-blue-500 
                            hover:bg-blue-500 hover:text-white 
                            transition w-fit
                        ">
                            Login
                        </button>
                        <button className="
                            text-[13px] 
                            px-5 py-2
                            rounded-[40px] 
                            bg-blue-500 text-white 
                            border-2 border-transparent 
                            hover:bg-white hover:text-blue-500 hover:border-blue-500 
                            transition w-fit
                        ">
                            Sign up
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar;
