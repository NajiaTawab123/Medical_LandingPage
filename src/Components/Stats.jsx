import React from 'react'

function Stats() {
    return (
        <>
            <div className="flex flex-wrap bg-blue-500 text-white">
                {/* First Stat Card */}
                <div className="p-5 flex-col relative ml-24 max-sm:ml-4 max-sm:flex-1 max-sm:text-center">
                    <h1 className="text-6xl font-bold max-sm:text-3xl">24/7</h1>
                    <p className="text-lg mt-1 max-sm:text-sm">Online Support</p>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-20 border-r border-white opacity-80 mr-[-16px] max-sm:hidden"></div>
                </div>

                {/* Second Stat Card */}
                <div className="p-5 flex-col relative ml-8 max-sm:ml-4 max-sm:flex-1 max-sm:text-center">
                    <h1 className="text-6xl font-bold max-sm:text-3xl">100+</h1>
                    <p className="text-lg mt-1 max-sm:text-sm">Doctors</p>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-20 border-r border-white opacity-80 mr-[-16px] max-sm:hidden"></div>
                </div>

                {/* Third Stat Card */}
                <div className="p-5 flex-col ml-8 max-sm:ml-4 max-sm:flex-1 max-sm:text-center">
                    <h1 className="text-6xl font-bold max-sm:text-3xl">1M+</h1>
                    <p className="text-lg mt-1 max-sm:text-sm">Active Patients</p>
                </div>
            </div>
        </>
    )
}

export default Stats
