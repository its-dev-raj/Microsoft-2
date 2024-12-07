import React from 'react'

const Heading = () => {
  return (
    <div className="flex flex-col gap-2 bg-gradient-to-br from-[#EFF1FE] w-fit h-fit lg:px-16 px-5 lg:pt-20 pt-12 pb-16">
      <p className="text-xs font-semibold text-[#5D5BD4] ">FEATURED NEWS</p>
      <p className="lg:text-4xl text-2xl font-semibold">
        Discover what’s happening with Teams
      </p>
    </div>
  );
}

export default Heading