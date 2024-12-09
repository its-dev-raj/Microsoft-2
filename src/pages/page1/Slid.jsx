import React from 'react'
import slid from "/photos/slide.jpg"

const Slid = () => {
  return (
    <div>
      <div class="flex  flex-wrap lg:flex-row relative justify-around">
        
          <img className=" lg:h-auto h-64   lg:p-0 " src={slid} alt="" />
        
        <div class="flex-col p-6   gap-5 lg:absolute flex  lg:w-[530px] top-[85px] left-[85px] shadow-md lg:shadow-none ">
          <button class="w-[50px] bg-[#FFB900] p-2  text-[black] font-semibold">
            New
          </button>
          <p class="font-semibold text-[black] text-2xl lg:text-4xl">Meet Surface Pro</p>

          <div>
            <p>
              Unlock AI features like Live Captions and Cocreator with this
              exceptionally powerful laptop.
            </p>
          </div>
          <div>
            <button class="bg-[#005CA5] p-2 text-white items-center font-medium">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slid