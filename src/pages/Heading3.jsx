import React from 'react'

const Heading3 = () => {
    return (
      <div>
        <div className="flex flex-col gap-3 lg:px-16 px-4 py-12">
          <p className="text-sm font-medium text-[#5D5BD4]">
            PRODUCTS AND SERVICES
          </p>
          <p className="lg:text-4xl text-2xl font-medium">
            Find the right Teams plan and add-ons for your needs
          </p>
        </div>
        <div className="flex gap-5 lg:px-16 px-4 rounded-lg py-6 overflow-x-scroll ">
          <button className="bg-[#424197] text-[white] rounded-xl p-2 items-center font-semibold px-4">
            Business
          </button>
          <button className="bg-[#D7D6E8] text-[#333275] font-semibold rounded-xl p-2 items-center px-4">
            Home
          </button>
          <button className="bg-[#D7D6E8] text-[#333275] rounded-xl font-semibold p-2 items-center px-4">
            Enterprise
          </button>
          <button className="bg-[#D7D6E8] text-[#333275] rounded-xl font-semibold p-2 items-center px-4">
            Education
          </button>
        </div>
      </div>
    );
}

export default Heading3