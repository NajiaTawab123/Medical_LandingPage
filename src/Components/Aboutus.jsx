import React from "react";
import { Star } from "lucide-react";

function Aboutus() {
  return (
    <div className="bg-[#E1EEFF] mt-18 py-16 px-8 flex flex-col md:flex-row justify-center items-start md:items-stretch gap-10 h-auto md:h-[70vh]">
      {/* LEFT SECTION */}
      <div className="flex-1 md:mt-20 ml-54 max-sm:ml-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          What Our <span className="text-blue-500">Member's</span> <br className="hidden md:block" />
          Saying About Us
        </h1>
        <p className="text-[12px] mb-6 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br className="hidden md:block" />
          Assumenda aperiam modi nostrum consequuntur.
        </p>

        {/* Profile Icons + Reviews */}
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <div className="flex -space-x-4">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                src={`https://api.dicebear.com/6.x/adventurer/svg?seed=anime${i}`}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <button className="text-sm font-semibold">100+ Reviews</button>
        </div>
      </div>

      {/* RIGHT SECTION (Review Card) */}
      <div className="flex-1 w-full md:w-[400px] h-auto md:h-[250px] bg-white rounded-[20px] shadow-md overflow-hidden mt-10 md:mt-16 mr-0 md:mr-40">
        <div className="flex flex-col md:flex-row items-center p-4">
          <div className="flex items-center ml-0 md:ml-4 mt-4 md:mt-8">
            <img
              src="https://api.dicebear.com/6.x/adventurer/svg?seed=Sasuke"
              alt="profile"
              className="w-12 h-12 rounded-full border-2 border-gray-200"
            />
            <div className="ml-3 text-center md:text-left">
              <h1 className="text-sm font-semibold">Jane Cooper</h1>
              <p className="text-xs text-gray-500">12/4/17</p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex space-x-1 px-0 md:px-4 ml-0 md:ml-28 mt-4 md:mt-8 justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
        </div>

        {/* Review text */}
        <p className="text-[11px] text-justify pt-4 px-6 md:pl-10 md:pr-10 pb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          eveniet neque nostrum deleniti, autem cumque perspiciatis quos
          consequatur saepe, nemo maiores vero nulla possimus vel quae. Ut
          adipisci totam nemo.
          eveniet neque nostrum deleniti, autem cumque perspiciatis quos
          consequatur saepe, nemo maiores vero nulla possimus vel quae. Ut
          adipisci totam nemo.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
