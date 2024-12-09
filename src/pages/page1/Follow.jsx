import React from 'react'
import youtube from "/photos/youtube.jpg";
import ficon from "/photos/F-icon.jpg";
import xicon from "/photos/x-icon.jpg";
const Follow = () => {
  return (
      <div className='flex gap-5 px-16 py-20'>
          <div className=' '>
              Follow Microsoft
          </div>
          <div className='flex gap-8 w-[150px] h-[50px] '>
              <img className='w-[20px] h-[20px]' src={ficon} alt="f" />
              <img className='w-[30px] h-[30px]' src={xicon} alt="x" />
              <img className='w-[30px] h-[25px] overflow-hidden' src={youtube} alt="youtube" />
          </div>
    </div>
  )
}

export default Follow;