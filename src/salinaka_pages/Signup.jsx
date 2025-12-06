import React, { useEffect, useRef } from "react";
import logo from "../assets/salinaka-logo.png";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Signup() {
    const navigate = useNavigate()
    const navbar = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (navbar.current) {
                if (window.scrollY < 50) {
                    navbar.current.classList.add("h-30");
                    navbar.current.classList.remove("shadow-md", "h-[10%]", 'bg-white');
                } else {
                    navbar.current.classList.add("shadow-md", "h-[10%]", 'bg-white');
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
                className="h-30 fixed w-full  flex items-center justify-center top-0 z-10"
            >
                <nav className="flex justify-center items-center w-[95%]">
                    <div className="w-[60%]">
                        <ul className="flex  items-center ">
                            <Link to="/">
                                <img src={logo} className="h-[50px]" alt="" />
                            </Link>
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? " text-black" : "text-gray-500"
                                    } text-sm font-semibold hover:bg-[#0000000e] px-5 transition py-2.5`
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? " text-black" : "text-gray-500"
                                    } text-sm font-semibold hover:bg-[#0000000e] px-5 transition py-2.5`
                                }
                                to="/shop"
                            >
                                Shop
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? " text-black" : "text-gray-500"
                                    } text-sm font-semibold hover:bg-[#0000000e] px-5 transition py-2.5`
                                }
                                to="/featured"
                            >
                                Featured
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? " text-black" : "text-gray-500"
                                    } text-sm font-semibold hover:bg-[#0000000e] px-5 transition py-2.5`
                                }
                                to="/recommended"
                            >
                                Recommended
                            </NavLink>
                        </ul>
                    </div>
                    <div className="flex w-[40%] bg-ambe-400 justify-between">
                        <div className="flex items-center w-[70%]">
                            <div className="bg-white flex space-x-3 border border-gray-500 items-center px-4 py-2">
                                <IoIosSearch className="text-lg" />
                                <input
                                    type="text"
                                    className=" placeholder:text-[13px] pr-15 focus:ring-0 focus:border-transparent focus:outline-none"
                                    placeholder="Search product..."
                                />
                            </div>
                            <div className="hover:bg-[#F2F2F2] text-center py-2.5 px-4 ">
                                <AiOutlineShopping className="text-2xl text-black " />
                            </div>
                        </div>
                        <div className=" w-[30%] flex items-center space-x-3.5 justify-center">
                            {/* <Link to='/signup'>
            <button className="bg-black text-white text-[12px] font-semibold py-2.5 px-4 hover:bg-neutral-800 transition duration-400">
              Sign Up
            </button>
            </Link> */}
                            <Link to='/signin'>
                                <button className="bg-[#f2f2f2] text-gray-500 text-[12px] font-semibold py-[9px] px-4 border-gray-500 border hover:bg-white transition duration-400">
                                    Sign In
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="border border-gray-400 w-[60%] m-auto mt-28 ">
                <div className="flex px-10 justify-between items-center">
                    <div className="w-[50%] ">
                        <h2 className="font-semibold text-2xl mt-7">Sign up to Salinaka</h2>
                        <form className="w-[90%] ">
                            <div className="flex flex-col mt-10">
                                <label className="text-[13px] pl-5 font-medium text-[#696D7B]">*Full name</label>
                                <input className=" border border-[#C5C5C5] py-1.5 pl-5 w-full  focus:ring-0 focus: focus:outline-none placeholder:font-medium pr- placeholder:text-[#9C9C9C]" type="text" placeholder="John Deo" />
                            </div>
                            <div className="flex flex-col mt-3">
                                <label className="text-[13px] pl-5 font-medium text-[#696D7B]">*Email</label>
                                <input className=" border border-[#C5C5C5] py-1.5 pl-5 w-full  focus:ring-0 focus: focus:outline-none placeholder:font-medium placeholder:text-[#9C9C9C]" type="email" placeholder="test@example.com" />
                            </div>
                            <div className="flex flex-col mt-3">
                                <label className="text-[13px] pl-5 font-medium text-[#696D7B]">*Password</label>
                                <input className=" border border-[#C5C5C5] py-1.5 pl-5 w-full focus:ring-0 focus: focus:outline-none placeholder:font-medium placeholder:text-[#9C9C9C]" type="password" placeholder="Your Password" />
                            </div>
                            <div className="">
                                <button className='text-lg flex items-center ml-auto  my-5   bg-black text-[#F7FFFF] py-2 px-4 font-medium hover:bg-neutral-800 transition duration-400'><p className="">Sign Up</p><FaArrowRight className='ml-2' /></button>
                            </div>
                        </form>
                    </div>
                    <div className="mb-4 ">
                        <div className="w-[0.1px] m-auto bg-[#E1E1E1] h-20"></div>
                        <p className="text-xs">OR</p>
                        <div className="w-[0.1px] m-auto bg-[#E1E1E1] h-20"></div>
                    </div>
                    <div className="m-auto flex flex-col gap-4">
                        <button className="flex items-center justify-center w-60 text-sm  py-3 gap-2 bg-[#0078FF] hover:bg-blue-600 text-[#F7FFFF] font-semibold  transition duration-200">
                            <p className="flex items-center ">
                                <FaFacebookSquare className="w-3 h-3 right-4 relative" /> Continue with Facebook
                            </p>
                        </button>

                        <button className="flex items-center justify-center w-60 text-sm  py-3 gap-2 border bg-[#FFFFFF] border-[#C5C5C5] text-[#3A3A3A] font-semibold hover:bg-[#0000001d] transition duration-200">
                            <p className="flex items-center">
                                <FaGoogle className="w- 3 h-3 ml-0 right-6 relative" /> Continue with Google
                            </p>
                        </button>

                        <button className="flex items-center justify-center w-60 text-sm  py-3 gap-2 border bg-[#24292E] text-[#ffffff] font-semibold hover:bg-[#31373c]  transition duration-200">
                            <p className=" flex items-center ">
                                <FaGithub className="w-3 h-3 right-6 relative" /> Continue with Github
                            </p>
                        </button>
                    </div>
                </div>
                <div className="bg-[#f2f2f2] flex py-3 justify-center items-center space-x-7">
                    <p className="text-sm font-medium">Already have an account?</p>
                    <button
                        onClick={() => {
                            handleScroll()
                            navigate('signin')
                        }}
                        className="bg-transparent border-[#f2f2f2]] text-gray-500 text-[12px] font-semibold py-[9px] px-4 border-gray-500 border hover:bg-[#0000000b] transition duration-400 hover:border-0 hover:py-2.5 ">
                        Sign In
                    </button>
                </div>
            </div>

        </div>

    );
}

export default Signup;