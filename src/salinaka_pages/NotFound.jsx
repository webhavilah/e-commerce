import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate =useNavigate()
  return (
    <>
      <Navbar/>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className='text-3xl font-semibold'>:( Page you are looking for doesn't exists.</h1>
        <button onClick={()=>{navigate('/')}} className='bg-black text-white font-semibold text-2xl mt-3  py-2 px-6 hover:bg-black/60 transition duration-200 ease-in-out'>Go back</button>
      </div>
    </>
  )
}

export default NotFound;