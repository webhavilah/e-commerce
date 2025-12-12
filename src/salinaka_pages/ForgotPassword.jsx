import { IoMdCheckmark } from "react-icons/io";
import Navbar from '../components/Navbar';

const forgotPassword = () => {
  return (
    <>
      <Navbar/>
      <div className="pt-30 m-auto w-full h-screen flex flex-col justify-center items-center">
        <div className="mb-30">
          <h1 className="text-2xl font-medium">Forgot Your Password?</h1>
          <p className="mt-4 text-[#4A4A4A] font-medium">Enter your email address and we will send you a password reset email.</p>
          <label htmlFor="">
          <input type="email" placeholder='Enter your email' className='border border-gray-300 mt-5 mb-5 py-2 px-3 w-160 focus:ring-0 focus:outline-none placeholder:font-medium placeholder:text-[#9C9C9C]' />
          </label>
          <button className='pt-2 bg-black text-[#F9F9F9] font-semibold py-3 px-3 flex hover:bg-neutral-800 transition duration-400'><IoMdCheckmark className='pr-1 text-2xl'/> Send Password Reset Email</button>
      </div>
      </div>
    </>
  )
}

export default forgotPassword;