import React from 'react';

function Choose() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between py-20 px-6 sm:px-8'>
      {/* LEFT SIDE IMAGE */}
      <div className='flex-1 flex justify-center md:justify-start ml-0 md:ml-20 lg:ml-58 mb-10 md:mb-0'>
        <img
          src="/Img/d2.jpg"
          alt="Doctor"
          className='w-full max-w-md rounded-2xl shadow-lg'
        />
      </div>

      {/* RIGHT SIDE TEXT */}
      <div className='flex-1 mt-6 md:mt-0 mr-0 md:mr-20 lg:mr-48'>
        <h1 className='font-bold text-3xl sm:text-4xl leading-[30px] mb-6'>
          Why You Choose Us?
        </h1>

        {[
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        ].map((item, index) => (
          <p
            key={index}
            className="flex text-[13px] sm:text-[14px] items-center gap-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#3F86E2] flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.285 6.709a1 1 0 0 0-1.414-1.414l-9.192 9.192-4.192-4.192a1 1 0 0 0-1.414 1.414l4.899 4.899a1 1 0 0 0 1.414 0l9.899-9.899z" />
            </svg>
            {item}
          </p>
        ))}

        <button className='mt-4 text-[#3F86E2] text-[14px] font-semibold'>
          Learn More →
        </button>
      </div>
    </div>
  );
}

export default Choose;
