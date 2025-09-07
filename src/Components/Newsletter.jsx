import React from "react";
import { motion } from "framer-motion";

function Newsletter() {
  return (
    <motion.div
      className="flex justify-center py-24 ml-35 mr-35 mb-20 bg-blue-500 rounded-xl max-sm:ml-4 max-sm:mr-4 max-sm:py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="w-4/5 text-white max-sm:w-full max-sm:px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-semibold mb-6 text-center max-sm:text-2xl"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Subscribe to Our Newsletter
        </motion.h2>

        {/* Input with button */}
        <div className="relative w-full">
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-full text-black focus:outline-none bg-white max-sm:p-3 max-sm:text-sm"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 mr-4 rounded-[50%] max-sm:px-3 max-sm:py-1"
          >
            →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Newsletter;
