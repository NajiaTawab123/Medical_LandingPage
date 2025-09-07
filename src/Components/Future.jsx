import React from "react";
import { motion } from "framer-motion";

function Future() {
  return (
    <div className="py-16 px-8 flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
      {/* LEFT SECTION */}
      <motion.div
        className="flex-1 md:mt-20 ml-50 max-sm:ml-0 max-sm:text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 max-sm:text-2xl leading-snug">
          The Future <br /> of{" "}
          <span className="text-blue-500">Quality Health</span>
        </h1>
        <p className="text-[13px] mb-6 max-sm:text-[11px] max-sm:leading-relaxed text-gray-600">
          We believe the future of healthcare lies in technology-driven,
          patient-centered solutions. Our platform makes it simple to
          connect with doctors, manage appointments, and track your
          health anytime, anywhere. 
          <br />
          <br />
          With advanced tools and expert care, we aim to remove
          barriers between patients and professionals. Easy access,
          affordable services, and trusted support are at the heart
          of what we do. 
          <br />
          <br />
          Together, we’re shaping a world where healthcare is
          smarter, faster, and more accessible for everyone.
        </p>

        {/* Button with subtle hover effect */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors"
        >
          Learn More →
        </motion.button>
      </motion.div>

      {/* RIGHT SECTION (Image) */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end mt-10 md:mt-20 mr-50 max-sm:mr-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="/Img/doc3.jpg"
          alt="Future of Healthcare"
          className="w-[800px] rounded-2xl shadow-lg max-sm:w-full max-sm:max-w-[350px]"
        />
      </motion.div>
    </div>
  );
}

export default Future;
