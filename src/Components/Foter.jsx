import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-16 px-8">
      <div className="flex flex-col md:flex-row justify-between ml-16 max-sm:ml-4 max-sm:space-y-10">
        
        {/* Brand Info */}
        <motion.div
          className="flex-1 max-sm:text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold mb-10">E-sheba</h2>
          <p className="mb-2 mt-4 text-[12px]">
            E-sheba is your trusted digital healthcare platform, <br />
            making it easier to book appointments, consult doctors, <br />
            and access medical services anytime, anywhere.
          </p>
          <p className="mb-4 mt-4 text-[12px]">
            Our mission is to bring healthcare closer to you <br />
            with reliable, affordable, and professional services.
          </p>
          <div className="flex space-x-4 text-[11px] max-sm:justify-center">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer transition-colors" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer transition-colors" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer transition-colors" />
          </div>
        </motion.div>

        {/* Useful Links */}
        <motion.div
          className="flex-1 ml-34 max-sm:ml-0 max-sm:text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-8">Useful Links</h2>
          <ul className="space-y-1">
            <li className="text-[12px] font-medium hover:text-gray-300 cursor-pointer transition-colors">
              About Us
            </li>
            <li className="text-[12px] font-medium hover:text-gray-300 cursor-pointer transition-colors">
              Privacy Policy
            </li>
            <li className="text-[12px] font-medium hover:text-gray-300 cursor-pointer transition-colors">
              Our Mission
            </li>
            <li className="text-[12px] font-medium hover:text-gray-300 cursor-pointer transition-colors">
              Our Team
            </li>
          </ul>
        </motion.div>

        {/* Address & Map */}
        <motion.div
          className="flex-1 mr-48 max-sm:mr-0 max-sm:flex max-sm:justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-[350px] h-[180px] rounded-lg overflow-hidden shadow-lg max-sm:w-full max-sm:max-w-[300px]">
            <h2 className="text-xl font-bold mb-4 max-sm:text-center">Address</h2>
            <iframe
              title="E-sheba Address Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019934207248!2d-122.41941518468179!3d37.77492927975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c34e548b%3A0x8f4d45c2d6f7fae0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1692765600000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
