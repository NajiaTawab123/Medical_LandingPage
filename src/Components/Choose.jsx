import React from "react";
import { motion } from "framer-motion";

function Choose() {
  const features = [
    "Experienced and highly qualified medical professionals.",
    "Personalized treatment plans tailored to your needs.",
    "Modern facilities with advanced medical technology.",
    "Compassionate care in a safe and friendly environment.",
    "Easy appointment scheduling and quick consultations.",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-20 px-6 sm:px-8">
      {/* Left: Doctor Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-start ml-0 md:ml-20 lg:ml-58 mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="/Img/doc2.jpg"
          alt="Doctor"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        className="flex-1 mt-6 md:mt-0 mr-0 md:mr-20 lg:mr-48"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold text-3xl sm:text-4xl leading-[30px] mb-6">
          Why Choose Us?
        </h1>

        {features.map((item, index) => (
          <motion.p
            key={index}
            className="flex text-[13px] sm:text-[14px] items-center gap-2 mb-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
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
          </motion.p>
        ))}

        <motion.button
          className="mt-4 text-[#3F86E2] text-[14px] font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More →
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Choose;

