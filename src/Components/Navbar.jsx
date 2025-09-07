import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About", "Application", "History"];

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <div className="flex justify-between items-center w-full h-20 px-6 lg:px-12 bg-white shadow-sm relative z-30">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-2xl font-bold lg:ml-20">
            E-<span className="text-blue-500">sheba</span>
          </h1>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex">
          <ul className="flex gap-6 lg:gap-8 lg:ml-32 mr-8">
            {menuItems.map((item, i) => (
              <motion.li
                key={i}
                className={`relative inline-block cursor-pointer text-black ${
                  item === "Home" ? "text-blue-500" : ""
                } after:content-[""] after:absolute after:left-0 after:bottom-0 
                  after:w-0 after:h-[2px] after:bg-blue-500 
                  after:transition-all after:duration-300 hover:after:w-full`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <a href="">{item}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* DESKTOP BUTTONS */}
        <motion.div
          className="hidden md:flex gap-3 lg:gap-4 m-4 mr-16 relative z-20"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <button className="text-[14px] lg:text-[15px] px-5 lg:px-7 py-2 rounded-[40px] border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
            Login
          </button>
          <button className="text-[14px] lg:text-[15px] px-5 py-2 rounded-[40px] bg-blue-500 text-white border-2 border-transparent hover:bg-white hover:text-blue-500 hover:border-blue-500 transition">
            Sign up
          </button>
        </motion.div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)} className="text-blue-500">
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU WITH ANIMATION */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white shadow-md px-6 py-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul className="flex flex-col gap-4 items-center">
              {menuItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <a
                    href=""
                    className={`${
                      item === "Home" ? "text-blue-500" : "text-black"
                    }`}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* MOBILE BUTTONS */}
            <motion.div
              className="flex flex-col gap-2 mt-6 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button className="text-[13px] px-5 py-2 rounded-[40px] border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition w-fit">
                Login
              </button>
              <button className="text-[13px] px-5 py-2 rounded-[40px] bg-blue-500 text-white border-2 border-transparent hover:bg-white hover:text-blue-500 hover:border-blue-500 transition w-fit">
                Sign up
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
