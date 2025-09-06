import React from 'react'

function Future() {
  return (
    <div className="py-16 px-8 flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
      {/* LEFT SECTION */}
      <div className="flex-1 md:mt-20 ml-50 max-sm:ml-0 max-sm:text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 max-sm:text-2xl">
          The Future <br /> of <span className="text-blue-500">Quality Health</span>
        </h1>
        <p className="text-[12px] mb-6 max-sm:text-[11px] max-sm:leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur <br />
          magni ea, officiis eaque obcaecati non officia assumenda quae quam <br />
          minus, dicta, accusantium ratione eos ex veritatis fuga quisquam <br />
          omnis possimus.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur <br />
          magni ea, officiis eaque obcaecati non officia assumenda quae quam <br />
          minus, dicta, accusantium ratione eos ex veritatis fuga quisquam <br />
          omnis possimus.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur <br />
          magni ea, officiis eaque obcaecati non officia assumenda quae quam <br />
          <br />
        </p>

        {/* Reviews Button */}
        <button className="text-sm font-semibold text-blue-500">
          Learn More →
        </button>
      </div>

      {/* RIGHT SECTION (Image) */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-20 mr-50 max-sm:mr-0">
        <img
          src="/Img/d3.jpg"
          alt="About us"
          className="w-[800px] rounded-2xl shadow-lg max-sm:w-full max-sm:max-w-[350px]"
        />
      </div>
    </div>
  )
}

export default Future
