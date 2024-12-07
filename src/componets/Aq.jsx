import React, { useState } from 'react'
import classroom from "/photos/classroom.jpg";

const Aq = ({item}) => {
  const [open, setopen] = useState(true);
  
  return (
     <div className=" order-1 lg:w-[450px] flex flex-col px-4 pt-6 lg:px-14">
              <h1 className="font-medium text-xl" onClick={()=>setopen(!open)}>{item.title} </h1>
            <div  className={`${open ? "flex" : "hidden"}  flex-col gap-8 border-b-2 `}>
              <p>
                {item.description}
        </p>
        <a href={item.url} target='_blank'>

              <button className="flex text-[#333275] border-b-1 text-sm  underline pb-8 font-semibold pl-0">
                Learn more
              </button>
        </a>
              <img className="lg:hidden " src={classroom} alt="" />
            </div>
          </div>
  )
}

export default Aq