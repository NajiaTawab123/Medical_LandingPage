import React from "react";
import { motion } from "framer-motion";

function Stats() {
  // Animation variants for staggered cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="flex flex-wrap bg-blue-500 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* First Stat Card */}
      <motion.div
        custom={0}
        variants={cardVariants}
        className="p-5 flex-col relative ml-24 max-sm:ml-4 max-sm:flex-1 max-sm:text-center"
      >
        <h1 className="text-6xl font-bold max-sm:text-3xl">24/7</h1>
        <p className="text-lg mt-1 max-sm:text-sm">Online Support</p>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-20 border-r border-white opacity-80 mr-[-16px] max-sm:hidden"></div>
      </motion.div>

      {/* Second Stat Card */}
      <motion.div
        custom={1}
        variants={cardVariants}
        className="p-5 flex-col relative ml-8 max-sm:ml-4 max-sm:flex-1 max-sm:text-center"
      >
        <h1 className="text-6xl font-bold max-sm:text-3xl">100+</h1>
        <p className="text-lg mt-1 max-sm:text-sm">Doctors</p>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-20 border-r border-white opacity-80 mr-[-16px] max-sm:hidden"></div>
      </motion.div>

      {/* Third Stat Card */}
      <motion.div
        custom={2}
        variants={cardVariants}
        className="p-5 flex-col ml-8 max-sm:ml-4 max-sm:flex-1 max-sm:text-center"
      >
        <h1 className="text-6xl font-bold max-sm:text-3xl">1M+</h1>
        <p className="text-lg mt-1 max-sm:text-sm">Active Patients</p>
      </motion.div>
    </motion.div>
  );
}

export default Stats;
