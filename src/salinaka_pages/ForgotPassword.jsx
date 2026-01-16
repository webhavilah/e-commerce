import { IoMdCheckmark } from "react-icons/io";
import Navbar from '../components/Navbar';

const ForgotPassword = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 md:pt-30 m-auto w-full min-h-screen flex flex-col justify-center items-center px-8">
        <div className="mb-10 md:mb-30 w-full max-w-[670px] text-left">
          <h1 className="text-[20px] font-bold text-left">
            Forgot Your Password?
          </h1>
          <p className="mt-4 text-[#4A4A4A] font-bold text-left">
            Enter your email address and we will send you a password reset email.
          </p>
          <label htmlFor="email" className="block mt-5">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border border-gray-300 w-full py-2 px-3 focus:ring-0 focus:outline-none placeholder:font-bold placeholder:text-[#9C9C9C]"
            />
          </label>
          <button className="mt-7 bg-black text-[#F9F9F9] font-bold py-3.5 px-3 flex justify-center hover:bg-neutral-800 transition duration-400">
            <IoMdCheckmark className="pr-1 text-2xl" />
            Send Password Reset Email
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
