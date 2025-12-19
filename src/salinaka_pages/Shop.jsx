import React, { useEffect, useRef } from 'react';
import logo from "../assets/salinaka-logo.png";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import dataFour from '../consumable/featured-four'
import { handleScroll } from "../utils/handleScroll";
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate  ()
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
    <div>
      <header
            ref={navbar}
            className="h-30 fixed w-full z-50  flex items-center justify-center top-0 "
          >
            <nav className="flex justify-center items-center w-[94%]">
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
              <div className="flex w-[50%] justify-between">
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
                <div className="w-[26%] flex items-center space-x-3.5 justify-between">
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
       <div className="mt-27">
          <div className="w-[87%] m-auto h-[70vh]">
            <div className="grid lg:grid-cols-7 gap-5 h-70 w-full ">
          {dataFour.map((dataFour, id) => {
            return (
              <div
                key={id}
                className="w-full gap-6 border border-[#E5E5E5] shadow-sm transition-all cursor-pointer"
              >
                <div className="h-[120px] bg-[#F2F2F2] ">
                  <img
                    src={dataFour.imgUrl}
                    alt={dataFour.brand + "'s image"}
                    className=" mx-auto w-35 h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-[#F9F9F9] p-4 text-center h-[130px]">
                  <h2 className="font-bold text-1xl">{dataFour.brand}</h2>
                  <p
                    className="text-[#8E8E8E] font-bold pt-2"
                    style={{ fontStyle: "italic", fontSize: "15px" }}
                  >
                    {dataFour.name}
                  </p>
                  <h3 className='pt-4 font-bold'>{dataFour.amount}</h3>
                </div>
              </div>
            );
          })}
        </div>
          </div>
       </div>
    </div>
  )
}

export default Shop;