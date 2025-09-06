import React from 'react'


function Newsletter() {
  return (
    <>
      <div className="flex justify-center py-24 ml-35 mr-35 mb-20 bg-blue-500 rounded-xl max-sm:ml-4 max-sm:mr-4 max-sm:py-12">
        <div className="w-4/5 text-white max-sm:w-full max-sm:px-4">
          {/* Heading */}
          <h2 className="text-4xl font-semibold mb-6 text-center max-sm:text-2xl">
            Subscribe to Our Newsletter
          </h2>

          {/* Input with button */}
          <div className="relative w-full">
            <input
              type="email"
              placeholder=""
              className="w-full p-4 rounded-full text-black focus:outline-none bg-white max-sm:p-3 max-sm:text-sm"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 mr-4 rounded-[50%] max-sm:px-3 max-sm:py-1">
              →
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter
