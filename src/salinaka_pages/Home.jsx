import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import image from '../assets/salinaka image.png'

const Home = () => {
  const imageStyle = {
    height: '100%',width: '100%'
  }
  return (
    <div>
        <div className="">
           <div className="flex w-[85%] bg-[#f3f3f3] m-auto ">
           <div className="w-[50%] text-[#1a1a1a] my-auto pl-10 pt-20 pb-10">
              <h2 className='text-[50px] max-w-sm leading-14 mb-6 '><span className='capitalize font-medium'>see</span> everything with <span className='capitalize font-medium'>clarity</span></h2>
              <p className='text-md text-[#4a4a4a] font-semibold  w-md mb-4'>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
              <button className='flex items-center justify-between bg-black text-white py-4 px-4 font-medium hover:bg-neutral-800 transition duration-400'>Shop Now <FaArrowRight className='ml-2'/></button>
            </div>
            <div className="w-[50%] ">
            <img src={image} style={imageStyle} className= 'border ml-10' alt="salinaka's image" />
            </div>
           </div>
        </div>
    </div>
  )
}

export default Home