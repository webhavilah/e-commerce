import React, { useEffect, useRef } from "react";
import logo from "../assets/salinaka-logo.png";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { handleScroll } from "../utils/handleScroll";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

function Signup() {
  const navigate = useNavigate();
  const navbar = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (navbar.current) {
        if (window.scrollY < 50) {
          navbar.current.classList.add("h-30");
          navbar.current.classList.remove("shadow-md", "h-[10%]", "bg-white");
        } else {
          navbar.current.classList.add("shadow-md", "h-[10%]", "bg-white");
          navbar.current.classList.remove("bg-red-500");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
      <div className="">
      <header
        ref={navbar}
        className="h-30 fixed w-full z-50 flex items-center justify-center top-0"
      >
        <nav className="flex items-center justify-between w-[95%]">
          <div className="flex items-center w-auto lg:w-[60%] md:w-[30%]">
            <Link to="/">
              <img src={logo} className="h-[50px]" alt="" />
            </Link>

            <div className="hidden lg:flex items-center ml-6">
              <NavLink
                onClick={handleScroll}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-black" : "text-gray-500"
                  } text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={handleScroll}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-black" : "text-gray-500"
                  } text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`
                }
                to="/shop"
              >
                Shop
              </NavLink>
              <NavLink
                onClick={handleScroll}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-black" : "text-gray-500"
                  } text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`
                }
                to="/featured"
              >
                Featured
              </NavLink>
              <NavLink
                onClick={handleScroll}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-black" : "text-gray-500"
                  } text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`
                }
                to="/recommended"
              >
                Recommended
              </NavLink>
            </div>
          </div>
          <div className="flex xl:w-[40%] lg:w-[50%] xl:bg-purpl-500 justify-evenly items-center ">
            <div className="items-center xl:w-[60%] lg:w-[50%]  mr-10 hidden sm:flex">
              <div className="bg-white flex space-x-3 border border-[#E5E5E5] items-center px-4 py-2">
                <IoIosSearch className="text-lg" />
                <input
                  type="text"
                  className=" placeholder:text-[13px] xl:pr-15 lg:pr-7 focus:ring-0 focus:border-transparent focus:outline-none"
                  placeholder="Search product..."
                />
              </div>
              <div className="hover:bg-[#F2F2F2] text-center py-2.5 px-4 ">
                <AiOutlineShopping className="text-2xl text-black " />
              </div>
            </div>

            <div className="hidden lg:flex   items-center gap-3 xl:w-[40%] lg:w-[50%] bg-indigo200 justify-end">
              
              <button
                onClick={() => {
                  handleScroll();
                  navigate("/signin");
                }}
                className="bg-[#f2f2f2] text-gray-500 xl:text-[12px] lg:text-[11px] font-semibold xl:py-2.5 lg:py-2 lg:px-3 xl:px-4 border border-[#DFDFDF] hover:bg-white"
              >
                Sign In
              </button>
            </div>

            <IoMenuSharp className="text-3xl cursor-pointer lg:hidden" />
          </div>
        </nav>
      </header>

      <div className="w-screen">
        <div className="lg:mt-34 md:mt-25 bg-0 m-auto w-full md:w-screen bg-rose-800 md:pb-20">
        <div className="border border-[#C5C5C5] lg:w-[52%] md:w-[75%] m-auto w-screen">
          <div className="lg:grid justify-between md: md:items-center md:grid w-[91%] m-auto">
            <div className="w-full items-center" >
              <h2 className="font-semibold text-[19px] mt-7">
                Sign up to Salinaka
              </h2>
              <form className="w-full lg:w-90 md:pr-0">
                <div className="flex flex-col mt-6">
                  <label className="text-[13px] mb-2 pl-5 font-bold text-[#696D7B]">
                    *Full name
                  </label>
                  <input
                    className=" border border-[#C5C5C5] py-1.5 pl-5 w-full  focus:ring-0 focus: focus:outline-none placeholder:font-semibold placeholder:text-[#9C9C9C] placeholder:text-[13px]"
                    type="text"
                    placeholder="John Deo"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label className="text-[13px] mb-2 pl-5 font-bold text-[#696D7B]">
                    *Email
                  </label>
                  <input
                    className=" border border-[#C5C5C5] py-1.5 pl-5 w-full focus:ring-0 focus: focus:outline-none placeholder:font-semibold placeholder:text-[#9C9C9C] placeholder:text-[13px]"
                    type="email"
                    placeholder="test@example.com"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label className="text-[13px] mb-2 pl-5 font-bold text-[#696D7B]">
                    *Password
                  </label>
                  <input
                    className=" border border-[#C5C5C5] py-1.5 pl-5 w-full focus:ring-0 focus: focus:outline-none placeholder:font-semibold placeholder:text-[#9C9C9C] placeholder:text-[13px]"
                    type="password"
                    placeholder="Your Password"
                  />
                </div>
                <div className="lg:mb-8 md:w-full">
                  <button className="text-[16px] flex items-center ml-auto  my-5  bg-black text-[#F7FFFF] py-3.5 px-3 font-bold hover:bg-neutral-800 transition duration-400">
                    <p className="">Sign Up</p>
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:mb-4 lg:pr-5 lg:grid md:flex">
              <div className="lg:w-[0.1px] m-auto bg-[#E1E1E1] lg:h-16 lg:mt-3 items-center md:h-[0.2vw] md:w-32"></div>
              <p className="text-xs font-bold py-2">OR</p>
              <div className="lg:w-[0.1px] m-auto bg-[#E1E1E1] lg:h-16 md:h-[0.2vw] md:w-32"></div>
            </div>
            <div className="lg:my-auto flex flex-col gap-3 bg-lime-700">
              <button className="flex items-center justify-center w-60 text-sm  py-3.5 gap-2 bg-[#0078FF] hover:bg-blue-600 text-[#F7FFFF] font-semibold  transition duration-200">
                <p className="flex items-center ">
                  <FaFacebookSquare className="w-4 h-4 right-4 relative" />{" "}
                  Continue with Facebook
                </p>
              </button>

              <button className="flex items-center justify-center w-60 text-sm  py-3.5 gap-2 border bg-[#FFFFFF] border-[#C5C5C5] text-[#3A3A3A] font-semibold hover:bg-[#0000001d] transition duration-200">
                <p className="flex items-center">
                  <FaGoogle className="w-4 h-4 ml-0 right-6 relative" />{" "}
                  Continue with Google
                </p>
              </button>

              <button className="flex items-center justify-center w-60 text-sm  py-3.5 gap-2 border bg-[#24292E] text-[#ffffff] font-semibold hover:bg-[#31373c]  transition duration-200">
                <p className=" flex items-center ">
                  <FaGithub className="w-4 h-4 right-6 relative" /> Continue
                  with Github
                </p>
              </button>
            </div>
          </div>
          <div className="bg-[#f2f2f2] flex py-3.5 border-t border-[#C5C5C5] justify-center items-center space-x-7">
            <p className="text-[13px] font-bold text-[#4A4A4A]">
              Already have an account?
            </p>
            <button
              onClick={() => {
                handleScroll();
                navigate("/signin");
              }}
              className="bg-transparent border-[#E1E1E1] text-gray-500 text-[12px] font-semibold py-[9px] px-4 border hover:bg-[#0000000b] transition duration-400 hover:border-0 hover:py-2.5 "
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Signup;