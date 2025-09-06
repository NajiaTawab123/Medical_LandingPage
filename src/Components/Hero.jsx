import React from 'react'
import Navbar from './Navbar';
import Stats from './Stats';

function Hero() {
    return (
        <>
            <div className='min-h-screen bg-[#E1EEFF] flex flex-col'>
                <Navbar />

                <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start flex-1'>
                    <div className='flex flex-col w-full'>
                        <div className='ml-6 sm:ml-12 md:ml-20 lg:ml-31 mt-10 sm:mt-16 md:mt-20 lg:mt-24'>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold'>
                                Find & Search Your <br />
                                <span className='text-blue-500'>Favourite</span> Doctor
                            </h1>
                            <p className='text-xs sm:text-sm text-gray-600 mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                <br className='sm:hidden' />
                                Sint minima nesciunt veniam! Illum.
                            </p>
                        </div>

                        <div className="bg-white rounded-full shadow-lg flex items-center w-[90%] sm:w-[600px] max-w-7xl ml-6 sm:ml-12 md:ml-20 lg:ml-30 p-3 sm:p-4 mb-8 sm:mb-12">
                            <div className="flex items-center flex-1 px-2 sm:px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c4.418 0 8-1.79 8-4V6c0-2.21-3.582-4-8-4S4 3.79 4 6v4c0 2.21 3.582 4 8 4z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v2a4 4 0 008 0v-2" />
                                </svg>
                                <input 
                                    type="text" 
                                    placeholder="Doctor's Name" 
                                    className="w-full focus:outline-none text-gray-600 text-sm"
                                />
                            </div>

                            <div className="hidden sm:block w-px h-6 bg-gray-200" />

                            <div className="flex items-center flex-1 px-2 sm:px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <input 
                                    type="text" 
                                    placeholder="Location" 
                                    className="w-full focus:outline-none text-gray-600 text-sm"
                                />
                            </div>

                            <button className="bg-blue-500 rounded-full flex items-center justify-center p-3 ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className='relative hidden lg:flex justify-center mt-8 lg:mt-24 lg:mr-20'>
                        <div className="w-[600px] h-[320px] bg-[#A5CCFF] rounded-t-full relative top-[75px]"></div>
                        <img 
                            src="/Img/d1.png" 
                            alt="Doctor" 
                            className='absolute z-10 w-[450px] right-10 -top-37'
                        />
                    </div>
                </div>

                <Stats />
            </div>
        </>
    )
}

export default Hero
