import React from 'react'
import logo from '../assets/salinaka-logo.png'
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='h-30 flex items-center justify-center'>
        <nav className='flex justify-center items-center w-[95%]'>
            <div className="w-[50%]">
                <ul className='flex  items-center '>
                    <Link to='/home'><img src={logo} className='h-[50px]' alt="" /></Link>
                    <li className='text-sm font-semibold hover:bg-[#F5F5F5] px-5 transition py-2.5'><Link to='/'>Home</Link></li>
                    <li className='text-sm text-[#8E8E8E] font-semibold hover:bg-[#F5F5F5] px-5 transition py-2.5'><Link to='/shop'>Shop</Link></li>
                    <li className='text-sm text-[#8E8E8E] font-semibold hover:bg-[#F5F5F5] px-5 transition py-2.5'><Link to='/featured'>Featured</Link></li>
                    <li className='text-sm text-[#8E8E8E] font-semibold hover:bg-[#F5F5F5] px-5 transition py-2.5'>Recommended</li>
                </ul>
            </div>
            <div className="flex w-[50%] justify-between">
                <div className='flex items-center w-[60%]'>
                    <div className="bg-white flex space-x-3 border border-gray-500 items-center px-4 py-2">
                        <IoIosSearch className='text-lg'/>
                        <input type="text" className=' placeholder:text-[13px] pr-15 focus:ring-0 focus:border-transparent focus:outline-none' placeholder='Search product...'/>
                    </div>
                   <div className="hover:bg-[#F2F2F2] text-center py-2.5 px-4 ">
                   <AiOutlineShopping className='text-2xl text-black '/>
                   </div>
                </div>
                <div className=" w-[40%] flex items-center space-x-3.5 justify-center">
                    <button className='bg-black text-white text-[12px] font-semibold py-2.5 px-4 hover:bg-neutral-800 transition duration-400'>Sign Up</button>
                    <button className='bg-[#f2f2f2] text-gray-500 text-[12px] font-semibold py-[9px] px-4 border-gray-500 border hover:bg-white transition duration-400'>Sign In</button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar