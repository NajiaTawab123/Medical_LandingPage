import React from "react";
import Navbar from "./Navbar";
import Stats from "./Stats";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div className="min-h-screen bg-[#E1EEFF] flex flex-col">
        <Navbar />

        {/* HERO CONTENT */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start flex-1">
          {/* LEFT SECTION */}
          <motion.div
            className="flex flex-col w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="ml-6 sm:ml-12 md:ml-20 lg:ml-31 mt-10 sm:mt-16 md:mt-20 lg:mt-24">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold leading-snug relative">
                Find & Search Your <br />
                <span className="text-blue-500 relative">
                  Favourite
                  {/* Bigger and thicker curved underline */}
                  <svg
                    className="absolute -bottom-3 left-0 w-full h-6"
                    viewBox="0 0 140 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 15 C35 35, 105 -5, 140 15"
                      stroke="#0f46faff"
                      strokeWidth="3"
                      fill="transparent"
                    />
                  </svg>
                </span>{" "}
                Doctor
              </h1>

              <p className="text-xs sm:text-sm text-gray-600 mb-8 sm:mb-12 md:mb-16 lg:mb-20 leading-relaxed">
                Easily connect with trusted healthcare professionals near you. 
                Quick, reliable, and hassle-free appointments at your fingertips. 
                <br className="sm:hidden" />
                Because your health deserves the best care.
              </p>
            </div>

            {/* SEARCH BAR */}
            <motion.div
              className="bg-white rounded-full shadow-lg flex items-center w-[90%] sm:w-[600px] max-w-7xl ml-6 sm:ml-12 md:ml-20 lg:ml-30 p-3 sm:p-4 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Doctor Name Input */}
              <div className="flex items-center flex-1 px-2 sm:px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14c4.418 0 8-1.79 8-4V6c0-2.21-3.582-4-8-4S4 3.79 4 6v4c0 2.21 3.582 4 8 4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 14v2a4 4 0 008 0v-2"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Doctor's Name"
                  className="w-full focus:outline-none text-gray-600 text-sm"
                />
              </div>

              <div className="hidden sm:block w-px h-6 bg-gray-200" />

              {/* Location Input */}
              <div className="flex items-center flex-1 px-2 sm:px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full focus:outline-none text-gray-600 text-sm"
                />
              </div>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 rounded-full flex items-center justify-center p-3 ml-2 hover:bg-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION (Doctor Image) */}
          <motion.div
            className="relative hidden lg:flex justify-center mt-8 lg:mt-24 lg:mr-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-[620px] h-[380px] bg-[#A5CCFF] rounded-t-full relative top-[55px]"></div>
            <img
              src="/Img/doc1.png"
              alt="Doctor"
              className="absolute z-10 w-[900px] right-10 -top-0"
            />
          </motion.div>
        </div>

        {/* STATS SECTION */}
        <Stats />
      </div>
    </>
  );
}

export default Hero;
