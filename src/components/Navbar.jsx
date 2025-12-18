import React, { useEffect, useRef } from "react";
import logo from "../assets/salinaka-logo.png";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { handleScroll } from "../utils/handleScroll";

function Navbar() {
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
    return () => window.removeEventListener("scroll", handleScroll);///////po[/]
  }, []);
  return (
    <header
      ref={navbar}
      className="h-30 fixed w-full z-50  flex items-center justify-center top-0 "
    >
      <nav className="flex justify-center items-center w-15/16 g-red-700">
        <div className="w-[60%]">
          <ul className="flex  items-center ">
            <Link to="/">
              <img src={logo} className="h-[50px]" alt="" />
            </Link>
            <NavLink
              onClick={handleScroll}
              className={({ isActive }) =>
                `${isActive ? " text-black" : "text-gray-500"
                } text-sm font-semibold hover:bg-[#0000000e] px-5 transition py-2.5`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={handleScroll}
              className={({ isActive }) =>
                `${isActive ? " text-black" : "text-gray-500"
                } text-sm font-semibold hover:bg-[#0000000e] px-5 transition py-2.5`
              }
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              onClick={handleScroll}
              className={({ isActive }) =>
                `${isActive ? " text-black" : "text-gray-500"
                } text-sm font-semibold hover:bg-[#0000000e] px-5 transition py-2.5`
              }
              to="/featured"
            >
              Featured
            </NavLink>
            <NavLink
              onClick={handleScroll}
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
        <div className="flex w-[50%] justify-around">
          <div className="flex items-center w-[60%]">
            <div className="bg-white flex space-x-3 border border-[#E5E5E5] items-center px-4 py-2">
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
          <div className="w-[30%]  flex items-center space-x-3.5 justify-center">
            <button onClick={() => {
              handleScroll()
              navigate('/signup')
            }} className="bg-black text-white text-[12px] font-semibold py-2.5 px-4 hover:bg-neutral-800 transition duration-400">
              Sign Up
            </button>
            <button onClick={() => {
              handleScroll()
              navigate('/signin')
            }} className="bg-[#f2f2f2] text-gray-500 text-[12px] font-semibold py-[9px] px-4 border border-[#DFDFDF] hover:bg-white transition duration-400">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;