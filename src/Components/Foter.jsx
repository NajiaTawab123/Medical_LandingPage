import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-16 px-8">
      <div className="flex flex-col md:flex-row justify-between ml-16 max-sm:ml-4 max-sm:space-y-10">
        {/* Section 1: E-sheba */}
        <div className="flex-1 max-sm:text-center">
          <h2 className="text-xl font-bold mb-10">E-sheba</h2>
          <p className="mb-2 mt-4 text-[12px] font-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Sedtristique consequat placerat.Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. Sedtristique consequat placerat.
          </p>
          <p className="mb-4 mt-4 text-[12px] font-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Sedtristique consequat placerat.Lorem ipsum dolor sit amet, <br />
          </p>
          <div className="flex space-x-4 text-[11px] max-sm:justify-center">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Section 2: Useful Links */}
        <div className="flex-1 ml-34 max-sm:ml-0 max-sm:text-center">
          <h2 className="text-xl font-semibold mb-8">Useful Links</h2>
          <ul className="space-y-1">
            <li className="text-[12px] font-medium hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="text-[12px] font-medium hover:text-gray-300 cursor-pointer">Privacy Policy</li>
            <li className="text-[12px] font-medium hover:text-gray-300 cursor-pointer">Our Mission</li>
            <li className="text-[12px] font-medium hover:text-gray-300 cursor-pointer">Our Team</li>
          </ul>
        </div>

        {/* Section 3: Address */}
        <div className="flex-1 mr-48 max-sm:mr-0 max-sm:flex max-sm:justify-center">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
