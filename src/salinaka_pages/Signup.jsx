import React, { useState, useContext, useEffect, useRef } from "react";
import logo from "/images/salinaka-logo.png";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { handleScroll } from "../utils/handleScroll";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

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
  const { cart, totalQuantity } = useContext(CartContext)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);


  return (
    <div className="overflow-x-hidden">
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
                  `${isActive ? "text-black" : "text-gray-500"
                  } text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={handleScroll}
                className={({ isActive }) =>
                  `${isActive ? "text-black" : "text-gray-500"
                  } text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`
                }
                to="/shop"
              >
                Shop
              </NavLink>
              <NavLink
                onClick={handleScroll}
                className={({ isActive }) =>
                  `${isActive ? "text-black" : "text-gray-500"
                  } text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`
                }
                to="/featured"
              >
                Featured
              </NavLink>
              <NavLink
                onClick={handleScroll}
                className={({ isActive }) =>
                  `${isActive ? "text-black" : "text-gray-500"
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
              <div className=" hover:bg-[#d3d3d335] text-center py-2.5 px-4 relative cursor-not-allowed">
                <AiOutlineShopping className="text-2xl  text-black" />
                <span className="absolute top-0 right-0">
                      {
                        cart.length > 0 ? 
                        <p className="text-sm bg-red-500 rounded-[50%] size-5 text-white text-bold">{totalQuantity}</p> :
                        ''
                      }
                  </span>
              </div>
            </div>

            <div
              className={`lg:hidden shadow-[0_12px_24px_rgba(0,0,0,0.45)] ring-1 ring-black/10 flex flex-col w-auto sm:w-60 sm:py-0 pb-7 pt-4 pl-5  h-auto fixed z-10 top-[15vh] right-0 justify-center bg-white
        transition-transform duration-300 ease-out 
        ${isMobileNavOpen ? "translate-x-0 right-4" : "translate-x-full"}`}
            >
              <div className="flex flex-col sm:mt-3">
                <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/">Home</NavLink>
                <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/shop">Shop</NavLink>
                <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/featured">Featured</NavLink>
                <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/recommended">Recommended</NavLink>

              </div>
              <div className="items-center xl:w-[60%] lg:w-[50%] mr-10 flex sm:hidden">
                <div className="bg-white flex space-x-3 border border-[#E5E5E5] items-center px-4 py-2">
                  <IoIosSearch className="text-lg" />
                  <input type="text" className="placeholder:text-[13px] xl:pr-15 lg:pr-7 focus:ring-0 focus:border-transparent focus:outline-none" placeholder="Search product..." />
                </div>
                <div className=" hover:bg-[#d3d3d335] text-center py-2.5 px-4 relative" >
                  <AiOutlineShopping className="text-2xl  text-black" />
                  <span className="absolute top-0 right-0">
                    {
                      cart.length > 0 ? (
                        <p className="text-sm bg-red-500 rounded-[50%] size-5 text-white text-bold ">{totalQuantity}</p>
                      ) :
                        ''
                    }
                  </span>
                </div>

              </div>
              <div className="flex mt-5 mb-0 sm:mb-6 space-x-4 sm:mt-2">
                <button onClick={() => { handleScroll(); navigate("/signup"); }} className="bg-black text-white text-[12px] font-semibold py-2 px-4 hover:bg-neutral-800">Sign Up</button>
                <button onClick={() => { handleScroll(); navigate("/signin"); }} className="bg-[#f2f2f2] text-gray-500 text-[12px] font-semibold py-2 px-4 border border-[#DFDFDF] hover:bg-white">Sign In</button>
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

            <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
              <IoMenuSharp className="text-3xl cursor-pointer lg:hidden" />
            </button>
          </div>
        </nav>
      </header>

      <div className="w-screen overflow-x-hidden">
        <div className="min-[901px]:mt-34 max-[900px]:mt-25 bg-0 m-auto w-full md:w-screen max-lg:pb-20">
          <div className="border border-[#C5C5C5] xl:w-[55%] min-[901px]:w-[70%] max-[900px]:w-[70%] max-[400px]:w-[92%] m-auto w-screen">
            <div className="min-[901px]:flex justify-between md:items-center w-[91%] m-auto">
              <div className="w-full min-[901px]:w-[50%] items-center text-left max-[900px]:text-center" >
                <h2 className="font-semibold text-[19px] mt-7">
                  Sign up to Salinaka
                </h2>
                <form className="w-full xs:pr-0 :w-[90%]">
                  <div className="flex flex-col mt-6">
                    <label className="text-[13px] mb-2 min-[900px]:pl-5 font-bold text-[#696D7B] text-left max-[900px]:text-center">
                      *Full name
                    </label>
                    <input
                      className=" border border-[#C5C5C5] py-1.5  w-full  focus:ring-0 focus: focus:outline-none placeholder:font-semibold placeholder:text-[#9C9C9C] placeholder:text-[13px] text-left max-[900px]:text-center min-[900px]:pl-5"
                      type="text"
                      placeholder="John Deo"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="text-[13px] mb-2 min-[900px]:pl-5 font-bold text-[#696D7B] text-left max-[900px]:text-center">
                      *Email
                    </label>
                    <input
                      className=" border border-[#C5C5C5] py-1.5  w-full focus:ring-0 focus: focus:outline-none placeholder:font-semibold placeholder:text-[#9C9C9C] placeholder:text-[13px] text-left max-[900px]:text-center min-[900px]:pl-5"
                      type="email"
                      placeholder="test@example.com"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="text-[13px] mb-2 min-[900px]:pl-5 font-bold text-[#696D7B] text-left max-[900px]:text-center">
                      *Password
                    </label>
                    <input
                      className=" border border-[#C5C5C5] py-1.5 w-full focus:ring-0 focus: focus:outline-none placeholder:font-semibold placeholder:text-[#9C9C9C] placeholder:text-[13px] text-left max-[900px]:text-center min-[900px]:pl-5"
                      type="password"
                      placeholder="Your Password"
                    />
                  </div>
                  <div className="lg:mb-8 md:w-full">
                    <button className="max-[900px]:w-full max-[900px]:justify-center text-[16px] flex items-center ml-auto  my-5  bg-black text-[#F7FFFF] py-3.5 px-3 font-bold hover:bg-neutral-800 transition duration-400">
                      <p className="">Sign Up</p>
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="min-[901px]:pb-4 min-[901px]:grid max-[900px]:flex max-[900px]:mb-5 m-auto max-[500px]:justify-baseline min-[901px]:w-auto min-[700px]:w-[70%] min-[500px]:w-full max-[900px]:py-4">
                <div className="min-[901px]:w-[0.1px] m-auto bg-[#E1E1E1] min-[901px]:h-16 min-[901px]:mt-3 max-[900px]:h-[0.2vw] max-[500px]:w-22 max-[900px]:w-32"></div>
                <p className="text-xs font-bold min-[901px]:py-1">OR</p>
                <div className="min-[901px]:w-[0.1px] m-auto bg-[#E1E1E1] min-[901px]:h-16 max-[900px]:h-[0.2vw] max-[900px]:w-32 max-[500px]:w-22"></div>
              </div>
              <div className="min-[901px]:my-auto flex flex-col gap-3 min-[901px]:w-auto w-full max-min-[901px]:mb-6">
                <button className="flex items-center justify-center min-[901px]:w-60 text-sm  py-3.5 gap-2 bg-[#0078FF] hover:bg-blue-600 text-[#F7FFFF] font-semibold  transition duration-200">
                  <p className="flex items-center ">
                    <FaFacebookSquare className="w-4 h-4 right-4 relative" />{" "}
                    Continue with Facebook
                  </p>
                </button>

                <button className="flex items-center justify-center lg:w-60 text-sm  py-3.5 gap-2 border bg-[#FFFFFF] border-[#C5C5C5] text-[#3A3A3A] font-semibold hover:bg-[#0000001d] transition duration-200">
                  <p className="flex items-center">
                    <FaGoogle className="w-4 h-4 ml-0 right-6 relative" />{" "}
                    Continue with Google
                  </p>
                </button>

                <button className="flex items-center justify-center lg:w-60 text-sm  py-3.5 gap-2 border bg-[#24292E] text-[#ffffff] font-semibold hover:bg-[#31373c]  transition duration-200 max-[900px]:mb-10">
                  <p className=" flex items-center ">
                    <FaGithub className="w-4 h-4 right-6 relative" /> Continue
                    with Github
                  </p>
                </button>
              </div>
            </div>
            <div className="bg-[#f2f2f2] flex py-3.5 border-t border-[#C5C5C5] justify-center items-center space-x-7 object-contain">
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